const { User } = require('../models');

const createUser = async (userBody) => {
  const isEmailTaken = await User.findOne({ email: userBody.email });
 if (isEmailTaken)
    throw new ApiError('BAD REQUEST', 'Email already taken');
  return User.create(userBody);
};

const queryUser = async() => {
  return User.find();
}

const findById = async(id) => {
  const user = await User.findById(id);
  if (!user)
    throw new ApiError('NOT FOUND', 'User not found');
  return user;
}

const updateById = async(id, body) => {
  if (Object.keys(body).length === 0)
    throw new ApiError('BAD REQUEST', 'No fields provided for update');
  if (body.email && (await User.isEmailTaken(body.email, id)))
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
  if (!updatedUser)
    throw new ApiError('NOT FOUND', 'User not found');
  return updatedUser;
}

const deleteOne = async(id) => {
  try {
    return await User.deleteOne({ _id: id });
  } catch (err) {
    throw new Error("Erreur lors de la suppression du document", err);
  }
}
module.exports = {
  createUser,
  queryUser,
  findById,
  updateById,
  deleteOne
}