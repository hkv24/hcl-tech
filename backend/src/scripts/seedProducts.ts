import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from '../models/Product';
import Coupon from '../models/Coupon';

dotenv.config();

const products = [
  // Pizzas (8 items)
  {
    name: 'Margherita',
    description: 'Classic delight with 100% real mozzarella cheese',
    category: 'pizza',
    basePrice: 199,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Farmhouse',
    description: 'Delightful combination of onion, capsicum, tomato & grilled mushroom',
    category: 'pizza',
    basePrice: 299,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Peppy Paneer',
    description: 'Chunky paneer with crisp capsicum and spicy red pepper',
    category: 'pizza',
    basePrice: 349,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Mexican Green Wave',
    description: 'Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno',
    category: 'pizza',
    basePrice: 329,
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Chicken Dominator',
    description: 'Double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers',
    category: 'pizza',
    basePrice: 499,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop',
    isVeg: false,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Chicken Golden Delight',
    description: 'Double golden chicken topping with extra cheese',
    category: 'pizza',
    basePrice: 449,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=400&fit=crop',
    isVeg: false,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Pepper Barbecue Chicken',
    description: 'Pepper barbecue chicken, cheese and capsicum',
    category: 'pizza',
    basePrice: 429,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=400&fit=crop',
    isVeg: false,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Non Veg Supreme',
    description: 'Supreme combination of black olives, onions, grilled mushrooms, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers',
    category: 'pizza',
    basePrice: 479,
    image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400&h=400&fit=crop',
    isVeg: false,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },

  // Beverages (8 items)
  {
    name: 'Coca Cola (750ml)',
    description: 'The chilled refreshing taste of Coca Cola',
    category: 'beverages',
    basePrice: 57,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Pepsi (750ml)',
    description: 'Refresh yourself with chilled Pepsi',
    category: 'beverages',
    basePrice: 57,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Sprite (750ml)',
    description: 'Lime flavored sparkling drink',
    category: 'beverages',
    basePrice: 57,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Fanta (750ml)',
    description: 'Orange flavored refreshing drink',
    category: 'beverages',
    basePrice: 57,
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Thums Up (750ml)',
    description: 'Strong fizzy refreshment with bold taste',
    category: 'beverages',
    basePrice: 57,
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Mountain Dew (750ml)',
    description: 'Electrifying citrus blast',
    category: 'beverages',
    basePrice: 57,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Mirinda (750ml)',
    description: 'Delicious orange flavored drink',
    category: 'beverages',
    basePrice: 57,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Minute Maid (1L)',
    description: 'Refreshing pulpy orange juice',
    category: 'beverages',
    basePrice: 90,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },

  // Desserts (8 items)
  {
    name: 'Choco Lava Cake',
    description: 'Chocolate cake with gooey molten lava inside',
    category: 'desserts',
    basePrice: 99,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Brownie Fantasy',
    description: 'Rich chocolate brownie topped with chocolate sauce',
    category: 'desserts',
    basePrice: 119,
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Red Velvet Lava Cake',
    description: 'Soft red velvet cake with creamy white chocolate lava',
    category: 'desserts',
    basePrice: 109,
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop&q=80',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Butterscotch Mousse Cake',
    description: 'Creamy butterscotch mousse layered with cake',
    category: 'desserts',
    basePrice: 99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Chocolate Chip Cookie',
    description: 'Freshly baked chocolate chip cookie',
    category: 'desserts',
    basePrice: 59,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Vanilla Ice Cream Tub',
    description: 'Creamy vanilla ice cream tub',
    category: 'desserts',
    basePrice: 79,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Chocolate Ice Cream Tub',
    description: 'Rich chocolate ice cream tub',
    category: 'desserts',
    basePrice: 79,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Strawberry Ice Cream Tub',
    description: 'Delicious strawberry ice cream tub',
    category: 'desserts',
    basePrice: 79,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },

  // Sides (8 items)
  {
    name: 'Garlic Breadsticks',
    description: 'Freshly baked breadsticks with garlic seasoning',
    category: 'sides',
    basePrice: 99,
    image: 'https://images.unsplash.com/photo-1619985652734-d3d60c7e8815?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Cheesy Garlic Bread',
    description: 'Garlic bread topped with melted cheese',
    category: 'sides',
    basePrice: 129,
    image: 'https://images.unsplash.com/photo-1573140401552-388e3d2c1fc7?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Stuffed Garlic Bread',
    description: 'Garlic bread stuffed with cheese and spices',
    category: 'sides',
    basePrice: 149,
    image: 'https://images.unsplash.com/photo-1619985652734-d3d60c7e8815?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Potato Cheese Shots',
    description: 'Crispy potato bites filled with cheese',
    category: 'sides',
    basePrice: 119,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Chicken Wings',
    description: 'Spicy chicken wings with dipping sauce',
    category: 'sides',
    basePrice: 199,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=400&fit=crop',
    isVeg: false,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Chicken Nuggets',
    description: 'Crispy golden chicken nuggets',
    category: 'sides',
    basePrice: 149,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=400&fit=crop',
    isVeg: false,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'French Fries',
    description: 'Crispy golden french fries',
    category: 'sides',
    basePrice: 89,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  },
  {
    name: 'Onion Rings',
    description: 'Crispy fried onion rings',
    category: 'sides',
    basePrice: 99,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=400&fit=crop',
    isVeg: true,
    isAvailable: true,
    inventory: 100,
    maxInventory: 100
  }
];

// Sample coupons with 50% off
const coupons = [
  {
    code: 'MEGA50',
    description: 'Get 50% off on orders above ₹500',
    discountType: 'percentage',
    discountValue: 50,
    minOrderAmount: 500,
    maxDiscount: 500,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2025-12-31'),
    isActive: true
  },
  {
    code: 'WELCOME50',
    description: 'Welcome offer - 50% off on your first order',
    discountType: 'percentage',
    discountValue: 50,
    minOrderAmount: 300,
    maxDiscount: 300,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2025-12-31'),
    isActive: true
  },
  {
    code: 'SUPER50',
    description: 'Super saver - 50% off on orders above ₹1000',
    discountType: 'percentage',
    discountValue: 50,
    minOrderAmount: 1000,
    maxDiscount: 1000,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2025-12-31'),
    isActive: true
  },
  {
    code: 'FLAT250',
    description: 'Flat ₹250 off on orders above ₹800',
    discountType: 'flat',
    discountValue: 250,
    minOrderAmount: 800,
    maxDiscount: 250,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2025-12-31'),
    isActive: true
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await Coupon.deleteMany({});
    console.log('Cleared existing data');

    // Seed products
    await Product.insertMany(products);
    console.log(`${products.length} products seeded successfully`);

    // Seed coupons
    await Coupon.insertMany(coupons);
    console.log(`${coupons.length} coupons seeded successfully`);

    console.log('Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
