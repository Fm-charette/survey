const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const routes = require('./routes');
const { errorHandler } = require('./middleware/error.handler');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/v1', routes);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Route not found: ${req.originalUrl}`,
  });
});

module.exports = app;