import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  addresses: IAddress[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IAddress {
  _id?: mongoose.Types.ObjectId;
  label?: string;
  type: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  isDefault?: boolean;
}

const addressSchema = new Schema<IAddress>({
  label: { type: String },
  type: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  landmark: { type: String },
  isDefault: { type: Boolean, default: false }
});

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      select: false
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true
    },
    addresses: [addressSchema]
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IUser>('User', userSchema);
