const { User } = require('../models');
const apiError = require('../utils/api.error')

const createUser = async (userBody) => {
  const isEmailTaken = await User.findOne({ email: userBody.email });
 if (isEmailTaken)
    throw apiError(400, 'Email already taken');
  return User.create(userBody);
};

const queryUser = async() => {
  return User.find();
}

const findById = async(id) => {
  const user = await User.findById(id);
  if (!user)
    throw createError(404, 'User not found')
  return user;
}

const updateById = async(id, body) => {
  if (Object.keys(body).length === 0)
    throw createError(400, 'No fields provided for update');
  if (body.email && (await User.isEmailTaken(body.email, id)))
    throw createError(400, 'Email already taken');
  const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
  if (!updatedUser)
    throw createError(404, 'User not found');
  return updatedUser;
}

const deleteOne = async(id) => {
  try {
    return await User.deleteOne({ _id: id });
  } catch {
    throw createError(404, 'User not found');
  }
}
module.exports = {
  createUser,
  queryUser,
  findById,
  updateById,
  deleteOne
}