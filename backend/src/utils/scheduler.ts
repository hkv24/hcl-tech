import cron from 'node-cron';
import Product from '../models/Product';

// Reset inventory to maxInventory every day at 11:59 PM
export const scheduleInventoryReset = () => {
  // Run at 23:59 every day
  cron.schedule('59 23 * * *', async () => {
    try {
      console.log('Running EOD inventory reset...');
      
      const result = await Product.updateMany(
        {},
        [{ $set: { inventory: '$maxInventory' } }]
      );
      
      console.log(`Inventory reset completed. ${result.modifiedCount} products updated.`);
    } catch (error) {
      console.error('Error resetting inventory:', error);
    }
  });

  console.log('Inventory reset scheduler initialized - runs daily at 11:59 PM');
};
