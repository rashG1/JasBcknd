import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../src/models/user.model.js';

dotenv.config();

const admins = [
  { username: 'admin1', password: 'Admin@123', role: 'admin' },
  { username: 'admin2', password: 'Admin@123', role: 'admin' },
  { username: 'admin3', password: 'Admin@123', role: 'admin' },
];

async function createAdmins() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    for (const adminData of admins) {
      const exists = await User.findOne({ username: adminData.username });

      if (exists) {
        console.log(`❌ Admin "${adminData.username}" already exists`);
      } else {
        const admin = new User(adminData);
        await admin.save();
        console.log(`✅ Admin "${adminData.username}" created`);
      }
    }

    process.exit(0);
  } catch (err) {
    console.error('Error creating admins:', err);
    process.exit(1);
  }
}

createAdmins();
