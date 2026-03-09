import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Teaching from '../models/Teaching.js';
import PrayerRequest from '../models/PrayerRequest.js';
import Event from '../models/Event.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Teaching.deleteMany({});
    await PrayerRequest.deleteMany({});
    await Event.deleteMany({});

    // Create users
    const admin = await User.create({
      email: 'admin@christcircle.com',
      password: 'admin123',
      name: 'Admin User',
      role: 'admin',
      isVerified: true
    });

    const pastor = await User.create({
      email: 'pastor@christcircle.com',
      password: 'pastor123',
      name: 'Pastor John',
      role: 'pastor',
      isVerified: true,
      isPastorVerified: true,
      bio: 'Senior Pastor with 20 years of ministry experience'
    });

    const member = await User.create({
      email: 'member@christcircle.com',
      password: 'member123',
      name: 'Jane Doe',
      role: 'member',
      isVerified: true
    });

    // Create teachings
    await Teaching.create({
      pastorId: pastor._id,
      title: 'The Power of Prayer',
      content: 'Prayer is our direct line to God. In this teaching, we explore how to develop a powerful prayer life...',
      type: 'article',
      category: 'Prayer',
      tags: ['prayer', 'faith', 'spiritual-growth']
    });

    await Teaching.create({
      pastorId: pastor._id,
      title: 'Walking in Faith',
      content: 'Faith is the substance of things hoped for, the evidence of things not seen. Learn how to walk by faith...',
      type: 'sermon',
      category: 'Faith',
      tags: ['faith', 'trust', 'bible-study']
    });

    // Create prayer requests
    await PrayerRequest.create({
      userId: member._id,
      title: 'Healing for my mother',
      content: 'Please pray for my mother who is in the hospital. She needs God\'s healing touch.',
      category: 'Health',
      isAnonymous: false,
      status: 'active'
    });

    // Create events
    await Event.create({
      organizerId: pastor._id,
      title: 'Sunday Service',
      description: 'Join us for our weekly Sunday worship service',
      type: 'service',
      location: 'Main Church Building',
      isOnline: true,
      meetingLink: 'https://zoom.us/j/example',
      startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000)
    });

    console.log('Database seeded successfully!');
    console.log('\nTest Accounts:');
    console.log('Admin: admin@christcircle.com / admin123');
    console.log('Pastor: pastor@christcircle.com / pastor123');
    console.log('Member: member@christcircle.com / member123');

    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seedDatabase();
