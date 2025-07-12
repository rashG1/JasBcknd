import express from 'express';
import {
  createTeamMember,
  getAllTeamMembers,
  getTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from '../controllers/team.controller.js';

import { validate } from '../middlewares/index.js';
import { teamMemberSchema } from '../utils/validators/team.validator.js';
import { authenticateJWT  } from '../middlewares/index.js'; 

const router = express.Router();

// Public: Get all or one
router.get('/', getAllTeamMembers);
router.get('/:id', getTeamMember);

// Protected: Create, Update, Delete
router.post('/', authenticateJWT, validate(teamMemberSchema), createTeamMember);
router.put('/:id', authenticateJWT, validate(teamMemberSchema), updateTeamMember);
router.delete('/:id', authenticateJWT, deleteTeamMember);

export default router;
