import mongoose from 'mongoose';
import slugifyModelFunc from '../utils/slugifyModelFunc';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Order must belong to a user'],
  },
  products: [
    {
      name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Order must belong to a product'],
      },
      quantity: {
        type: Number,
        required: [true, 'Order must have a quantity'],
      },
      price: {
        type: Number,
        required: [true, 'Order must have a price'],
      },
    },
  ],
  status: {
    type: String,
    trim: true,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending',
  },
});

slugifyModelFunc(orderSchema, 'name');

const Order = mongoose.model('Order', orderSchema);

export default Order;
