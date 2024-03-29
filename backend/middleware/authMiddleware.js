import jwt from "jsonwebtoken";
import AsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = AsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
      console.log("req.user>>", req.user);
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Auth");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("token not found, auth failed");
  }
});
export { protect };
