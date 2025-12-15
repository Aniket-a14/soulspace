import prisma from '../utils/db.js';

export const getReadingHistory = async (req, res) => {
    try {
        const userId = req.user.userId;
        const history = await prisma.readingHistory.findMany({
            where: { userId },
            orderBy: { viewedAt: 'desc' },
            take: 10,
        });
        res.json(history);
    } catch (error) {
        console.error('Get history error:', error);
        res.status(500).json({ error: 'Failed to fetch reading history' });
    }
};

export const addReadingHistory = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { quoteId, content, author, tags, date } = req.body;

        if (!content || !author || !date) {
            return res.status(400).json({ error: 'Content, author and date are required' });
        }

        const newHistory = await prisma.readingHistory.create({
            data: {
                userId,
                quoteId,
                content,
                author,
                tags: tags || [],
                date,
            },
        });

        res.status(201).json(newHistory);
    } catch (error) {
        console.error('Add history error:', error);
        res.status(500).json({ error: 'Failed to add to reading history' });
    }
};
