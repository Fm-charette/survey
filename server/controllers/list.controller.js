const { listService } = require('../services')

  const create = async (req, res, next) => {
    try {
      req.body.createdBy = req.user._id;
      const result = await listService.createList(req.body);
      res.send(result);
    } catch (error) {
      next (error)
    }
  };

  const query = async (req, res) => {
    try {
      const result = await listService.query(req.user._id);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: 'Internal server error', error });
    }
  };

  const findById = async (req, res) => {
    try {
      const userId = req.user._id;
      const listId = req.params.id;
      const result = await listService.findById(listId, userId);
      if (!result) {
        return res.status(404).send({ message: 'List not found or access denied' });
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: 'Internal server error', error });
    }
  }

  const updateById = async (req, res) => {
    try {
      const result = await listService.updateById(req.params.id, req.body);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ message: 'Internal server error', error });
    }
  }

  const deleteList = async (req, res) => {
    try {
      const result = await listService.deleteOne(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(404).send({ message: 'Id list not found', error });
    }
  }

module.exports = {
  create,
  query,
  findById,
  updateById,
  deleteList
};