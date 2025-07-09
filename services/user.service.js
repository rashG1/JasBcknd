// services/auth.service.js

import User from '../models/user.model.js';
import { generateAccessToken } from '../config/jwt.js';

export async function loginAdmin(username, password) {
  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid username or password');

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error('Invalid username or password');

  if (user.role !== 'admin') throw new Error('Access denied');

  const payload = { id: user._id, username: user.username, role: user.role };
  const token = generateAccessToken(payload);

  return { token, user: payload };
}
