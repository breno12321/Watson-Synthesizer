import { ErrorHandler } from '../../utils/ErrorHandler';
import { createAudioAndStore } from '../WatsonT2S/WatsonT2S';
import { create, findAll } from './Comments.provider';
/**
 * @param  {String} text
 * @return {Comment} Comment model from sequelize
 * @
 */
const createCommentAndAudio = async (text) => {
  if (!text || text === '') throw new ErrorHandler('Text must not be empty', 'Invalid input', 400);

  const audioData = await createAudioAndStore(text);

  const cretedComment = await create(text, audioData.audioFile);

  return cretedComment;
};

const listAllComments = async () => {
  const comments = await findAll();

  return comments;
};

/**
 * @param  {Number} id
 */
const getOneComment = async (id) => {
  if (!id || typeof id !== 'number') throw new ErrorHandler('Invalid id', 'Invalid input', 400);
};

const deleteComment = async (id) => {

};

export { createCommentAndAudio, listAllComments, getOneComment };
