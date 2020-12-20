import { ErrorHandler } from '../../utils/ErrorHandler';
import { createAudioAndStore } from '../WatsonT2S/WatsonT2S';
import {
  create, findAll, findOne, remove,
} from './Comments.provider';

/**
 * @typedef {object} Comment
 * @property {String} text
 * @property {String} audioFile
 * @property {String} createdAt
 * @property {String} updatedAt
 * @property {Number} id text
 */

/**
 * @param  {String} text
 * @return {Promise<Comment>} Comment model from sequelize
 * @
 */
const createCommentAndAudio = async (text) => {
  if (!text || text === '') throw new ErrorHandler('Text must not be empty', 400);

  const audioData = await createAudioAndStore(text);

  const cretedComment = await create(text, audioData.audioFile);

  return cretedComment;
};
/**
 * @return {Promise<Comment[]>} All comments
 */
const listAllComments = async () => {
  const comments = await findAll();

  return comments;
};

/**
 * @param  {Number} id
 * @return {Promise<Comment>} Filtered comment
 */
const getOneComment = async (id) => {
  if (!id || typeof id !== 'number') throw new ErrorHandler('Invalid id', 400);
  const comment = await findOne(id);

  return comment;
};

/**
 * @param  {number} id
 * @return {Promise<number>} Rows Affected
 */
const deleteComment = async (id) => {
  if (!id || typeof id !== 'number') throw new ErrorHandler('Invalid id', 400);
  const comment = await remove(id);

  return comment;
};

export {
  createCommentAndAudio, listAllComments, getOneComment, deleteComment,
};
