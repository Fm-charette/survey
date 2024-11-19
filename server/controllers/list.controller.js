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
}

module.exports = ListController;