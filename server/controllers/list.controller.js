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
}

module.exports = ListController;