import * as mongoose from 'mongoose';

export const SuperheroDocumentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    dateAppearance: Date,
    place: { type: String, trim: true },
    powerStats: {
      intelligence: Number,
      strength: Number,
      speed: Number,
      durability: Number,
      power: Number,
      combat: Number,
    },
    appearance: {
      gender: { type: String, trim: true },
      race: { type: String, trim: true },
      weight: [
        {
          lb: { type: Number },
          kg: { type: Number },
        },
      ],
    },
    aliases: [{ type: String, trim: true }],
  },
  {
    timestamps: true,
  },
);
