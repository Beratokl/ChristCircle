import mongoose, { Schema, Document } from 'mongoose';

export interface ITeaching extends Document {
  pastorId: mongoose.Types.ObjectId;
  title: string;
  content: string;
  type: 'article' | 'video' | 'audio' | 'sermon' | 'course';
  category: string;
  tags: string[];
  mediaUrl?: string;
  thumbnailUrl?: string;
  duration?: number;
  views: number;
  likes: mongoose.Types.ObjectId[];
  bookmarks: mongoose.Types.ObjectId[];
  comments: {
    userId: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
  }[];
  isLive: boolean;
  scheduledAt?: Date;
  createdAt: Date;
}

const teachingSchema = new Schema<ITeaching>({
  pastorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, enum: ['article', 'video', 'audio', 'sermon', 'course'], required: true },
  category: { type: String, required: true },
  tags: [String],
  mediaUrl: String,
  thumbnailUrl: String,
  duration: Number,
  views: { type: Number, default: 0 },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    createdAt: { type: Date, default: Date.now }
  }],
  isLive: { type: Boolean, default: false },
  scheduledAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ITeaching>('Teaching', teachingSchema);
