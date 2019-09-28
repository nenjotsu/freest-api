import * as mongoose from 'mongoose';

const RestDocumentSchema = new mongoose.Schema(
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

RestDocumentSchema.index({ name: 'text' });

export default RestDocumentSchema;
