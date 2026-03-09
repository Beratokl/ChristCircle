import express from 'express';
import Teaching from '../models/Teaching.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category, type, search } = req.query;
    const filter: any = {};
    
    if (category) filter.category = category;
    if (type) filter.type = type;
    if (search) filter.$text = { $search: search as string };

    const teachings = await Teaching.find(filter)
      .populate('pastorId', 'name avatar')
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json(teachings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authenticate, authorize('pastor', 'admin'), async (req, res) => {
  try {
    const teaching = new Teaching({
      ...req.body,
      pastorId: (req as any).userId
    });
    await teaching.save();
    res.status(201).json(teaching);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:id/like', authenticate, async (req, res) => {
  try {
    const teaching = await Teaching.findById(req.params.id);
    if (!teaching) {
      return res.status(404).json({ message: 'Teaching not found' });
    }

    const userId = (req as any).userId;
    const index = teaching.likes.indexOf(userId);
    
    if (index > -1) {
      teaching.likes.splice(index, 1);
    } else {
      teaching.likes.push(userId);
    }
    
    await teaching.save();
    res.json(teaching);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
