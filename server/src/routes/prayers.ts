import express from 'express';
import PrayerRequest from '../models/PrayerRequest.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const prayers = await PrayerRequest.find({ status: 'active' })
      .populate('userId', 'name avatar')
      .sort({ createdAt: -1 });
    res.json(prayers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authenticate, async (req, res) => {
  try {
    const prayer = new PrayerRequest({
      ...req.body,
      userId: (req as any).userId
    });
    await prayer.save();
    res.status(201).json(prayer);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:id/pray', authenticate, async (req, res) => {
  try {
    const prayer = await PrayerRequest.findById(req.params.id);
    if (!prayer) {
      return res.status(404).json({ message: 'Prayer request not found' });
    }

    prayer.prayers.push({
      userId: (req as any).userId,
      message: req.body.message,
      createdAt: new Date()
    } as any);
    
    await prayer.save();
    res.json(prayer);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
