import express from 'express';
import Cart from '../models/Cart';
import Product from '../models/Product';
import { protect, AuthRequest } from '../middleware/auth';
import { Response } from 'express';

const router = express.Router();

// Get user's cart
router.get('/', protect, async (req: AuthRequest, res: Response) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    
    if (!cart) {
      return res.json({ success: true, data: { items: [], totalAmount: 0 } });
    }

    res.json({ success: true, data: cart });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add item to cart
router.post('/add', protect, async (req: AuthRequest, res: Response) => {
  try {
    const { productId, quantity, customizations } = req.body;

    // Validate product exists and has enough inventory
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    if (product.inventory < quantity) {
      return res.status(400).json({ success: false, message: `Only ${product.inventory} items available in stock` });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      // Create new cart
      cart = new Cart({
        user: req.user._id,
        items: [{
          product: productId,
          quantity,
          itemTotal: product.basePrice * quantity
        }],
        totalAmount: product.basePrice * quantity
      });
    } else {
      // Check if item already exists in cart
      const existingItemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
      );

      if (existingItemIndex > -1) {
        // Update quantity
        const newQuantity = cart.items[existingItemIndex].quantity + quantity;
        
        // Check if new quantity exceeds inventory
        if (newQuantity > product.inventory) {
          return res.status(400).json({ 
            success: false,
            message: `Cannot add more items. Only ${product.inventory} available in stock` 
          });
        }
        
        cart.items[existingItemIndex].quantity = newQuantity;
        cart.items[existingItemIndex].itemTotal = product.basePrice * newQuantity;
      } else {
        // Add new item
        cart.items.push({
          product: productId,
          quantity,
          itemTotal: product.basePrice * quantity
        });
      }
    }

    // Recalculate total
    cart.totalAmount = cart.items.reduce((sum, item) => sum + item.itemTotal, 0);

    await cart.save();
    await cart.populate('items.product');

    res.json({ success: true, data: cart });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update cart item quantity
router.put('/update/:itemId', protect, async (req: AuthRequest, res: Response) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    const item = cart.items.id(itemId);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found in cart' });
    }

    // Validate inventory
    const product = await Product.findById(item.product);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    if (quantity > product.inventory) {
      return res.status(400).json({ 
        success: false,
        message: `Only ${product.inventory} items available in stock` 
      });
    }

    if (quantity <= 0) {
      // Remove item if quantity is 0 or negative
      cart.items.pull(itemId);
    } else {
      item.quantity = quantity;
      item.itemTotal = product.basePrice * quantity;
    }

    // Recalculate total
    cart.totalAmount = cart.items.reduce((sum, item) => sum + item.itemTotal, 0);

    await cart.save();
    await cart.populate('items.product');

    res.json({ success: true, data: cart });
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Remove item from cart
router.delete('/remove/:itemId', protect, async (req: AuthRequest, res: Response) => {
  try {
    const { itemId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    cart.items.pull(itemId);

    // Recalculate total
    cart.totalAmount = cart.items.reduce((sum, item) => sum + item.itemTotal, 0);

    await cart.save();
    await cart.populate('items.product');

    res.json({ success: true, data: cart });
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Clear cart
router.delete('/clear', protect, async (req: AuthRequest, res: Response) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      return res.json({ success: true, message: 'Cart is already empty' });
    }

    cart.items = [];
    cart.totalAmount = 0;
    await cart.save();

    res.json({ success: true, message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
