
import Product from "../models/product.model.js";

// 1. Create Product
export const createProduct = async (req, res, next) => {
  try {
    const result = await Product.create(req.body);

    res.status(201).json({
      message: "Product created successfully",
      result,
    });
  } catch (err) {
    next(err);
  }
};

// 2. Get All Products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      message: "Products retrieved successfully",
      products,
    });
  } catch (err) {
    next(err);
  }
};

// 3. Get One Product
export const getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Product.findById(id);

    if (!result) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product retrieved successfully",
      result,
    });
  } catch (err) {
    next(err);
  }
};

// 4. Update Product
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Product.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!result) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      result,
    });
  } catch (err) {
    next(err);
  }
};

// 5. Delete Product
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Product.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      result,
    });
  } catch (err) {
    next(err);
  }
};
