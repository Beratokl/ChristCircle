import mongoose, { Schema, Document } from 'mongoose';

export interface IConsultation extends Document {
  pastorId: mongoose.Types.ObjectId;
  memberId: mongoose.Types.ObjectId;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  type: 'spiritual' | 'counseling' | 'prayer' | 'general';
  scheduledAt?: Date;
  duration: number;
  notes?: string;
  memberNotes?: string;
  isVideoCall: boolean;
  meetingLink?: string;
  createdAt: Date;
}

const consultationSchema = new Schema<IConsultation>({
  pastorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  memberId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'scheduled', 'completed', 'cancelled'], default: 'pending' },
  type: { type: String, enum: ['spiritual', 'counseling', 'prayer', 'general'], required: true },
  scheduledAt: Date,
  duration: { type: Number, default: 30 },
  notes: String,
  memberNotes: String,
  isVideoCall: { type: Boolean, default: false },
  meetingLink: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IConsultation>('Consultation', consultationSchema);
