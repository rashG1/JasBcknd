import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  departments: [String],
  bio: String,
  image: String,
  skills: [String],
  linkedin: String,
  email: String,
  experience: String,
  icon: String // Optional icon name (can map to frontend icons)
}, { timestamps: true });

export default mongoose.model('TeamMember', teamMemberSchema);
