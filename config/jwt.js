import jwt from 'jsonwebtoken';
import { config } from './env.js';

// JWT configuration
export const jwtConfig = {
  secret: config.JWT_SECRET || 'your-secret-key',
  expiresIn: config.JWT_EXPIRES_IN || '1h',
  refreshTokenExpiresIn: config.JWT_REFRESH_EXPIRES_IN || '2h'
};

// Generate access token
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn
  });
};

// Generate refresh token
export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.refreshTokenExpiresIn
  });
};

// Verify token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtConfig.secret);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
