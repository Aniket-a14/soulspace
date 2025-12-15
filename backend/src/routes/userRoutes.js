import express from 'express';
import { getProfile, updateStats } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticateToken);

router.get('/profile', getProfile);
router.put('/stats', updateStats);

export default router;
