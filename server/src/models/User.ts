import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'member' | 'pastor' | 'admin';
  avatar?: string;
  bio?: string;
  location?: string;
  churchAffiliation?: string;
  isVerified: boolean;
  isPastorVerified: boolean;
  interests: string[];
  readingStreak: number;
  badges: string[];
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['member', 'pastor', 'admin'], default: 'member' },
  avatar: String,
  bio: String,
  location: String,
  churchAffiliation: String,
  isVerified: { type: Boolean, default: false },
  isPastorVerified: { type: Boolean, default: false },
  interests: [String],
  readingStreak: { type: Number, default: 0 },
  badges: [String],
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema);
