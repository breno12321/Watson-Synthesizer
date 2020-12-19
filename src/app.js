import express from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import router from './routes';

require('dotenv').config();
// const jwt = require('jsonwebtoken');

const app = express();

app.use(morgan('tiny'));

app.use(
  urlencoded({
    extended: false,
  }),
);
app.use(json());

app.use(
  cors({
    credentials: true,
    methods: 'POST, GET, PUT, DELETE, PATCH, HEAD, OPTIONS',
    origin: true,
  }),
);

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.get('/whoami', (req, res) => {
  res.send({
    purpouseInLife: 'Be an Web APP for Smarkio Code Challange',
  });
});

export default app;
