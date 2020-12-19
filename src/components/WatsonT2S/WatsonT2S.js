import fs from 'fs';
import path from 'path';
import { findOne } from '../Comments/Comments.provider';
import { createAudio } from './WatsonT2S.provider';

/**
 *
 * @typedef {Object} CreateAudio
 * @property {String} text
 * @property {String} audioFile
 * @property {Buffer} audio
 */

/**
 * @param  {String} text
 * @param  {String} [voice=en-US_MichaelV3Voice] - voice
 * @return {Promise<CreateAudio>}
 */
const createAudioAndStore = async (text, voice = 'en-US_MichaelV3Voice') => {
  if (!text) {
    throw new Error('Text not provided');
  }

  const audio = await createAudio(text, voice);

  const audioDir = path.resolve(process.cwd(), 'src/Audios');
  const fileName = `audio_${Date.now()}.mp3`;
  const file = `${audioDir}/${fileName}`;
  fs.writeFileSync(file, audio);

  return { text, audioFile: fileName, audio };
};

/**
 * @param  {Number} id
 * @return {String} Audio file path
 */
const getAudio = async (id) => {
  const audioData = await findOne(id);

  const audioDir = path.resolve(process.cwd(), 'src/Audios');

  const file = `${audioDir}/${audioData.audioFile}`;
  return file;
};

export { createAudioAndStore, getAudio };
