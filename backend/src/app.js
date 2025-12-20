import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'backend is running successfully' });
})


import analyticsRoutes from './routes/analytics.routes.js';
app.use('/api/analytics', analyticsRoutes)

export default app;