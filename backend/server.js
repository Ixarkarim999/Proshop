import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send(`Api is running...`);
});

app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `server running on port ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
