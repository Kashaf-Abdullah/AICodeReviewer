import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors'
const app = express();
app.use(cors({
  origin: ['https://aicodereviewer-web.netlify.app'], // ✅ Your Netlify site
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json())
app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/ai', aiRoutes);

export default app;
