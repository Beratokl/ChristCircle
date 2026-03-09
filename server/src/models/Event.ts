import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  organizerId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  type: 'service' | 'conference' | 'bible-study' | 'prayer-meeting' | 'other';
  location: string;
  isOnline: boolean;
  meetingLink?: string;
  startDate: Date;
  endDate: Date;
  imageUrl?: string;
  attendees: mongoose.Types.ObjectId[];
  maxAttendees?: number;
  createdAt: Date;
}

const eventSchema = new Schema<IEvent>({
  organizerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['service', 'conference', 'bible-study', 'prayer-meeting', 'other'], required: true },
  location: { type: String, required: true },
  isOnline: { type: Boolean, default: false },
  meetingLink: String,
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  imageUrl: String,
  attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  maxAttendees: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IEvent>('Event', eventSchema);
