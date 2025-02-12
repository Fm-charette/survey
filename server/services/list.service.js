const { ListItem } = require('../models');

const createList = async (body) => {
  return ListItem.create(body);
}

const query = async () => {
  return ListItem.find();
};

const findById = async (id) => {
  return ListItem.findById(id);
};

const updateById = async (id, body) => {
  return ListItem.findByIdAndUpdate(id, body);
}

const deleteOne = async (id) => {
  try {
    return await ListItem.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
    throw new Error("Erreur lors de la suppression du document");
  }
}

module.exports = {
  createList,
  query,
  findById,
  updateById,
  deleteOne
};