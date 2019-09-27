import * as mongoose from 'mongoose';

export const RestDocumentSchema = new mongoose.Schema(
  {
    id: Number,
    name: { type: String, required: true, trim: true },
    startDate: Date,
    endDate: Date,
    budget: Number,
  },
  {
    timestamps: true,
  },
);
