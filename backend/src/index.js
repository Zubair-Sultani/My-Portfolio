import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api/contact', contactRouter);

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
});
