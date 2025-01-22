const { User } = require('../models');

const createUser = async (userBody) => {
  const isEmailTaken = await User.findOne({ email: userBody.email });
  if (isEmailTaken) {
    throw new ApiError('BAD REQUEST', 'Email already taken');
  }
  return User.create(userBody);
};

module.exports = {
  createUser,
}