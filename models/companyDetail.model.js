import mongoose from 'mongoose';

const companyDetailSchema = new mongoose.Schema({
  
  description: { type: String },
  mobileNumber: { type: String },
  whatsappNumber: { type: String },
  email: { type: String },
  facebook: { type: String },
  linkedin: { type: String },
  location: { type: String },
  instagram: { type: String },
  website: { type: String }
}, { timestamps: true });

export default mongoose.models.CompanyDetail || mongoose.model('CompanyDetail', companyDetailSchema);
