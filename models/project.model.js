import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  technologies: [String],
  status: { type: String, enum: ['Completed', 'Ongoing', 'Planned'] },
  date: String,
  team: String,
  image: String,
  link: String,
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
