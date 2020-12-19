import express from 'express';
import CommentsRouter from '../components/Comments/Comments.router';
import WatsonT2SRouter from '../components/WatsonT2S/WatsonT2S.router';

const router = express.Router();

router.use('/t2s', WatsonT2SRouter);
router.use('/comments', CommentsRouter);

export default router;
