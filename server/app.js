const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const routes = require('./routes');
const handleExpressValidationError  = require('./middleware/express.validation');
require('dotenv').config();

const app = express();

connectDB();
// Parse json request body
app.use(express.json());
app.use(handleExpressValidationError);
app.use(cors());
app.options('*', cors());

app.use('/v1', routes);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ error: 'Invalid JSON format' });
  }
  next();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message, 
  });
});
module.exports = app;