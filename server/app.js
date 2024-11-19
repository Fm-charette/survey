const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();

connectDB();
// Parse json request body
app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use('', routes);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ error: 'Invalid JSON format' });
  }
  next();
});
module.exports = app;