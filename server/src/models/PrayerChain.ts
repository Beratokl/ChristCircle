import mongoose, { Schema, Document } from 'mongoose';

export interface IPrayerChain extends Document {
  title: string;
  description: string;
  creator: mongoose.Types.ObjectId;
  members: mongoose.Types.ObjectId[];
  isUrgent: boolean;
  status: 'active' | 'answered' | 'closed';
  prayerCount: number;
  createdAt: Date;
}

const PrayerChainSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  isUrgent: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'answered', 'closed'], default: 'active' },
  prayerCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPrayerChain>('PrayerChain', PrayerChainSchema);
