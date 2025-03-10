import express from 'express';  // import express
import { createPost, deletePost, getPost, getSinglePost } from '../controller/postController.js';

const router = express.Router();

router.get('/',getPost)
router.get('/:slug',getSinglePost)
router.post('/',createPost)
router.delete('/:id',deletePost)

export default router