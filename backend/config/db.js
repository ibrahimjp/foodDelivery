import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = process.env.MONGO_URL;

  if (!mongoURI) {
    console.error("MONGO_URL is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Failed: ${error.message}`);
    process.exit(1);
  }
};
