import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';

import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use("/api/auth", authRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
})