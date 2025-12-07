# Component Documentation

## 🧩 Component Library

This document provides detailed information about all reusable components in the Pizza Hub frontend application.

## 🎯 UI Components (`/components/ui/`)

### Button Component

**File**: `src/components/ui/Button.tsx`

A versatile button component with multiple variants and states.

#### Props
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}
```

#### Usage
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg">
  Add to Cart
</Button>

<Button variant="outline" isLoading={true}>
  Processing...
</Button>
```

#### Variants
- **primary**: Red background, white text (main CTA)
- **secondary**: Gray background, white text
- **outline**: Transparent background, colored border
- **ghost**: Transparent background, no border

---

### Card Component

**File**: `src/components/ui/Card.tsx`

Container component for grouping related content.

#### Props
```typescript
interface CardProps {
  variant?: 'default' | 'bordered' | 'elevated';
  className?: string;
  children: React.ReactNode;
}
```

#### Usage
```tsx
import { Card, CardContent } from '@/components/ui';

<Card variant="elevated">
  <CardContent>
    <h3>Product Name</h3>
    <p>Product description</p>
  </CardContent>
</Card>
```

---

### Input Component

**File**: `src/components/ui/Input.tsx`

Form input component with validation states and error handling.

#### Props
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}
```

#### Usage
```tsx
import { Input } from '@/components/ui';

<Input
  label="Email Address"
  type="email"
  error={errors.email?.message}
  required
  {...register('email')}
/>
```

---

### Modal Component

**File**: `src/components/ui/Modal.tsx`

Reusable modal component with backdrop and close functionality.

#### Props
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
```

#### Usage
```tsx
import { Modal } from '@/components/ui';

<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Add Address"
>
  <AddressForm />
</Modal>
```

---

### Badge Component

**File**: `src/components/ui/Badge.tsx`

Small status indicators and labels.

#### Props
```typescript
interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}
```

#### Usage
```tsx
import { Badge } from '@/components/ui';

<Badge variant="success">Vegetarian</Badge>
<Badge variant="warning">Spicy</Badge>
```

---

## 🏗️ Layout Components (`/components/layout/`)

### Header Component

**File**: `src/components/layout/Header.tsx`

Main navigation header with cart count and user menu.

#### Features
- Responsive navigation
- Cart item count display
- User authentication status
- Mobile hamburger menu
- Search functionality

#### Usage
```tsx
import { Header } from '@/components/layout';

<Header />
```

#### State Dependencies
- `authState` - User authentication status
- `cartItemsCountSelector` - Cart item count

---

### Footer Component

**File**: `src/components/layout/Footer.tsx`

Site-wide footer with links and company information.

#### Features
- Company information
- Navigation links
- Social media links
- Contact information

#### Usage
```tsx
import { Footer } from '@/components/layout';

<Footer />
```

---

### Sidebar Component

**File**: `src/components/layout/Sidebar.tsx`

Mobile navigation drawer component.

#### Features
- Slide-in animation
- Navigation links
- User menu for mobile
- Backdrop click to close

#### Props
```typescript
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
```

---

## 🛒 Cart Components (`/components/cart/`)

### CartItem Component

**File**: `src/components/cart/CartItem.tsx`

Individual cart item with quantity controls and removal option.

#### Props
```typescript
interface CartItemProps {
  item: CartItem;
}
```

#### Features
- Product image display
- Quantity increment/decrement
- Remove item functionality
- Price calculation
- Vegetarian badge

#### Usage
```tsx
import { CartItem } from '@/components/cart';

{cartItems.map(item => (
  <CartItem key={item._id} item={item} />
))}
```

---

### CartSummary Component

**File**: `src/components/cart/CartSummary.tsx`

Cart totals and checkout summary.

#### Features
- Subtotal calculation
- Tax calculation
- Delivery charges
- Total amount
- Checkout button

#### Usage
```tsx
import { CartSummary } from '@/components/cart';

<CartSummary />
```

---

## 🍕 Product Components (`/components/product/`)

### ProductCard Component

**File**: `src/components/product/ProductCard.tsx`

Menu item display card with add to cart functionality.

#### Props
```typescript
interface ProductCardProps {
  product: Product;
}
```

#### Features
- Product image with optimization
- Name and description
- Price display
- Vegetarian indicator
- Add to cart button
- Rating display (future)

#### Usage
```tsx
import { ProductCard } from '@/components/product';

{products.map(product => (
  <ProductCard key={product._id} product={product} />
))}
```

---

### PizzaCustomizer Component

**File**: `src/components/product/PizzaCustomizer.tsx`

Modal for adding items to cart with quantity selection.

#### Props
```typescript
interface PizzaCustomizerProps {
  product: Product;
  onClose: () => void;
}
```

#### Features
- Product details display
- Quantity selector
- Price calculation
- Add to cart functionality
- Authentication check
- Loading states

#### Authentication Flow
1. Check if user is authenticated
2. If not authenticated, redirect to login
3. If authenticated, add item to cart
4. Show success feedback

#### Usage
```tsx
import { PizzaCustomizer } from '@/components/product';

<PizzaCustomizer
  product={selectedProduct}
  onClose={() => setShowCustomizer(false)}
/>
```

---

## 📦 Order Components (`/components/order/`)

### OrderCard Component

