import mongoose, { Schema, Document } from 'mongoose';

export interface IForum extends Document {
  title: string;
  description: string;
  category: string;
  authorId: mongoose.Types.ObjectId;
  posts: {
    userId: mongoose.Types.ObjectId;
    content: string;
    likes: mongoose.Types.ObjectId[];
    replies: {
      userId: mongoose.Types.ObjectId;
      content: string;
      createdAt: Date;
    }[];
    createdAt: Date;
  }[];
  isPinned: boolean;
  isLocked: boolean;
  createdAt: Date;
}

const forumSchema = new Schema<IForum>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  posts: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    replies: [{
      userId: { type: Schema.Types.ObjectId, ref: 'User' },
      content: String,
      createdAt: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now }
  }],
  isPinned: { type: Boolean, default: false },
  isLocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IForum>('Forum', forumSchema);
