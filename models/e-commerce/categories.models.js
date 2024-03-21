import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    category: {
      name: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);
