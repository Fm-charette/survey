const express = require("express");
const { validate } = require('express-validation');
const router = express.Router();
const { listController } = require('../controllers/');
const { listValidation } = require('../validations');
const { verifyAccessToken } = require('../middleware/auth.handler');

router.post("/", verifyAccessToken, validate(listValidation.createList), listController.create);
router.get('/', verifyAccessToken, validate(listValidation.queryList), listController.query);
router.get('/:id', verifyAccessToken, validate(listValidation.findById), listController.findById);
router.patch('/:id', verifyAccessToken, listController.updateById);
router.delete('/:id', verifyAccessToken, listController.deleteList);

module.exports = router;

