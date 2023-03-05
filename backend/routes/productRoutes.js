import express from "express";
import Product from "../models/productModel.js";
import AsyncHandler from "express-async-handler";

const router = express.Router();

//@desc Fetch All products
//@route GET /api/products
//@access Public

router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.json(product);
  })
);

//@desc Fetch All products
//@route GET /api/products:id
//@access Public

router.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
    // res.json(product);
  })
);

export default router;
