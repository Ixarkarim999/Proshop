import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.log(`Error:${e.message}`);
    process.exit(1);
  }
};

export default connectDB;
