import CompanyDetail from '../models/companyDetail.model.js';

export const getCompanyDetail = async () => {
  return await CompanyDetail.findOne();
};

export const createOrUpdateCompanyDetail = async (data) => {
  const existing = await CompanyDetail.findOne();
  if (existing) {
    return await CompanyDetail.findByIdAndUpdate(existing._id, data, { new: true });
  }
  return await CompanyDetail.create(data);
};
