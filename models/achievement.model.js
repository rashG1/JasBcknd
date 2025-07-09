import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  link: String,
  type: { type: String, enum: ['Award', 'Milestone', 'Recognition'] },
}, { timestamps: true });

export default mongoose.model('Achievement', achievementSchema);
