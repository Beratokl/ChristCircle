import mongoose, { Schema, Document } from 'mongoose';

export interface IFastingGroup extends Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  fastingType: string;
  participants: {
    user: mongoose.Types.ObjectId;
    progress: number;
    lastCheckin: Date;
  }[];
  createdAt: Date;
}

const FastingGroupSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  fastingType: { type: String },
  participants: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    progress: { type: Number, default: 0 },
    lastCheckin: { type: Date }
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IFastingGroup>('FastingGroup', FastingGroupSchema);
