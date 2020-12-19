import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
/**
 * Create an audio buffer form text input
 * @param  {String} text
 * @param  {String} voice
 * @return {Buffer(audio)}
 */
const createAudio = async (text, voice) => {
  if (!text || typeof text !== 'string') {
    throw new Error('Argument must be a string');
  }

  const config = {
    headers: {
      Accept: 'audio/mp3',
      'Content-Type': 'application/json',
    },
    auth: {
      username: 'apiKey',
      password: process.env.WATSON_API_KEY,
    },
    params: {
      voice,
    },
    responseType: 'arraybuffer',
  };

  const audio = await Axios.post(`${process.env.WATSON_API_URL}/v1/synthesize`, {
    text,
  }, config);

  if (audio.status !== 200) {
    throw new Error('Error to synthesize audio');
  }

  return Buffer.from(audio.data);
};

export { createAudio };
