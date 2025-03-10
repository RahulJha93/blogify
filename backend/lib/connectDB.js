import mongoose from "mongoose";

const connectDB = async () => {
  const DB_URl = process.env.DB_URL;
  console.log(DB_URl)
  try {
    mongoose.connect(DB_URl)
    console.log("DB connected");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
