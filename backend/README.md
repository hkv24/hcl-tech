# Pizza Delivery App - Backend

A complete Node.js/Express backend with MongoDB for a pizza delivery application.

## Features

- **Authentication**: JWT-based user registration and login
- **Product Management**: CRUD operations for products with inventory tracking
- **Cart System**: Add, update, remove items from cart
- **Order Management**: Create orders with inventory validation
- **Coupon System**: Validate and apply discount coupons
- **User Profiles**: Manage user information and delivery addresses
- **Inventory Management**: 
  - All products limited to 100 units
  - Auto-decrement on order placement
  - Auto-reset to 100 at EOD (11:59 PM daily)
  - Validation to prevent orders exceeding inventory

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- node-cron for scheduled tasks
- express-validator for input validation

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create `.env` file with your MongoDB connection:
```env
PORT=5000
MONGODB_URI=mongodb+srv://dhruvdhkh:Dhruv@123@cluster0.l3wfjib.mongodb.net/pizza-app
JWT_SECRET=pizza-app-super-secret-jwt-key-2024
JWT_EXPIRE=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

3. Seed the database with products and sample coupons:
```bash
npm run seed
```

4. Start the development server:
```bash
npm run dev
```

The server will start on http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Create product (Protected)
- `PUT /api/products/:id` - Update product (Protected)
- `DELETE /api/products/:id` - Delete product (Protected)

### Cart
- `GET /api/cart` - Get user cart (Protected)
- `POST /api/cart/add` - Add item to cart (Protected)
- `PUT /api/cart/update/:itemId` - Update cart item (Protected)
- `DELETE /api/cart/remove/:itemId` - Remove cart item (Protected)
- `DELETE /api/cart/clear` - Clear cart (Protected)

### Orders
- `POST /api/orders` - Create new order (Protected)
- `GET /api/orders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get single order (Protected)
- `GET /api/orders/track/:orderNumber` - Track order (Protected)
- `PUT /api/orders/:id/status` - Update order status (Protected)
- `GET /api/orders/admin/all` - Get all orders (Protected)

### Coupons
- `POST /api/coupons/validate` - Validate coupon (Protected)
- `GET /api/coupons` - Get active coupons
- `POST /api/coupons` - Create coupon (Protected)
- `PUT /api/coupons/:id` - Update coupon (Protected)
- `DELETE /api/coupons/:id` - Delete coupon (Protected)

### Users
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update profile (Protected)
- `POST /api/users/address` - Add address (Protected)
- `PUT /api/users/address/:addressId` - Update address (Protected)
- `DELETE /api/users/address/:addressId` - Delete address (Protected)

## Sample Coupons

The following 50% off coupons are pre-seeded:

- **MEGA50**: 50% off on orders above ₹500 (max ₹500 discount)
- **WELCOME50**: 50% off on orders above ₹300 (max ₹300 discount)
- **SUPER50**: 50% off on orders above ₹1000 (max ₹1000 discount)
- **FLAT250**: Flat ₹250 off on orders above ₹800

## Inventory Management

- All products start with 100 units inventory
- When an order is placed, inventory is decremented
- If order quantity exceeds available inventory, order is rejected
- Every day at 11:59 PM, all product inventories reset to 100
- Inventory tracking uses MongoDB transactions for consistency

## Database Models

- **User**: User accounts with addresses
- **Product**: Products with inventory tracking
- **Cart**: User shopping carts
- **Order**: Order history with items and delivery info
- **Coupon**: Discount coupons with validation rules
