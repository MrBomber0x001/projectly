import { Router } from 'express';
import { createTask, getAllTasks, updateTask, deleteTask, getTask, getTaskComment } from '../controllers/task.controller.js'
import { verifyToken } from '../utils/jwt.js';
const router = Router();



router.get("/tasks", verifyToken, getAllTasks);
router.get("/tasks/:id", verifyToken, getTask);
router.delete("/tasks/:id", verifyToken, deleteTask);
router.put("/tasks/:id", verifyToken, updateTask)
router.post("/tasks", verifyToken, createTask);


router.get("/tasks/:id/comments", getTaskComment);
export default router