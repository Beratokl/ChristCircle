import mongoose, { Schema, Document } from 'mongoose';

export interface IDonation extends Document {
  user: mongoose.Types.ObjectId;
  amount: number;
  type: string;
  paymentMethod: string;
  transactionId: string;
  receiptUrl?: string;
  createdAt: Date;
}

const DonationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, default: 'general' },
  paymentMethod: { type: String },
  transactionId: { type: String },
  receiptUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IDonation>('Donation', DonationSchema);
