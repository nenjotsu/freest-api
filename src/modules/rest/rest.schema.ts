import * as mongoose from 'mongoose';

export const RestDocumentSchema = new mongoose.Schema({
  userName: String,
  age: Number,
});
