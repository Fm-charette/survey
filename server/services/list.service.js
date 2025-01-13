const { List } = require('../models');

const createList = async (body) => {
  return List.create(body);
}

const query = async () => {
  return List.find();
};

const findById = async (id) => {
  return List.findById(id);
};

module.exports = {
  createList,
  query,
  findById,
};