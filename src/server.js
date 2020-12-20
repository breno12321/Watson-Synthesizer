import Debug from 'debug';
import app from './app';

const serverLogger = Debug('API:Server');

const port = process.env.PORT || 6969;

app.listen(port, () => {
  serverLogger(`Example app listening on port ${port}!`);
});
