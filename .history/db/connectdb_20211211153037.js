import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose.connect(
    process.env.DB_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to MongoDB");
    }
  );
};

export { connectDB };
