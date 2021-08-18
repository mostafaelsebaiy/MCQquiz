import express from 'express';
const router = express.Router();

import { getquestions } from '../controllers/questions.js';

router.route('/').get(getquestions);
export default router;
