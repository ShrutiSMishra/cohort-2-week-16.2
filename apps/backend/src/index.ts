import express from 'express';
import { BACKEND_URL } from '@repo/common/config';

const app = express();

console.log('BACKEND_URL***', BACKEND_URL);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});