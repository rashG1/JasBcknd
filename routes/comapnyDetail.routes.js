import express from 'express';
import { getCompany, saveCompany } from '../controllers/comapnyDetail.controler.js';

const router = express.Router();

router.get('/', getCompany);
router.post('/create-or-update', saveCompany);

export default router;
