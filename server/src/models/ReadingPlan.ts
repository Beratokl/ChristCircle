import mongoose, { Schema, Document } from 'mongoose';

export interface IReadingPlan extends Document {
  title: string;
  type: 'bible' | 'book';
  duration: number;
  schedule: { day: number; content: string }[];
  participants: {
    user: mongoose.Types.ObjectId;
    progress: number;
    completedDays: number[];
  }[];
  createdAt: Date;
}

const ReadingPlanSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['bible', 'book'], required: true },
  duration: { type: Number, required: true },
  schedule: [{
    day: { type: Number },
    content: { type: String }
  }],
  participants: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    progress: { type: Number, default: 0 },
    completedDays: [{ type: Number }]
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IReadingPlan>('ReadingPlan', ReadingPlanSchema);
