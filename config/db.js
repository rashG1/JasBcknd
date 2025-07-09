import mongoose from 'mongoose';
import { config } from './env.js';

export async function connectDB() {
  try {
    await mongoose.connect(config.mongoURI);
    console.log('MongoDB connected with Mongoose');
  } catch (err) {
    console.error(' MongoDB connection error:', err.message);
    process.exit(1);
  }
}
