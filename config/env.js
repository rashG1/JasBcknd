// config/env.js
import dotenv from 'dotenv';
dotenv.config();

// rest of your code
const requiredVars = ['MONGO_URI', 'JWT_SECRET', 'PORT', 'JWT_EXPIRES_IN', 'JWT_REFRESH_EXPIRES_IN'];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(` Missing required environment variable: ${key}`);
  }
});

export const config = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN
};
