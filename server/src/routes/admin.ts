import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import User from '../models/User.js';
import Teaching from '../models/Teaching.js';
import PrayerRequest from '../models/PrayerRequest.js';
import Event from '../models/Event.js';
import Testimony from '../models/Testimony.js';

const router = express.Router();

router.use(authenticate, authorize('admin'));

router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalPastors = await User.countDocuments({ role: 'pastor' });
    const totalTeachings = await Teaching.countDocuments();
    const totalPrayers = await PrayerRequest.countDocuments({ status: 'active' });
    const totalEvents = await Event.countDocuments({ endDate: { $gte: new Date() } });

    res.json({
      totalUsers,
      totalPastors,
      totalTeachings,
      totalPrayers,
      totalEvents
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/users/:id/verify-pastor', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isPastorVerified: true, role: 'pastor' },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/testimonies/pending', async (req, res) => {
  try {
    const testimonies = await Testimony.find({ isApproved: false })
      .populate('userId', 'name email')
      .sort({ createdAt: -1 });
    res.json(testimonies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/testimonies/:id/approve', async (req, res) => {
  try {
    const testimony = await Testimony.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );
    res.json(testimony);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
