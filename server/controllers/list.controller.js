const listService = require('../services/list.service');

class ListController {
  constructor() {
    this.service = listService;
  }

  create = async (req, res) => {
    try {
      const result = await this.service.createList(req.body);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };

  query = async (req, res) => {
    try {
      const result = await this.service.query();
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error', error });
    }
  };

  findById = async (req, res) => {
    try {
      const result = await this.service.findById(req.params.id);
      if (!result) {
        return res.status(404).send({ message: 'List not found' });
      }
      res.status(200).send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error', error });
    }
  }

  updateByid = async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body
      const result = await this.service.updateByid(id, body);
      res.status(200).send(result);
    } catch (err) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error', error });
    }
  }

  delete = async (req, res) => {
    try {
      const result = await this.service.deleteOne(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      console.error(error);
      res.status(404).send({ message: 'Id list not found', error });
    }
  }
}

module.exports = ListController;