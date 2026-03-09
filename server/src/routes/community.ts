import express from 'express';
import BibleStudy from '../models/BibleStudy.js';
import SmallGroup from '../models/SmallGroup.js';
import Mentorship from '../models/Mentorship.js';
import PrayerChain from '../models/PrayerChain.js';
import FastingGroup from '../models/FastingGroup.js';
import MemoryChallenge from '../models/MemoryChallenge.js';
import ReadingPlan from '../models/ReadingPlan.js';
import Attendance from '../models/Attendance.js';
import Volunteer from '../models/Volunteer.js';
import Donation from '../models/Donation.js';
import LiveStream from '../models/LiveStream.js';

const router = express.Router();

// Bible Studies
router.get('/bible-studies', async (req, res) => {
  const studies = await BibleStudy.find().populate('leader members');
  res.json(studies);
});

router.post('/bible-studies', async (req, res) => {
  const study = new BibleStudy(req.body);
  await study.save();
  res.json(study);
});

// Small Groups
router.get('/small-groups', async (req, res) => {
  const groups = await SmallGroup.find().populate('leader members');
  res.json(groups);
});

router.post('/small-groups', async (req, res) => {
  const group = new SmallGroup(req.body);
  await group.save();
  res.json(group);
});

// Mentorship
router.get('/mentorships', async (req, res) => {
  const mentorships = await Mentorship.find().populate('mentor mentee');
  res.json(mentorships);
});

router.post('/mentorships', async (req, res) => {
  const mentorship = new Mentorship(req.body);
  await mentorship.save();
  res.json(mentorship);
});

// Prayer Chains
router.get('/prayer-chains', async (req, res) => {
  const chains = await PrayerChain.find().populate('creator members');
  res.json(chains);
});

router.post('/prayer-chains', async (req, res) => {
  const chain = new PrayerChain(req.body);
  await chain.save();
  res.json(chain);
});

// Fasting Groups
router.get('/fasting-groups', async (req, res) => {
  const groups = await FastingGroup.find();
  res.json(groups);
});

router.post('/fasting-groups', async (req, res) => {
  const group = new FastingGroup(req.body);
  await group.save();
  res.json(group);
});

// Memory Challenges
router.get('/memory-challenges', async (req, res) => {
  const challenges = await MemoryChallenge.find();
  res.json(challenges);
});

router.post('/memory-challenges', async (req, res) => {
  const challenge = new MemoryChallenge(req.body);
  await challenge.save();
  res.json(challenge);
});

// Reading Plans
router.get('/reading-plans', async (req, res) => {
  const plans = await ReadingPlan.find();
  res.json(plans);
});

router.post('/reading-plans', async (req, res) => {
  const plan = new ReadingPlan(req.body);
  await plan.save();
  res.json(plan);
});

// Attendance
router.get('/attendance', async (req, res) => {
  const records = await Attendance.find().populate('event attendees');
  res.json(records);
});

router.post('/attendance', async (req, res) => {
  const record = new Attendance(req.body);
  await record.save();
  res.json(record);
});

// Volunteers
router.get('/volunteers', async (req, res) => {
  const opportunities = await Volunteer.find().populate('volunteers');
  res.json(opportunities);
});

router.post('/volunteers', async (req, res) => {
  const opportunity = new Volunteer(req.body);
  await opportunity.save();
  res.json(opportunity);
});

// Donations
router.get('/donations', async (req, res) => {
  const donations = await Donation.find().populate('user');
  res.json(donations);
});

router.post('/donations', async (req, res) => {
  const donation = new Donation(req.body);
  await donation.save();
  res.json(donation);
});

// Live Streams
router.get('/live-streams', async (req, res) => {
  const streams = await LiveStream.find();
  res.json(streams);
});

router.post('/live-streams', async (req, res) => {
  const stream = new LiveStream(req.body);
  await stream.save();
  res.json(stream);
});

export default router;
