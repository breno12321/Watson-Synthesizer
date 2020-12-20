import { ErrorHandler } from '../../utils/ErrorHandler';

const { Comments } = require('../../db/models');

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
 * @param  {String} audioFile
 * @return {Promise<Comment>} Resolved Created Comment
 *
 */
const create = async (text, audioFile) => {
  /** @type {Comment} */
  const createdComment = await Comments.create({
    text,
    audioFile,
  });
  if (createdComment) return createdComment;
  throw new ErrorHandler('Comment could not be created', 500);
};

/**
 * @return {Promise<Comment[]>} Resolved Created Comment
 *
 */
const findAll = async () => {
  /** @type {Comment} */
  const allComments = await Comments.findAll();
  if (allComments) return allComments;
  throw new ErrorHandler('Could Not find All Comments', 404);
};

/**
 * @param {Number} id
 * @return {Promise<Comment[]>} Resolved Created Comment
 *
 */
const findOne = async (id) => {
  /** @type {Comment} */
  const comment = await Comments.findOne({ where: { id } });
  if (comment) return comment;
  throw new ErrorHandler('Could Not find Comment', 404);
};

/**
 * @param  {Number} id
 * @return {Promise<number>} Rows Affected
 *
 */
const remove = async (id) => {
  /** @type {Comment} */
  const deletedComment = await Comments.destroy({ where: { id } });
  if (deletedComment) return deletedComment;
  throw new ErrorHandler('Could not delete Comment', 500);
};

export {
  create, findAll, findOne, remove,
};
