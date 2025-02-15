const { List } = require('../models');
const apiError = require('../utils/api.error');

const createList = async (body) => {
  try {
    return List.create(body);
  } catch (error) {
    throw apiError(400, error);
  }
}

const query = async () => {
  try {
    return List.find();
  } catch {
    throw apiError(404, 'Cannot find list');
  }
};

const findById = async (id) => {
  try {
    const list = await List.findById(id);
    if (!list) {
      throw apiError(404, 'List not found');
    }
    return List.findById(id);
  } catch (error) {
    throw apiError(400, error)
  }

};

const updateById = async (id, body) => {
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