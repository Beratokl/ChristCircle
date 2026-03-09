import mongoose, { Schema, Document } from 'mongoose';

export interface ISmallGroup extends Document {
  name: string;
  description: string;
  leader: mongoose.Types.ObjectId;
  members: mongoose.Types.ObjectId[];
  meetingDay: string;
  meetingTime: string;
  location: string;
  maxMembers: number;
  createdAt: Date;
}

const SmallGroupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  leader: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  meetingDay: { type: String },
  meetingTime: { type: String },
  location: { type: String },
  maxMembers: { type: Number, default: 12 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ISmallGroup>('SmallGroup', SmallGroupSchema);
