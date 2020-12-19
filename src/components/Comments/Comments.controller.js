import { ErrorHandler } from '../../utils/ErrorHandler';
import { createCommentAndAudio, listAllComments } from './Comments';

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
        title: error.title,
      });
    }
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

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
        title: error.title,
      });
    }
    return res.status(500).send({
      status: 500,
      message: error.message,
    });
  }
};

export { createCommentController, findAllCommentsController };
