import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//@desc Fetch All products
//@route GET /api/products
//@access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc Fetch All products
//@route GET /api/products:id
//@access Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    throw new Error("product not found");
  }
});

export { getProductById, getProducts };
