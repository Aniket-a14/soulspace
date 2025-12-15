import express from 'express';
import { addReadingHistory, getReadingHistory } from '../controllers/quoteController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticateToken);

router.get('/history', getReadingHistory);
router.post('/history', addReadingHistory);

export default router;
