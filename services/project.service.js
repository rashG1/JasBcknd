import Project from '../models/project.model.js';
import Achievement from '../models/achievement.model.js';


export const fetchProjects = async () => {
  try {
    const projects = await Project.find();
    return projects;
  } catch (error) {
    next(error);
  }
};

export const fetchAchievements = async () => {
  try {
    const achievements = await Achievement.find();
    return achievements;
  } catch (error) {
    next(error);
  }
};

export const createProject = async (projectData) => {
  try {
    const project = new Project(projectData);
    await project.save();
    return project;
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (id) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    return deletedProject;
  } catch (error) {
    next(error);
  }
};

export const createAchievement = async (achievementData) => {
  try {
    const achievement = new Achievement(achievementData);
    await achievement.save();
    return achievement;
  } catch (error) {
    next(error);
  }
};

export const deleteAchievement = async (id) => {
  try {
    const deletedAchievement = await Achievement.findByIdAndDelete(id);
    return deletedAchievement;
  } catch (error) {
    next(error);
  }
};