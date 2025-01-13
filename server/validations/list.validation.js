const Joi = require('joi');

const createList = {
  body: Joi.object().keys({
    title: Joi.string(),
    content: Joi.string().required(),
  }),
};

const queryList = {
  query: Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
  }),
}

const findById = {
  query: Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
  }), 
}

module.exports = {
  createList,
  queryList,
  findById
}