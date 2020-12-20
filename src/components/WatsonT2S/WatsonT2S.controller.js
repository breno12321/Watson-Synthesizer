import fs from 'fs';
import { ErrorHandler } from '../../utils/ErrorHandler';
import { createAudioAndStore, getAudio } from './WatsonT2S';

/**
 * @param  {import('express').Request} req
 * @param  {import('express').Response} res
 * @return {import('express').Response}
 */
const createAudioAndStoreController = async (req, res) => {
  const { text, voice } = req.body;
  try {
    if (!text) {
      throw new Error('Text not provided');
    }

    const commentAudio = await createAudioAndStore(text, voice);

    res.writeHead(200, ['Content-Type', 'audio/mp3']);
    return res.end(Buffer.from(commentAudio.audio, 'base64'));
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
const readAudioStreamController = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('Id not provided');
    }

    const file = await getAudio(id);
    if (fs.existsSync(file)) {
      return res.sendFile(file);
    }
    throw new ErrorHandler('File Does Not Exist', 404);
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

export { createAudioAndStoreController, readAudioStreamController };
