# Inventory Management System Documentation

## Overview

The pizza delivery application includes a comprehensive inventory management system that tracks product availability, prevents over-ordering, and automatically resets inventory at the end of each day.

## Key Features

### 1. Initial Inventory Setup
- All products start with **100 units** of inventory
- Each product has two inventory fields:
  - `inventory`: Current available stock
  - `maxInventory`: Maximum stock level (always 100)

### 2. Real-Time Inventory Tracking

When a customer places an order:
1. System checks if requested quantity ≤ available inventory
2. If yes: Order is placed and inventory is decremented
3. If no: Order is rejected with clear error message

**Example:**
```
Product: Margherita Pizza
Current Inventory: 100

Customer orders 10 pizzas → ✅ Order placed
New Inventory: 90

Customer tries to order 95 pizzas → ❌ Order rejected
Error: "Insufficient inventory for Margherita. Available: 90, Requested: 95"
```

### 3. Transaction Safety

The order placement process uses **MongoDB transactions** to ensure data consistency:
- All inventory checks happen within a transaction
- If any item fails validation, entire order is rolled back
- Prevents race conditions in concurrent orders
- Ensures inventory is never negative

### 4. Automatic EOD Reset

**Schedule**: Every day at 11:59 PM (23:59)

**What happens:**
- All products' inventory is reset to their maxInventory (100)
- Runs automatically via node-cron scheduler
- Logs the number of products updated
- No manual intervention required

**Implementation:**
```typescript
// Runs at 23:59 every day
cron.schedule('59 23 * * *', async () => {
  await Product.updateMany(
    {},
    [{ $set: { inventory: '$maxInventory' } }]
  );
  console.log('Inventory reset completed');
});
```

## Database Schema

### Product Model
```typescript
{
  name: String,
  description: String,
  category: String,
  basePrice: Number,
  image: String,
  isVeg: Boolean,
  isAvailable: Boolean,
  inventory: Number,        // Current stock (0-100)
  maxInventory: Number,     // Always 100
  createdAt: Date,
  updatedAt: Date
}
```

## API Integration

### Check Product Inventory
```
GET /api/products/:id

Response:
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Margherita",
    "inventory": 85,
    "maxInventory": 100,
    ...
  }
}
```

### Place Order (Inventory Validation)
```
POST /api/orders
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "addressId": "address_id",
  "paymentMethod": "cod"
}

Success Response (200):
{
  "success": true,
  "data": { ...order details }
}

Inventory Error (400):
{
  "success": false,
  "message": "Insufficient inventory for Margherita. Available: 45, Requested: 50"
}
```

## Error Handling

### Insufficient Inventory
**When**: Order quantity exceeds available stock
**Response**: 400 Bad Request
**Message**: "Insufficient inventory for [Product Name]. Available: X, Requested: Y"
**Action**: Transaction is aborted, cart remains unchanged

### Product Not Found
**When**: Product ID doesn't exist
**Response**: 404 Not Found
**Message**: "Product [ID] not found"
**Action**: Order is not created

### Database Connection Issues
**When**: MongoDB connection fails
**Response**: 500 Internal Server Error
**Message**: "Server error"
**Action**: Transaction is aborted safely

## Testing Inventory System

### Test Case 1: Normal Order
1. Add 5 pizzas to cart
2. Place order
3. Check product inventory → Should be decreased by 5
4. ✅ Expected: Order successful, inventory updated

### Test Case 2: Insufficient Inventory
1. Product has 30 units
2. Try to order 35 units
3. ✅ Expected: Error message with available quantity

### Test Case 3: Multiple Products
1. Add multiple products to cart
2. One product has insufficient inventory
3. ✅ Expected: Entire order rejected, no inventory changes

### Test Case 4: EOD Reset
1. Note inventory levels before 11:59 PM
2. Wait for midnight
3. Check inventory after 12:00 AM
4. ✅ Expected: All products back to 100 units

### Test Case 5: Concurrent Orders
1. Two users order same product simultaneously
2. Total requested > available
3. ✅ Expected: First completes, second gets inventory error

## Monitoring & Logs

### Scheduler Logs
```
Inventory reset scheduler initialized - runs daily at 11:59 PM
```

### Reset Logs
```
Running EOD inventory reset...
Inventory reset completed. 32 products updated.
```

### Order Logs
```
Order created: ORD1702123456789
Inventory updated for products: [Product IDs]
```

## Business Rules

1. **Maximum Inventory**: Never exceeds 100 units per product
2. **Minimum Inventory**: Can go down to 0, but no negative values
3. **Reset Time**: Fixed at 23:59 (11:59 PM) daily
4. **Reset Amount**: Always restores to maxInventory (100)
5. **Order Validation**: Happens before payment processing
6. **Stock Reservation**: Inventory is locked during order transaction

## Future Enhancements

Potential improvements to the inventory system:

1. **Low Stock Alerts**: Notify when inventory < 20
2. **Custom Reset Times**: Allow configurable reset schedules
3. **Variable Max Inventory**: Different max values per product
4. **Inventory History**: Track inventory changes over time
5. **Predictive Restocking**: Forecast based on order patterns
6. **Real-time Stock Updates**: WebSocket notifications to frontend
7. **Partial Order Fulfillment**: Fulfill what's available, backorder rest
8. **Reserve Inventory**: Hold stock for pending carts

## Troubleshooting

### Issue: Inventory not resetting
**Check**: 
- Server is running continuously
- Cron job is initialized (check startup logs)
- Server timezone is correct

### Issue: Negative inventory
**Solution**: 
- Should never happen due to transaction safety
- If occurs, run seed script to reset: `npm run seed`

### Issue: Order placed despite low inventory
**Check**:
- Verify transaction implementation
- Check database logs for rollback
- Ensure latest code is deployed

## Summary

The inventory management system ensures:
- ✅ No overselling
- ✅ Accurate stock levels
- ✅ Automatic replenishment
- ✅ Transaction safety
- ✅ Clear error messages
- ✅ Zero manual intervention

**All inventory operations are automated and production-ready!**
