import prisma from '../utils/db.js';

export const getProfile = async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { stats: true },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Exclude password
        const { password, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
};

export const updateStats = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { dayCount, lastVisited } = req.body;

        const stats = await prisma.userStats.upsert({
            where: { userId },
            update: {
                dayCount: dayCount !== undefined ? dayCount : undefined,
                lastVisited: lastVisited ? new Date(lastVisited) : undefined,
            },
            create: {
                userId,
                dayCount: dayCount || 1,
                lastVisited: lastVisited ? new Date(lastVisited) : new Date(),
            },
        });

        res.json(stats);
    } catch (error) {
        console.error('Update stats error:', error);
        res.status(500).json({ error: 'Failed to update stats' });
    }
};
