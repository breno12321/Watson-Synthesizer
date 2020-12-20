import express from 'express';
import {
  createCommentController,
  DeleteOneCommentsController,
  findAllCommentsController,
  findOneCommentsController,
} from './Comments.controller';

const CommentsRouter = express.Router();

CommentsRouter.post('/', createCommentController);
CommentsRouter.get('/', findAllCommentsController);
CommentsRouter.get('/:id', findOneCommentsController);
CommentsRouter.delete('/:id', DeleteOneCommentsController);

export default CommentsRouter;
