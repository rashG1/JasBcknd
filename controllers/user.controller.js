import * as userService from '../services/user.service.js';

export async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const data = await userService.loginAdmin(username, password);
    res.json({ success: true, token: data.token, user: data.user });
  } catch (error) {
    next(error);
  }
}
