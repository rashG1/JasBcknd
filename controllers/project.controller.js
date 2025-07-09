import * as projectService from  '../services/project.service.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await projectService.fetchProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Server error fetching projects' });
  }
};

export const getAchievements = async (req, res) => {
  try {
    const achievements = await projectService.fetchAchievements();
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Server error fetching achievements' });
  }
};

export const createProject = async (req, res) => {
  try {
    const projectData = req.body;
    const newProject = await projectService.createProject(projectData);
    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await projectService.deleteProject(id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const createAchievement = async (req, res) => {
  try {
    const achievementData = req.body;
    const newAchievement = await projectService.createAchievement(achievementData);
    res.status(201).json(newAchievement);
  }
    catch (error) {
        next(error);
    }
};

export const deleteAchievement = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAchievement = await projectService.deleteAchievement(id);
    if (!deletedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.json({ message: 'Achievement deleted successfully' });
  } catch (error) {
    next(error);
  }
};
  