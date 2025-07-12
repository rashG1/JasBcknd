import { getCompanyDetail, createOrUpdateCompanyDetail } from '../services/comapnyDetail.service.js';

export const getCompany = async (req, res) => {
  try {
    const detail = await getCompanyDetail();
    res.json(detail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveCompany = async (req, res) => {
  try {
    const saved = await createOrUpdateCompanyDetail(req.body);
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
