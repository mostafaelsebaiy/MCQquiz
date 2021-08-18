import express from 'express';
import questions from './/routes/questionRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();

app.use(express.json());
dotenv.config();
connectDB();
app.use(cors());

app.use('/api/questions', questions);

app.get('/', (req, res) => {
  res.send('app  is running');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('running'));
