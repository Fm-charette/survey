const { userService } = require('../services/');

const createUser = async(req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.send(user);
  } catch (err) {
    next(err);
  };
};

const query = async (req, res) => {
  try {
    const result = await userService.queryUser();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal server error', err });
  }
};

const findById = async (req, res) => {
  try {
    const result = await userService.findById(req.params.id);
    if (!result)
      return res.status(404).send({ message: 'User not found' });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal server error', err });
  }
}

const updateByid = async (req, res) => {
  try {
    const result = await userService.updateById(req.params.id, req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal server error', err });
  }
}

const deleteOne = async(req, res) => {
  try {
    const result = await userService.deleteOne(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ message: 'Id list not found', err });
  }
}


module.exports = {
  createUser,
  query,
  findById,
  updateByid,
  deleteOne,
}