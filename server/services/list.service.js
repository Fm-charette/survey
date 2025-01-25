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

const updateById = async (id, body) => {
  console.log(id, body);
  return List.findByIdAndUpdate(id, body);
}

const deleteOne = async (id) => {
  try {
    return await List.deleteOne({ _id: id });
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