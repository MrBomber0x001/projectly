import { Router } from 'express';
import { addComment, getAllComments, editComment, deleteComment, getComment } from '../controllers/comment.controller.js'
import { verifyToken } from '../utils/jwt.js';
const router = Router();



router.get("/comments", verifyToken, getAllComments);
router.get("/comments/:id", verifyToken, getComment);
router.delete("/comments/:id", verifyToken, deleteComment);
router.put("/commenst/:id", verifyToken, editComment)
router.post("/comments", verifyToken, addComment);


export default router