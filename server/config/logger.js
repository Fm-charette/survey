const winston = require('winston');
require('winston-mongodb');
require('dotenv').config();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
      level: 'error',
    }),
    new winston.transports.MongoDB({
      db: process.env.MONGO_URI,
      collection: 'logs',
      level: 'info',
    }),
  ],
});

module.exports = logger;