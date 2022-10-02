import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import env from 'dotenv';

import postRoutes from './routes/posts.js';

env.config();
const { CONNECTION_URL } = process.env;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to memories API');
});

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(error => console.log(error.message));