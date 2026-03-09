import mongoose, { Schema, Document } from 'mongoose';

export interface IVolunteer extends Document {
  title: string;
  description: string;
  date: Date;
  slots: number;
  volunteers: mongoose.Types.ObjectId[];
  department: string;
  createdAt: Date;
}

const VolunteerSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  slots: { type: Number, required: true },
  volunteers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  department: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IVolunteer>('Volunteer', VolunteerSchema);
