# Pizza Hub - Frontend Documentation

## 🍕 Overview

Pizza Hub is a modern, responsive pizza ordering platform built with Next.js 14, React 18, and TypeScript. The application provides a seamless user experience for browsing menu items, managing cart operations, user authentication, and profile management.

## 🚀 Tech Stack

### Core Technologies
- **Next.js 14.2.7** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **Recoil** - State management for React
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation

### UI Components
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **Custom UI Components** - Reusable component library

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Authentication routes group
│   │   │   ├── login/         # Login page
│   │   │   └── register/      # Registration page
│   │   ├── cart/              # Shopping cart page
│   │   ├── checkout/          # Checkout page
│   │   ├── menu/              # Menu browsing page
│   │   ├── orders/            # Orders management
│   │   ├── profile/           # User profile page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable UI components
│   │   ├── cart/              # Cart-related components
│   │   ├── layout/            # Layout components
│   │   ├── order/             # Order-related components
│   │   ├── product/           # Product-related components
│   │   └── ui/                # Base UI components
│   ├── data/                  # Static data and mock data
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   ├── store/                 # State management (Recoil atoms)
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📋 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### TypeScript Configuration
The project uses strict TypeScript configuration with:
- Strict mode enabled
- Path aliases configured (`@/` points to `src/`)
- Type checking for React components

## 🎯 Key Features

### 1. Authentication System
- **Local Storage Fallback**: Works offline without backend
- **Registration**: Email, password, name, phone validation
- **Login**: Email/password authentication
- **Protected Routes**: Cart operations require authentication
- **Session Management**: Persistent login state

### 2. Menu Management
- **24 Realistic Items**: 8 pizzas, 8 beverages, 8 desserts
- **Search & Filter**: Real-time menu search
- **Responsive Design**: Grid layout with mobile optimization
- **High-Quality Images**: Unsplash CDN integration

### 3. Shopping Cart
- **Local State Management**: Cart persists during session
- **Add/Update/Remove**: Full cart operation support
- **Quantity Management**: Increment/decrement controls
- **Price Calculation**: Real-time total calculation
- **Authentication Guards**: Redirects to login when required

### 4. User Profile
- **Profile Management**: Update name and phone
- **Address Management**: Add, edit, delete addresses
- **Local Storage**: Works without backend API
- **Form Validation**: Comprehensive form validation

### 5. Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Tailwind CSS**: Utility-first styling approach
- **Component Library**: Reusable UI components
- **Consistent Theming**: Unified design system

## 🧩 Component Architecture

### Layout Components (`/components/layout/`)
- **Header**: Navigation with cart count and user menu
- **Footer**: Site-wide footer with links
- **Sidebar**: Mobile navigation drawer

### UI Components (`/components/ui/`)
- **Button**: Customizable button variants
- **Card**: Container component with variants
- **Input**: Form input with validation states
- **Modal**: Reusable modal component
- **Badge**: Status and category indicators
- **Loader**: Loading state indicators

### Feature Components
- **ProductCard**: Menu item display
- **PizzaCustomizer**: Add to cart modal
- **CartItem**: Shopping cart item management
- **OrderCard**: Order history display

## 📊 State Management

### Recoil Atoms

#### Authentication State (`authState`)
```typescript
{
  user: User | null,
  isAuthenticated: boolean,
  isLoading: boolean
}
```

#### Cart State (`cartState`)
```typescript
{
  items: CartItem[],
  isLoading: boolean
}
```

#### Computed Selectors
- `cartItemsCountSelector`: Total items in cart
- `cartTotalSelector`: Total cart value

### Local Storage Strategy
- **Users**: Stored in `users` array
- **Current User**: Active user in `currentUser`
- **Addresses**: User addresses in `userAddresses`
- **Session Token**: Mock token in `token`

## 🔐 Authentication Flow

### Registration Process
1. User fills registration form
2. Frontend validates with Zod schema
3. Checks for duplicate email in localStorage
4. Creates user record with unique ID
5. Generates mock authentication token
6. Redirects to homepage

### Login Process
1. User enters credentials
2. Frontend validates against stored users
3. Matches email/password combination
4. Creates session with mock token
5. Updates authentication state
6. Redirects to intended page

### Protected Routes
- Cart operations require authentication
- Profile page requires authentication
- Checkout process requires authentication
- Automatic redirects to `/login` for unauthenticated users

## 🛒 Cart Management

### Local Cart Operations
- **Add Item**: Adds new items or updates quantity
- **Update Quantity**: Modifies item quantities
- **Remove Item**: Removes items from cart
- **Clear Cart**: Empties entire cart
- **Persistence**: Maintains cart during authentication changes

