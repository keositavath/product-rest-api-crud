
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // Name is required
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    // Price is required and must be greater than 0
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0.01, "Price must be greater than 0"],
    },

    // Quantity is required and cannot be negative
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [0, "Quantity cannot be negative"],
    },

    // Category is required
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },

    // Description is optional
    description: {
      type: String,
      default: "",
      trim: true,
    },

    // Image is optional
    image: {
      type: String,
      default: "",
    },

    // Default value is true
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
