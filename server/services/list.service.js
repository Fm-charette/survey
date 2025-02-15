const { List } = require('../models');
const apiError = require('../utils/api.error');

const createList = async (body) => {
  try {
    return List.create(body);
  } catch (error) {
    throw apiError(400, error);
  }
}

const query = async (id) => {
  try {
    return List.find({
      $or: [
        { createdBy: id },
        { sharedWith: id }
      ]
    });
  } catch {
    throw apiError(404, 'Cannot find list');
  }
};

const findById = async (listId, userId) => {
  try {
    const list = await List.findById(listId);
    if (!list) {
      throw apiError(404, 'List not found');
    }
    if (list.createdBy.toString() !== userId && !list.sharedWith.includes(userId)) {
      throw apiError(403, 'Access denied');
    }
    return list; 
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