### Cart Validation
- Authentication checks before operations
- Quantity validation (minimum 1)
- Price recalculation on updates
- Stock availability (future enhancement)

## 🎨 Styling System

### Tailwind CSS Configuration
- Custom color palette
- Responsive breakpoints
- Component variants
- Utility classes for common patterns

### Component Styling Patterns
- **Variant-based styling**: Button and card variants
- **Responsive design**: Mobile-first approach
- **State-based styling**: Hover, focus, disabled states
- **Consistent spacing**: Tailwind spacing scale

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Touch-friendly buttons
- Optimized image sizes
- Collapsible navigation
- Swipe gestures support

## 🔄 API Integration

### Current Implementation
- **Local Storage Fallback**: Works without backend
- **API-Ready Architecture**: Prepared for backend integration
- **Error Handling**: Graceful API failure handling
- **Loading States**: User feedback during operations

### Future Backend Integration
The frontend is designed to seamlessly integrate with a backend API:

```typescript
// Example API integration
const response = await api.post('/auth/login', credentials);
// Falls back to localStorage if API fails
```

## 🧪 Testing Strategy

### Recommended Testing Setup
- **Unit Tests**: Jest + React Testing Library
- **Component Tests**: Storybook for component development
- **E2E Tests**: Cypress or Playwright
- **Type Safety**: TypeScript compile-time checks

### Test Coverage Areas
- Authentication flows
- Cart operations
- Form validations
- Component rendering
- State management
- Local storage operations

## 🚀 Performance Optimizations

### Current Optimizations
- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Static Generation**: Pre-rendered pages where possible

### Recommended Enhancements
- **React.memo**: For expensive re-renders
- **useMemo/useCallback**: For expensive computations
- **Virtual Scrolling**: For large menu lists
- **Service Worker**: For offline capabilities

## 🔒 Security Considerations

### Current Implementation
- **Input Validation**: Zod schema validation
- **XSS Prevention**: React's built-in protection
- **Type Safety**: TypeScript compile-time checks
- **Local Storage Security**: Minimal sensitive data storage

### Production Recommendations
- **HTTPS Enforcement**: SSL/TLS encryption
- **API Authentication**: JWT or session-based auth
- **Rate Limiting**: Request throttling
- **Input Sanitization**: Server-side validation
- **CORS Configuration**: Proper cross-origin setup

## 📈 Deployment

### Build Process
```bash
npm run build    # Creates optimized production build
npm run start    # Starts production server
```

### Deployment Platforms
- **Vercel**: Recommended for Next.js (zero-config)
- **Netlify**: Static site deployment
- **AWS**: S3 + CloudFront
- **Docker**: Containerized deployment

### Environment Configuration
- Production API endpoints
- CDN configuration for images
- Analytics integration
- Error monitoring setup

## 🐛 Common Issues & Solutions

### Issue: Authentication not persisting
**Solution**: Check localStorage availability and token format

### Issue: Cart items disappearing
**Solution**: Verify cart state management and localStorage updates

### Issue: Images not loading
**Solution**: Check Unsplash URLs and Next.js image configuration

### Issue: Form validation errors
**Solution**: Review Zod schemas and form field names

## 🔄 Future Enhancements

### Planned Features
- **Order Tracking**: Real-time order status updates
- **Payment Integration**: Stripe/PayPal integration
- **Push Notifications**: Order updates and promotions
- **PWA Support**: Offline functionality
- **Multi-language**: Internationalization support
- **Dark Mode**: Theme switching capability

### Technical Improvements
- **Backend Integration**: API-based data management
- **Database**: Persistent data storage
- **Real-time Updates**: WebSocket integration
- **Performance Monitoring**: Analytics and metrics
- **Automated Testing**: CI/CD pipeline

## 📞 Support & Contributing

### Getting Help
- Check the documentation above
- Review component examples in Storybook
- Examine existing component implementations
- Check browser console for error messages

### Development Guidelines
- Follow TypeScript strict mode
- Use Tailwind CSS for styling
- Implement error boundaries
- Write accessible components
- Follow React best practices

### Code Style
- Use functional components
- Implement proper TypeScript types
- Follow component naming conventions
- Use custom hooks for complex logic
- Maintain consistent file organization

---

## 📝 Notes

This documentation reflects the current state of the frontend application. The system is designed to work independently of a backend API while being ready for seamless integration when the backend becomes available.

Last Updated: December 7, 2025