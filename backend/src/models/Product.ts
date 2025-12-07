import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  category: 'pizza' | 'sides' | 'beverages' | 'desserts';
  basePrice: number;
  image: string;
  isVeg: boolean;
  isAvailable: boolean;
  inventory: number;
  maxInventory: number;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['pizza', 'sides', 'beverages', 'desserts']
    },
    basePrice: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0
    },
    image: {
      type: String,
      required: [true, 'Image is required']
    },
    isVeg: {
      type: Boolean,
      default: true
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
    inventory: {
      type: Number,
      default: 100,
      min: 0
    },
    maxInventory: {
      type: Number,
      default: 100
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IProduct>('Product', productSchema);
