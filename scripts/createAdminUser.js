import mongoose from 'mongoose';

import User from '../models/user.model.js'; // Adjust the path as necessary
import {config} from '../config/env.js'; // Adjust the path as necessary


const admins = [
  { username: 'admin1', password: 'Admin@123', role: 'admin' },
  { username: 'admin2', password: 'Admin@123', role: 'admin' },
  { username: 'admin3', password: 'Admin@123', role: 'admin' },
];

async function createAdmins() {
  try {
    await mongoose.connect(config.mongoURI);
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
