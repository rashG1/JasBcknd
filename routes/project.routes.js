import express from 'express';
import { authenticateJWT } from '../middlewares/auth.middleware.js';
import { getProjects, getAchievements,createAchievement,createProject,deleteAchievement,deleteProject } from '../controllers/project.controller.js';
import { validate } from '../middlewares/index.js';
import { projectSchema } from '../utils/validators/project.validator.js';
import { achievementSchema } from '../utils/validators/achievement.validator.js';
const router = express.Router();

router.get('/projects', validate(projectSchema),  getProjects);
router.get('/achievements', validate(achievementSchema),  getAchievements);
router.post('/projects', validate(projectSchema), authenticateJWT, createProject);
router.post('/achievements', validate(achievementSchema), authenticateJWT, createAchievement);
router.delete('/projects/:id', authenticateJWT, deleteProject);
router.delete('/achievements/:id', authenticateJWT, deleteAchievement);

export default router;
