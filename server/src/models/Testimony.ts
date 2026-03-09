import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimony extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  content: string;
  category: string;
  isApproved: boolean;
  likes: mongoose.Types.ObjectId[];
  comments: {
    userId: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
  }[];
  createdAt: Date;
}

const testimonySchema = new Schema<ITestimony>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ITestimony>('Testimony', testimonySchema);
