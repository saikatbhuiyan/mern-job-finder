import mongoose from "mongoose";

const connectDB = async (url) => {
  const conn = await mongoose.connect(url);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
  return conn;
};

export default connectDB;
