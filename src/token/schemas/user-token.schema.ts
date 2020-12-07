import * as mongoose from 'mongoose';

export const TokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  uId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  expiresAt: { type: Date, required: true },
});

TokenSchema.index({ tocken: 1, uId: 1 }, { unique: true });
