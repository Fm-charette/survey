const express = require("express");
const { validate } = require('express-validation');
const router = express.Router();
const ListController = require('../controllers/list.controller');
const { listValidation } = require('../validations');

const listController = new ListController();

router.post("/", validate(listValidation.createList), listController.create);

module.exports = router;

