const Joi = require('joi');

const createList = {
  body: Joi.object({
    title: Joi.string().required(),
    element: Joi.array().items(Joi.string().optional()),
  })
};

const queryList = {
  query: Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
  }),
};

const findById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const updateByid = {
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
  createList,
  queryList,
  findById,
  updateByid,
  deleteOne,
}