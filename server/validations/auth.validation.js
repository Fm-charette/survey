const Joi = require('joi');

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (!value.match(/[A-Z]/) || !value.match(/[@#=&]/)) {
    return helpers.message('password must contain at least 1 special char : @#=& and 1 upper char');
  }
  return value;
};

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
};

module.exports = {
  register,
}