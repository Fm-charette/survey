const express = require("express");
const { validate } = require('express-validation');
const router = express.Router();
const { listController } = require('../controllers/');
const { listValidation } = require('../validations');


router.post("/", validate(listValidation.createList), listController.create);
router.get('/', validate(listValidation.queryList), listController.query);
router.get('/:id', validate(listValidation.findById), listController.findById);
router.patch('/:id', listController.updateById);
router.delete('/:id', listController.deleteList);

module.exports = router;

