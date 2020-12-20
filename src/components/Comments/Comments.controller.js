import { ErrorHandler } from '../../utils/ErrorHandler';
import { createCommentAndAudio, deleteComment, listAllComments } from './Comments';
import { findOne } from './Comments.provider';

/**
 * @param  {import('express').Request} req
 * @param  {import('express').Response} res
 * @return {import('express').Response}
 */
const createCommentController = async (req, res) => {
  const { text } = req.body;

  try {
    const createdComment = await createCommentAndAudio(text);
    return res.status(201).send({
      status: 201,
      data: createdComment,
    });
  } catch (error) {
    if (error instanceof ErrorHandler) {
      return res.status(error.httpStatus).send({
        status: error.httpStatus,
        message: error.message,
      });
    }
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

/**
 * @param  {import('express').Request} req
 * @param  {import('express').Response} res
 * @return {import('express').Response}
 */
const findAllCommentsController = async (req, res) => {
  try {
    const allComments = await listAllComments();
    return res.status(200).send({
      status: 200,
      data: allComments,
    });
  } catch (error) {
    if (error instanceof ErrorHandler) {
      return res.status(error.httpStatus).send({
        status: error.httpStatus,
        message: error.message,
      });
    }
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};
/**
 * @param  {import('express').Request} req
 * @param  {import('express').Response} res
 * @return {import('express').Response}
 */
const findOneCommentsController = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await findOne(parseInt(id, 10));
    return res.status(200).send({
      status: 200,
      data: comment,
    });
  } catch (error) {
    if (error instanceof ErrorHandler) {
      return res.status(error.httpStatus).send({
        status: error.httpStatus,
        message: error.message,
      });
    }
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};
/**
 * @param  {import('express').Request} req
 * @param  {import('express').Response} res
 * @return {import('express').Response}
 */
const DeleteOneCommentsController = async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await deleteComment(parseInt(id, 10));
    return res.status(200).send({
      status: 200,
      rowsAffected: comments,
    });
  } catch (error) {
    if (error instanceof ErrorHandler) {
      return res.status(error.httpStatus).send({
        status: error.httpStatus,
        message: error.message,
      });
    }
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

export {
  createCommentController,
  findAllCommentsController,
  findOneCommentsController,
  DeleteOneCommentsController,
};
