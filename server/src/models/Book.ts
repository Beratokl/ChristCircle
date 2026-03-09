import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  pastorId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  coverUrl?: string;
  fileUrl?: string;
  price: number;
  isPaid: boolean;
  category: string;
  tags: string[];
  reviews: {
    userId: mongoose.Types.ObjectId;
    rating: number;
    comment: string;
    createdAt: Date;
  }[];
  purchases: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const bookSchema = new Schema<IBook>({
  pastorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  coverUrl: String,
  fileUrl: String,
  price: { type: Number, default: 0 },
  isPaid: { type: Boolean, default: false },
  category: { type: String, required: true },
  tags: [String],
  reviews: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    createdAt: { type: Date, default: Date.now }
  }],
  purchases: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IBook>('Book', bookSchema);
