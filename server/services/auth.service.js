const jwt = require('jsonwebtoken');
const { User } = require('../models');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email }, 
    process.env.JWT_SECRET, 
    { expiresIn: '1h' }
  );
};

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user)
    throw new Error(404, 'Utilisateur non trouvé');
  const isMatch = await user.isPasswordMatch(password);
  if (!isMatch) 
    throw new Error(400, 'Mot de passe incorrect');
  return generateToken(user);
};

module.exports = { generateToken, authenticateUser };