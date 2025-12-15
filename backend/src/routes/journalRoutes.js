import express from 'express';
import { createEntry, getEntries } from '../controllers/journalController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticateToken); // Protect all journal routes

router.get('/', getEntries);
router.post('/', createEntry);

export default router;
