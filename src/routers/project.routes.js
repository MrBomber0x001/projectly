import { Router } from 'express';
import { createProject, getAllProjects, updateProject, getProjectTasks, deleteProject, getProject } from '../controllers/project.controller.js'
import { verifyToken } from '../utils/jwt.js';
const router = Router();


// public access
router.get("/projects", getAllProjects);
router.get("/projects/:id", getProject);

// private acccess
router.delete("/projects/:id", verifyToken, deleteProject);
router.put("/projects/:id", verifyToken, updateProject)
router.post("/projects", verifyToken, createProject);

router.get("/projects/:id/tasks", getProjectTasks)
export default router