# Quick Start Guide

## Getting Started

Your pizza delivery application is now fully set up with a working backend!

### What's Been Set Up:

#### ✅ Backend (Running on port 5001)
- MongoDB connected successfully
- 32 products seeded (pizzas, beverages, desserts, sides)
- 4 coupons with 50% off pre-loaded
- All products have 100 units inventory
- Inventory management system active
- Daily EOD reset scheduler running

#### ✅ Database Seeded With:
- **8 Pizzas** (₹199-₹499)
- **8 Beverages** (₹57-₹90)
- **8 Desserts** (₹59-₹119)
- **8 Sides** (₹89-₹199)

#### ✅ Sample Coupons:
1. **MEGA50** - 50% off on ₹500+ orders
2. **WELCOME50** - 50% off on ₹300+ orders
3. **SUPER50** - 50% off on ₹1000+ orders
4. **FLAT250** - ₹250 off on ₹800+ orders

### Starting the Application:

#### Backend (Already Running):
```bash
cd backend
npm run dev
```
✅ Server: http://localhost:5001
✅ Status: Running

#### Frontend (Start Now):
Open a new terminal:
```bash
cd frontend
npm install  # First time only
npm run dev
```
🌐 Frontend: http://localhost:3000

### Testing the Application:

1. **Register a New User**:
   - Go to http://localhost:3000/register
   - Create an account

2. **Browse Products**:
   - View menu at http://localhost:3000/menu
   - Products are categorized (Pizza, Beverages, Desserts, Sides)

3. **Add to Cart**:
   - Click on any product
   - Add to cart
   - View cart at http://localhost:3000/cart

4. **Place Order**:
   - Go to checkout
   - Add a delivery address
   - Apply coupon: **MEGA50** for 50% off
   - Choose payment method
   - Place order

5. **Test Inventory**:
   - Try ordering more than 100 of any item
   - You'll get an error message
   - Place a smaller order
   - Check inventory decrements

6. **Track Order**:
   - View orders at http://localhost:3000/orders
   - See order status and details

### API Testing (Using Thunder Client/Postman):

**Register User:**
```
POST http://localhost:5001/api/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

**Login:**
```
POST http://localhost:5001/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

**Get Products:**
```
GET http://localhost:5001/api/products
```

**Validate Coupon (requires Bearer token):**
```
POST http://localhost:5001/api/coupons/validate
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "code": "MEGA50"
}
```

### Key Features Working:

✅ User Registration & Login
✅ Product Browsing (All 32 products)
✅ Add to Cart
✅ Cart Management (Add/Update/Remove)
✅ Checkout Process
✅ Address Management
✅ Coupon Application
✅ Order Placement
✅ Inventory Validation (Max 100 per product)
✅ Inventory Deduction on Order
✅ Order Tracking
✅ Profile Management
✅ EOD Inventory Reset (11:59 PM daily)

### Inventory Management:

**How to Test:**
1. Check current inventory: GET /api/products/:id
2. Place an order with 10 items
3. Check inventory again - should be reduced by 10
4. Try ordering 150 items - will fail with error
5. At 11:59 PM daily, inventory auto-resets to 100

### Troubleshooting:

**Backend not connecting?**
- Check MongoDB URI in `backend/.env`
- Ensure port 5001 is not in use

**Frontend not loading?**
- Check `.env.local` has correct API URL
- Run `npm install` in frontend directory

**Database empty?**
- Run `npm run seed` in backend directory

### Development URLs:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5001/api
- **Health Check**: http://localhost:5001/health
- **MongoDB**: Connected via Atlas

---

## Next Steps:

1. Start the frontend: `cd frontend && npm run dev`
2. Open browser: http://localhost:3000
3. Register a new account
4. Start ordering pizzas! 🍕

**All buttons work and are connected to the backend!**
