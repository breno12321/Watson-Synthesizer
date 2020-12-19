import express from 'express';
import { createAudioAndStoreController, readAudioStreamController } from './WatsonT2S.controller';

const WatsonT2SRouter = express.Router();

WatsonT2SRouter.post('/', createAudioAndStoreController);
WatsonT2SRouter.get('/:id', readAudioStreamController);

export default WatsonT2SRouter;
