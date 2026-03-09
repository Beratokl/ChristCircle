import mongoose, { Schema, Document } from 'mongoose';

export interface IPrayerRequest extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  content: string;
  category: string;
  isAnonymous: boolean;
  prayers: {
    userId: mongoose.Types.ObjectId;
    message?: string;
    createdAt: Date;
  }[];
  status: 'active' | 'answered' | 'closed';
  createdAt: Date;
}

const prayerRequestSchema = new Schema<IPrayerRequest>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  isAnonymous: { type: Boolean, default: false },
  prayers: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    message: String,
    createdAt: { type: Date, default: Date.now }
  }],
  status: { type: String, enum: ['active', 'answered', 'closed'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPrayerRequest>('PrayerRequest', prayerRequestSchema);
