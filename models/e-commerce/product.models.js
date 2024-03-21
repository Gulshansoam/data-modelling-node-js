import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    productImage: { type: String },
    price: { type: Number, required: true, default: 0 },
    stock: { default: 0, type: Number },
    category: {
      category: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  { timestamps: true }
);

export const product = mongoose.model('Product', productSchema);
