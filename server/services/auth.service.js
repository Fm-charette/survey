const jwt = require('jsonwebtoken');
const { User } = require('../models');

const generateToken = (user) => {
  return jwt.sign(
    { _id: user._id, email: user.email }, 
    process.env.JWT_SECRET, 
    { expiresIn: '1d' }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { _id: user._id },
    process.env.JWT_REFRESH,
    { expiresIn: '7d' }
  );
};

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user)
    throw new Error(404, 'Utilisateur non trouvé');
  const isMatch = await user.isPasswordMatch(password);
  if (!isMatch) 
    throw new Error(400, 'Mot de passe incorrect');
  const accessToken = generateToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken };
};

module.exports = { generateToken, authenticateUser, generateRefreshToken };