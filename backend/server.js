import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
app.use(express.json());
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send(`Api is running...`);
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `server running on port ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
