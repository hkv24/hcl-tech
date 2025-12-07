# Pizza Hub - Domino's-like Pizza Ordering Platform

## 🍕 Project Overview

Pizza Hub is a modern, full-stack pizza ordering platform inspired by Domino's Pizza. The application provides a seamless user experience for browsing menu items, managing shopping carts, user authentication, and order processing.

## 🏗️ Architecture

- **Frontend**: Next.js 14 with React 18, TypeScript, and Tailwind CSS
- **Backend**: Express.js with MongoDB Atlas (planned)
- **State Management**: Recoil for frontend state
- **Authentication**: Local storage with API-ready architecture

## 📚 Documentation

### 📖 Frontend Documentation
- **[Frontend README](./FRONTEND_README.md)** - Comprehensive frontend documentation
- **[Component Documentation](./COMPONENT_DOCS.md)** - Detailed component library guide
- **[Development Guide](./DEVELOPMENT_GUIDE.md)** - Setup and development workflow

### 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pizza-hub
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Access Application**
   ```
   http://localhost:3000
   ```

## ✨ Current Features

### 🔐 Authentication System
- User registration and login
- Local storage fallback (works offline)
- Protected routes for cart operations
- Session management

### 🍕 Menu Management
- 24 realistic menu items (pizzas, beverages, desserts)
- Real-time search and filtering
- High-quality product images
- Responsive design

### 🛒 Shopping Cart
- Add, update, remove items
- Quantity management
- Real-time price calculation
- Authentication guards
- Persistent cart state

### 👤 User Profile
- Profile information management
- Address book functionality
- Local storage integration
- Form validation

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly controls
- Modern UI components

## 🛠️ Technology Stack

### Frontend
- **Next.js 14.2.7** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Recoil** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **VS Code** - Recommended IDE
- **Git** - Version control

## 📂 Project Structure

```
pizza-hub/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility libraries
│   │   ├── store/           # State management
│   │   └── types/           # TypeScript definitions
│   ├── public/              # Static assets
│   └── package.json         # Dependencies
├── FRONTEND_README.md       # Frontend documentation
├── COMPONENT_DOCS.md        # Component library docs
├── DEVELOPMENT_GUIDE.md     # Development setup guide
└── README.md               # This file
```

## 🎯 Key Components

### Layout Components
- **Header**: Navigation with cart count and user menu
- **Footer**: Site-wide footer with links
- **Sidebar**: Mobile navigation drawer

### Product Components
- **ProductCard**: Menu item display with add to cart
- **PizzaCustomizer**: Item customization modal
- **ProductList**: Grid layout for menu items

### Cart Components
- **CartItem**: Individual cart item management
- **CartSummary**: Order totals and checkout

### UI Components
- **Button**: Versatile button with variants
- **Card**: Content container component
- **Input**: Form input with validation
- **Modal**: Reusable modal component

## 🔧 Development Status

### ✅ Completed Features
- [x] Frontend application setup (Next.js 14)
- [x] Authentication system with local storage
- [x] Menu with 24 realistic items
- [x] Shopping cart functionality
- [x] User profile and address management
- [x] Responsive design implementation
- [x] Component library
- [x] State management (Recoil)
- [x] Form validation (Zod)
- [x] TypeScript integration

### 🔄 In Progress
- [ ] Backend API development (Express.js)
- [ ] MongoDB Atlas integration
- [ ] Order processing system
- [ ] Payment gateway integration

### 📋 Planned Features
- [ ] Real-time order tracking
- [ ] Push notifications
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] PWA support
- [ ] Multi-language support

## 🚀 Deployment

### Development
```bash
cd frontend
npm run dev     # Starts dev server at http://localhost:3000
```

### Production
```bash
cd frontend
npm run build   # Creates production build
npm run start   # Starts production server
```

### Deployment Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS S3 + CloudFront**
- **Docker**

## 🔐 Environment Configuration

Create `.env.local` in frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=Pizza Hub
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the development guidelines in [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from Domino's Pizza
- Images from Unsplash
- Icons from Lucide React
- UI patterns from modern e-commerce platforms

---

For detailed information about specific aspects of the project, please refer to the documentation files linked above.