**File**: `src/components/order/OrderCard.tsx`

Order history display component.

#### Props
```typescript
interface OrderCardProps {
  order: Order;
}
```

#### Features
- Order number and date
- Order status indicator
- Items list
- Total amount
- Order actions

---

### OrderTracker Component

**File**: `src/components/order/OrderTracker.tsx`

Real-time order tracking component.

#### Props
```typescript
interface OrderTrackerProps {
  orderNumber: string;
}
```

#### Features
- Order status timeline
- Estimated delivery time
- Progress indicators
- Status updates

---

## 🎣 Custom Hooks (`/hooks/`)

### useAuth Hook

**File**: `src/hooks/useAuth.ts`

Authentication state management hook.

#### Return Value
```typescript
{
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (data: RegisterData) => Promise<AuthResult>;
  logout: () => void;
}
```

#### Features
- Local storage fallback
- API integration ready
- Authentication state management
- Error handling

#### Usage
```tsx
import { useAuth } from '@/hooks';

const { user, isAuthenticated, login, logout } = useAuth();
```

---

### useCart Hook

**File**: `src/hooks/useCart.ts`

Shopping cart state management hook.

#### Return Value
```typescript
{
  items: CartItem[];
  isLoading: boolean;
  itemsCount: number;
  total: number;
  addToCart: (item: CartItem) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}
```

#### Features
- Local state management
- Quantity updates
- Price calculations
- Authentication checks

#### Usage
```tsx
import { useCart } from '@/hooks';

const { items, addToCart, updateQuantity } = useCart();
```

---

### useProducts Hook

**File**: `src/hooks/useProducts.ts`

Product data management hook.

#### Return Value
```typescript
{
  products: Product[];
  isLoading: boolean;
  searchProducts: (query: string) => Product[];
  filterByCategory: (category: string) => Product[];
}
```

#### Features
- Product search functionality
- Category filtering
- Loading states

---

## 📋 Type Definitions (`/types/`)

### Core Types

#### User Type
```typescript
interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  addresses?: Address[];
  createdAt: string;
}
```

#### Product Type
```typescript
interface Product {
  _id: string;
  name: string;
  description: string;
  basePrice: number;
  category: 'pizza' | 'beverage' | 'dessert';
  image: string;
  isVegetarian: boolean;
  isAvailable: boolean;
}
```

#### CartItem Type
```typescript
interface CartItem {
  _id: string;
  product: Product;
  quantity: number;
  itemTotal: number;
}
```

#### Address Type
```typescript
interface Address {
  _id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  type?: string;
  isDefault?: boolean;
}
```

---

## 🎨 Styling Guidelines

### Tailwind CSS Classes

#### Common Color Patterns
```css
/* Primary Colors */
.text-red-600     /* Primary text */
.bg-red-600       /* Primary background */
.border-red-600   /* Primary border */

/* Gray Scale */
.text-gray-900    /* Primary text */
.text-gray-600    /* Secondary text */
.text-gray-400    /* Muted text */

/* Success/Error */
.text-green-600   /* Success state */
.text-red-600     /* Error state */
```

#### Layout Patterns
```css
/* Container */
.container.mx-auto.px-4

/* Grid Layouts */
.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-6

/* Flex Layouts */
.flex.items-center.justify-between

/* Responsive */
.hidden.md:block
.md:hidden
```

#### Component Patterns
```css
/* Cards */
.bg-white.rounded-lg.shadow-sm.border.p-4

/* Buttons */
.px-4.py-2.rounded-lg.font-medium.transition-colors

/* Inputs */
.w-full.px-3.py-2.border.rounded-lg.focus:ring-2
```

---

## 🔧 Component Best Practices

### 1. Component Structure
```tsx
// Import order: React, Next.js, external libraries, internal modules
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui';

// Type definitions
interface ComponentProps {
  // Props definition
}

// Component implementation
export default function Component({ prop }: ComponentProps) {
  // Hooks at the top
  const [state, setState] = useState();

  // Event handlers
  const handleClick = () => {
    // Handler logic
  };

  // Render
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}
```

### 2. TypeScript Guidelines
- Always define prop interfaces
- Use strict type checking
- Avoid `any` types
- Use union types for variants
- Define return types for functions

### 3. Performance Considerations
- Use `React.memo` for expensive components
- Implement `useCallback` for event handlers
- Use `useMemo` for expensive calculations
- Optimize images with Next.js Image component

### 4. Accessibility Guidelines
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Use semantic HTML elements
- Provide focus indicators

---

## 🔄 State Management Patterns

### Recoil State Structure
```typescript
// Atom definition
export const exampleState = atom({
  key: 'exampleState',
  default: initialValue,
});

// Selector definition
export const derivedState = selector({
  key: 'derivedState',
  get: ({ get }) => {
    const state = get(exampleState);
    return computedValue;
  },
});
```

### Local Storage Integration
```typescript
// Save to localStorage
localStorage.setItem('key', JSON.stringify(data));

// Read from localStorage
const data = JSON.parse(localStorage.getItem('key') || 'defaultValue');

// Remove from localStorage
localStorage.removeItem('key');
```

---

This component documentation provides comprehensive information about the component architecture and usage patterns in the Pizza Hub frontend application. Each component is designed to be reusable, maintainable, and follows React best practices.