import express from 'express';
import config from './config';

const app = express();

app.get('/', (req, res) =>
  res.json({
    hello: 'world',
    envVar: process.env.EXAMPLE,
  }),
);

app.listen(config.server.port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${config.server.port}`);
});
