import mongoose, { Schema, Document } from 'mongoose';

export interface IMentorship extends Document {
  mentor: mongoose.Types.ObjectId;
  mentee: mongoose.Types.ObjectId;
  status: 'pending' | 'active' | 'completed';
  focusAreas: string[];
  startDate: Date;
  endDate?: Date;
  meetings: {
    date: Date;
    notes: string;
  }[];
  createdAt: Date;
}

const MentorshipSchema = new Schema({
  mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mentee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'active', 'completed'], default: 'pending' },
  focusAreas: [{ type: String }],
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  meetings: [{
    date: { type: Date },
    notes: { type: String }
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IMentorship>('Mentorship', MentorshipSchema);
