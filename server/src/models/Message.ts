import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  userId: mongoose.Types.ObjectId;
  roomId: string;
  content: string;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
  reactions: { userId: mongoose.Types.ObjectId; type: string }[];
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  roomId: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, enum: ['text', 'image', 'file'], default: 'text' },
  fileUrl: String,
  reactions: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, enum: ['pray', 'amen', 'hallelujah', 'heart'] }
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IMessage>('Message', messageSchema);
