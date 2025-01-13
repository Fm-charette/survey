const express = require("express");
const { validate } = require('express-validation');
const router = express.Router();
const ListController = require('../controllers/list.controller');
const { listValidation } = require('../validations');

const listController = new ListController();

router.post("/", validate(listValidation.createList), listController.create);
router.get('/', validate(listValidation.queryList), listController.query);
router.get('/:id', validate(listValidation.findById), listController.findById);

module.exports = router;

