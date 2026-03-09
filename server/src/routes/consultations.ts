import express from 'express';
import Consultation from '../models/Consultation.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  try {
    const userId = (req as any).userId;
    const consultations = await Consultation.find({
      $or: [{ pastorId: userId }, { memberId: userId }]
    })
      .populate('pastorId', 'name avatar')
      .populate('memberId', 'name avatar')
      .sort({ createdAt: -1 });
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authenticate, async (req, res) => {
  try {
    const consultation = new Consultation({
      ...req.body,
      memberId: (req as any).userId
    });
    await consultation.save();
    res.status(201).json(consultation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:id', authenticate, async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(consultation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
