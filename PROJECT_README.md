# Pizza Delivery Application

A full-stack pizza delivery application with Next.js frontend and Node.js/Express backend.

## 🚀 Features

### Backend Features
- **Authentication System**: JWT-based user registration and login
- **Product Management**: Complete CRUD operations for products
- **Smart Inventory System**:
  - All products limited to 100 units maximum
  - Real-time inventory tracking
  - Automatic inventory deduction on order placement
  - Validation to prevent orders exceeding available stock
  - **Automatic EOD Reset**: Inventory resets to 100 units daily at 11:59 PM
- **Shopping Cart**: Add, update, remove items with live total calculation
- **Order Management**: 
  - Create orders with inventory validation
  - Order tracking by order number
  - Order status updates
  - Transaction-safe order processing
- **Coupon System**: 
  - Validate and apply discount coupons
  - **4 Pre-loaded 50% off coupons**
  - Percentage and flat discount support
- **User Profiles**: Manage personal info and delivery addresses
- **Address Management**: Multiple delivery addresses per user

### Frontend Features
- Modern, responsive UI with Next.js 14 and Tailwind CSS
- Real-time cart management with Recoil state management
- Product browsing by categories
- User authentication and profile management
- Order tracking and history
- Coupon application at checkout

## 🛠️ Tech Stack

### Backend
- Node.js & Express.js
- TypeScript
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- node-cron for scheduled tasks
- express-validator for input validation

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Recoil for state management
- Axios for API calls
- React Hook Form with Zod validation

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. The `.env` file is already configured with:
```env
PORT=5001
MONGODB_URI=mongodb+srv://dhruvdhkh:Dhruv%40123@cluster0.l3wfjib.mongodb.net/pizza-app
JWT_SECRET=pizza-app-super-secret-jwt-key-2024
JWT_EXPIRE=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

4. Seed the database with products and coupons:
```bash
npm run seed
```

5. Start the backend server:
```bash
npm run dev
```

Backend will run on **http://localhost:5001**

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. The `.env.local` file is configured with:
```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

4. Start the frontend:
```bash
npm run dev
```

Frontend will run on **http://localhost:3000**

## 🎟️ Sample Coupons (50% OFF)

The following coupons are pre-loaded in the database:

| Code | Description | Discount | Min Order | Max Discount |
|------|-------------|----------|-----------|--------------|
| **MEGA50** | 50% off on orders above ₹500 | 50% | ₹500 | ₹500 |
| **WELCOME50** | Welcome offer - 50% off | 50% | ₹300 | ₹300 |
| **SUPER50** | Super saver - 50% off on ₹1000+ | 50% | ₹1000 | ₹1000 |
| **FLAT250** | Flat ₹250 off on orders above ₹800 | ₹250 | ₹800 | ₹250 |

## 📊 Inventory Management

### Key Features:
1. **Initial Stock**: All products start with 100 units
2. **Order Validation**: Orders are rejected if quantity exceeds available inventory
3. **Real-time Updates**: Inventory decrements immediately when order is placed
4. **Error Handling**: Clear error messages when inventory is insufficient
5. **EOD Reset**: Automated daily reset at 11:59 PM to restore all products to 100 units
6. **Transaction Safety**: MongoDB transactions ensure inventory consistency

### How It Works:
```
1. User adds items to cart
2. At checkout, system validates inventory availability
3. If sufficient inventory → Order placed → Inventory decremented
4. If insufficient inventory → Order rejected with error message
5. Every day at 11:59 PM → All products reset to 100 units
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get by category

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:itemId` - Update quantity
- `DELETE /api/cart/remove/:itemId` - Remove item
- `DELETE /api/cart/clear` - Clear cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `GET /api/orders/track/:orderNumber` - Track order

### Coupons
- `POST /api/coupons/validate` - Validate coupon
- `GET /api/coupons` - Get active coupons

### Users
- `GET /api/users/profile` - Get profile
- `PUT /api/users/profile` - Update profile
- `POST /api/users/address` - Add address
- `PUT /api/users/address/:id` - Update address
- `DELETE /api/users/address/:id` - Delete address

## 🗄️ Database Schema

### Models:
- **User**: User accounts with addresses
- **Product**: Products with inventory tracking (inventory, maxInventory fields)
- **Cart**: Shopping carts with items
- **Order**: Orders with delivery info and items
- **Coupon**: Discount coupons with validation rules

## 🎯 Key Features Implemented

✅ Complete authentication system
✅ Product catalog with 32 items across 4 categories
✅ Shopping cart with real-time calculations
✅ Order creation with address selection
✅ Inventory management (100 unit limit per product)
✅ Automatic inventory deduction on orders
✅ Error handling for insufficient inventory
✅ 4 pre-loaded 50% off coupons
✅ Daily inventory reset at EOD (11:59 PM)
✅ User profile and address management
✅ Order tracking and history
✅ Transaction-safe order processing

## 📝 Usage Flow

1. **Register/Login**: Create an account or login
2. **Browse Products**: View menu items by category
3. **Add to Cart**: Select products and quantities
4. **Checkout**: 
   - Select delivery address
   - Apply coupon code (optional)
   - Choose payment method
   - Place order
5. **Order Confirmation**: Receive order number and tracking details
6. **Track Order**: Monitor order status in real-time

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## 🐛 Error Handling

The system handles various scenarios:
- Invalid credentials
- Insufficient inventory
- Invalid coupon codes
- Network errors
- Database connection issues
- Validation errors

## 🎨 UI Components

- Responsive design for all screen sizes
- Product cards with images
- Interactive cart
- Order history cards
- Form validation
- Loading states
- Toast notifications

## 📞 Support

For issues or questions, please check:
- Backend README: `backend/README.md`
- Frontend Guide: `FRONTEND_GUIDE.md`

## 🚀 Deployment

### Backend Deployment
1. Build TypeScript: `npm run build`
2. Start production: `npm start`
3. Ensure MongoDB URI is configured
4. Set proper CORS origins

### Frontend Deployment
1. Build Next.js: `npm run build`
2. Start production: `npm start`
3. Update API URL in environment variables

---

**Note**: This application is configured and ready to run. All buttons work and connect to the backend API. The inventory system is fully functional with automatic EOD resets.
