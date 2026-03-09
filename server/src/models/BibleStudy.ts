import mongoose, { Schema, Document } from 'mongoose';

export interface IBibleStudy extends Document {
  title: string;
  description: string;
  scripture: string;
  leader: mongoose.Types.ObjectId;
  members: mongoose.Types.ObjectId[];
  schedule: string;
  discussions: {
    user: mongoose.Types.ObjectId;
    message: string;
    createdAt: Date;
  }[];
  isActive: boolean;
  createdAt: Date;
}

const BibleStudySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  scripture: { type: String },
  leader: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  schedule: { type: String },
  discussions: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: String },
    createdAt: { type: Date, default: Date.now }
  }],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IBibleStudy>('BibleStudy', BibleStudySchema);
