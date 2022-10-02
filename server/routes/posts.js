import express from 'express';

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  incrementCrookCount,
  incrementCleanCount
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/crookCount', incrementCrookCount);
router.patch('/:id/cleanCount', incrementCleanCount);

export default router;