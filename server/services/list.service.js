const { List } = require('../models');

const createList = async (body) => {
  return List.create(body);
}

module.exports = {
  createList,
};