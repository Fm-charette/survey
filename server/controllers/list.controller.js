const listService = require('../services/list.service');

  const create = async (req, res) => {
    try {
      const result = await listService.createList(req.body);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  const query = async (req, res) => {
    try {
      const result = await listService.query();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: 'Internal server error', error });
    }
  };

  const findById = async (req, res) => {
    try {
      const result = await listService.findById(req.params.id);
      if (!result) {
        return res.status(404).send({ message: 'List not found' });
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: 'Internal server error', error });
    }
  }

  const updateById = async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body
      console.log(id, body)
      const result = await listService.updateById(id, body);
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