import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb+srv://bernard652000_db_user:WCo2R3aewJvqTc85@christcircle.tff6xjl.mongodb.net/christcircle_db?retryWrites=true&w=majority&appName=ChristCircle';
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};
