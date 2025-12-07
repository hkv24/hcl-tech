# Development Setup Guide

## 🚀 Quick Start Guide

This guide will help you set up the Pizza Hub frontend development environment from scratch.

## ⚡ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** - [Download](https://git-scm.com/)
- **Visual Studio Code** (recommended) - [Download](https://code.visualstudio.com/)

### Verify Installation
```bash
node --version    # Should output v18.0.0 or higher
npm --version     # Should output v9.0.0 or higher
git --version     # Should output git version info
```

## 📦 Project Setup

### 1. Clone the Repository
```bash
# Clone the repository
git clone <repository-url>
cd pizza-hub

# Navigate to frontend directory
cd frontend
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# OR using yarn
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the frontend directory:

```bash
# Create environment file
touch .env.local
```

Add the following environment variables:
```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# App Configuration
NEXT_PUBLIC_APP_NAME=Pizza Hub
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Start Development Server
```bash
# Start the development server
npm run dev

# OR using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 🛠️ Development Tools

### Recommended VS Code Extensions

Install these extensions for the best development experience:

```bash
# Essential Extensions
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension ms-vscode.vscode-typescript-next

# Optional but Helpful
code --install-extension christian-kohler.path-intellisense
code --install-extension formulahendry.auto-rename-tag
code --install-extension ms-vscode.vscode-json
```

### VS Code Settings

Create `.vscode/settings.json` in the project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

## 📋 Available Scripts

### Development Scripts
```bash
npm run dev          # Start development server (hot reload)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Utility Scripts
```bash
npm run clean        # Clean build artifacts
npm run analyze      # Analyze bundle size
npm run export       # Export static site
```

## 🏗️ Project Structure Explained

```
frontend/
├── .next/                  # Next.js build output (auto-generated)
├── .vscode/               # VS Code workspace settings
├── public/                # Static assets
│   ├── favicon.ico
│   ├── images/            # Image assets
│   └── icons/             # Icon assets
├── src/                   # Source code
│   ├── app/              # Next.js 14 App Router
│   │   ├── (auth)/       # Route groups for auth pages
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── layout/       # Layout components
│   │   ├── cart/         # Cart-related components
│   │   ├── product/      # Product components
│   │   └── index.ts      # Component exports
│   ├── data/            # Static data and configurations
│   │   └── menuItems.ts # Menu data
│   ├── hooks/           # Custom React hooks
│   │   ├── useAuth.ts   # Authentication hook
│   │   ├── useCart.ts   # Cart management hook
│   │   └── index.ts     # Hook exports
│   ├── lib/             # Utility libraries
│   │   ├── api.ts       # API client
│   │   ├── utils.ts     # General utilities
│   │   └── validations.ts # Form validation schemas
│   ├── store/           # State management
│   │   ├── atoms/       # Recoil atoms
│   │   └── index.ts     # Store exports
│   └── types/           # TypeScript type definitions
│       └── index.ts     # Type exports
├── .env.local           # Environment variables
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎯 Development Workflow

### 1. Feature Development Process

```bash
# 1. Create a new feature branch
git checkout -b feature/new-feature-name

# 2. Make your changes
# Edit files in src/

# 3. Test your changes
npm run dev
# Verify functionality in browser

# 4. Run type checking and linting
npm run type-check
npm run lint

# 5. Commit your changes
git add .
git commit -m "feat: add new feature description"

# 6. Push to repository
git push origin feature/new-feature-name
```

### 2. Component Development

When creating a new component:

```bash
# 1. Create component file
touch src/components/ui/NewComponent.tsx

# 2. Implement component with TypeScript
# Follow the component template below

# 3. Add to component index
# Update src/components/ui/index.ts

# 4. Test component
# Import and use in your page/component
```

### Component Template
```tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // Utility for className merging

interface NewComponentProps {
  className?: string;
  children?: React.ReactNode;
  // Add your props here
}

export default function NewComponent({ 
  className,
  children,
  ...props 
}: NewComponentProps) {
  return (
    <div 
      className={cn(
        'default-classes-here',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

### 3. Adding New Pages

```bash
# 1. Create page directory
mkdir src/app/new-page

# 2. Create page component
touch src/app/new-page/page.tsx

# 3. Implement page component
# Use the page template below

# 4. Add navigation links
# Update Header component if needed
```

### Page Template
```tsx
'use client';

import { Header, Footer } from '@/components/layout';

export default function NewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          New Page Title
        </h1>
        
        {/* Page content */}
      </main>
      
      <Footer />
    </div>
  );
}
```

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

1. **Use Tailwind classes directly in components**
```tsx
<button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
  Button Text
</button>
```

2. **Create reusable variants with clsx/cn utility**
```tsx
const buttonVariants = {
  primary: 'bg-red-600 hover:bg-red-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
};

const className = cn(
  'px-4 py-2 rounded-lg font-medium',
  buttonVariants[variant]
);
```

3. **Use responsive design utilities**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

### Custom CSS (when needed)

For complex animations or custom styles, add to `globals.css`:

```css
/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
```

## 🔧 Configuration Files

### TypeScript Configuration (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Next.js Configuration (`next.config.js`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
```

### Tailwind Configuration (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
    },
  },
  plugins: [],
};
```

## 🐛 Debugging and Troubleshooting

### Common Issues and Solutions

#### 1. Module Resolution Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

#### 2. TypeScript Errors
```bash
# Run type checking
npm run type-check

# Check specific file
npx tsc --noEmit src/path/to/file.tsx
```

#### 3. Styling Issues
```bash
# Rebuild Tailwind classes
npm run dev
# Refresh browser with hard reload (Cmd+Shift+R)
```

#### 4. State Management Issues
- Check Recoil DevTools in browser
- Verify atom keys are unique
- Check localStorage in browser DevTools

### Debug Tools

#### Browser DevTools
- **React Developer Tools**: Install browser extension
- **Application Tab**: Check localStorage, sessionStorage
- **Network Tab**: Monitor API calls
- **Console**: Check for JavaScript errors

#### VS Code Debugging
Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

## 📊 Performance Monitoring

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npm run analyze
```

### Lighthouse Auditing
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, SEO

### Core Web Vitals
Monitor these metrics:
- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **Cumulative Layout Shift (CLS)**
- **First Input Delay (FID)**

## 🚀 Deployment Preparation

### Pre-deployment Checklist
- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Build process completes successfully
- [ ] Environment variables configured
- [ ] Images optimized
- [ ] Meta tags added for SEO
- [ ] Error boundaries implemented
- [ ] Loading states handled

### Build Process
```bash
# Build for production
npm run build

# Test production build locally
npm run start
```

### Environment Variables for Production
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

---

This development setup guide provides everything you need to start developing with the Pizza Hub frontend. Follow the guidelines and best practices to maintain code quality and consistency across the project.