import mongoose, { Schema, Document } from 'mongoose';

export interface ILiveStream extends Document {
  title: string;
  description: string;
  streamUrl: string;
  isLive: boolean;
  scheduledTime: Date;
  viewers: number;
  createdAt: Date;
}

const LiveStreamSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  streamUrl: { type: String, required: true },
  isLive: { type: Boolean, default: false },
  scheduledTime: { type: Date },
  viewers: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ILiveStream>('LiveStream', LiveStreamSchema);
