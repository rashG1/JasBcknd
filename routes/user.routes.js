import express from 'express';
import { login } from '../controllers/user.controller.js';
import { validate } from '../middlewares/index.js';  // your validation middleware
import { loginSchema } from '../utils/validators/user.validator.js';

const router = express.Router();

router.post('/login', validate(loginSchema), login);

export const userRoutes = router;
