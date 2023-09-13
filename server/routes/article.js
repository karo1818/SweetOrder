import express from 'express';
import { getArticles, createArticle } from '../controllers/article.js';

const router = express.Router();

router.get('/article/all', getArticles);
router.post('/', createArticle);

export default router;