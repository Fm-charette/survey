const Joi = require('joi');

const createUser = {
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[A-Z])(?=.*[#=_@&]).{8,}$/).required(),
    picture: Joi.string().uri().optional(),
    isAdmin: Joi.boolean().optional(),
  }), 
};

const queryUser = {
  query: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    isAdmin: Joi.boolean(),
    limit: Joi.number().integer().positive(),
    offset: Joi.number().integer().min(0),
  }),
};

const findById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const updateById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    picture: Joi.any(),
    isAdmin: Joi.boolean(),
  }).min(1),
};

const deleteOne = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};
module.exports = {
  createUser,
  queryUser,
  findById,
  updateById,
  deleteOne,
}