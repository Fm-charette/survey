const { ValidationError } = require('express-validation');

const handleExpressValidationError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  next(err);
};

module.exports = handleExpressValidationError;