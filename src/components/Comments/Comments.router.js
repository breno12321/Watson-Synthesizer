import express from 'express';
import { createCommentController, findAllCommentsController } from './Comments.controller';

const CommentsRouter = express.Router();

CommentsRouter.post('/', createCommentController);
CommentsRouter.get('/', findAllCommentsController);

export default CommentsRouter;
