import prisma from '../utils/db.js';

export const getEntries = async (req, res) => {
    try {
        const userId = req.user.userId;
        const entries = await prisma.journalEntry.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
        res.json(entries);
    } catch (error) {
        console.error('Get entries error:', error);
        res.status(500).json({ error: 'Failed to fetch journal entries' });
    }
};

export const createEntry = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { moodLabel, moodEmoji, message, date } = req.body;

        if (!moodLabel || !moodEmoji || !message || !date) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newEntry = await prisma.journalEntry.create({
            data: {
                userId,
                moodLabel,
                moodEmoji,
                message,
                date,
            },
        });

        res.status(201).json(newEntry);
    } catch (error) {
        console.error('Create entry error:', error);
        res.status(500).json({ error: 'Failed to create journal entry' });
    }
};
