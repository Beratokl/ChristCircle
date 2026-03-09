import mongoose, { Schema, Document } from 'mongoose';

export interface IDevotional extends Document {
  title: string;
  content: string;
  verse: string;
  verseReference: string;
  date: Date;
  authorId: mongoose.Types.ObjectId;
  reads: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const devotionalSchema = new Schema<IDevotional>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  verse: { type: String, required: true },
  verseReference: { type: String, required: true },
  date: { type: Date, required: true },
  authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  reads: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IDevotional>('Devotional', devotionalSchema);
