import mongoose, { Schema, Document } from 'mongoose';

export interface IAttendance extends Document {
  event: mongoose.Types.ObjectId;
  date: Date;
  attendees: mongoose.Types.ObjectId[];
  totalCount: number;
  createdAt: Date;
}

const AttendanceSchema = new Schema({
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  date: { type: Date, required: true },
  attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  totalCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IAttendance>('Attendance', AttendanceSchema);
