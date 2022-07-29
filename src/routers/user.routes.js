import { Router } from 'express';
const router = Router();

import { getAllUsers, getUser, deleteUser, getUserProjects } from '../controllers/user.controller.js'

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser)

router.get("/users/:id/projects", getUserProjects)
export default router;