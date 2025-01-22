const { userService, tokenService } = require('../services/');

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const tokens = await tokenService.generateAuthTokens(user);
    res.status(httpStatus.CREATED).send({ user, tokens });
  } catch (err) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  register,
}