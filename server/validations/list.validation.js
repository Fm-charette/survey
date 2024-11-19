const Joi = require('joi');

const createList = {
  body: Joi.object().keys({
    title: Joi.string(),
    content: Joi.string().required(),
  }),
};

module.exports = {
  createList
}