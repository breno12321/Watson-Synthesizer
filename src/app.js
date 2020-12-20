import express from 'express';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import Debug from 'debug';
import router from './routes';
import { sequelize } from './db/models';

const appLogger = Debug('API:App');
const httpLogger = Debug('HTTP');

require('dotenv').config();
// const jwt = require('jsonwebtoken');

// DB Connection
(async () => {
  try {
    await sequelize.authenticate();
    appLogger('Connection has been established successfully with the database.');
  } catch (error) {
    appLogger('Unable to connect to the database: %O', error);
  }
})();

const app = express();

app.use(morgan('tiny', { stream: { write: (msg) => httpLogger(msg) } }));
app.disable('x-powered-by');
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
