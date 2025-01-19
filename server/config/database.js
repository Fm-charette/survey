const mongoose = require('mongoose');
const logger = require('./logger');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info('MongoDB connecté'); 
  } catch (error) {
    logger.error('Erreur de connexion à MongoDB : ' + error.message);
    process.exit(1);
  }
};

module.exports = connectDB;