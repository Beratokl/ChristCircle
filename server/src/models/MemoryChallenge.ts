import mongoose, { Schema, Document } from 'mongoose';

export interface IMemoryChallenge extends Document {
  title: string;
  verses: { reference: string; text: string }[];
  participants: {
    user: mongoose.Types.ObjectId;
    completed: number;
    score: number;
  }[];
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}

const MemoryChallengeSchema = new Schema({
  title: { type: String, required: true },
  verses: [{
    reference: { type: String },
    text: { type: String }
  }],
  participants: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    completed: { type: Number, default: 0 },
    score: { type: Number, default: 0 }
  }],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IMemoryChallenge>('MemoryChallenge', MemoryChallengeSchema);
