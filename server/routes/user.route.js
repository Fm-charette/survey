const express = require("express");
const { validate } = require('express-validation');
const router = express.Router();
const { userController } = require('../controllers');
const { userValidation } = require('../validations');
const { verifyAccessToken } = require('../middleware/auth.handler');

router.post('/', validate(userValidation.createUser), userController.createUser);
router.get('/', verifyAccessToken, validate(userValidation.queryUser), userController.query);
router.get('/:id', verifyAccessToken, validate(userValidation.findById), userController.findById);
router.patch('/:id', verifyAccessToken, validate(userValidation.updateById), userController.updateByid);
router.delete('/:id', verifyAccessToken, validate(userValidation.deleteOne), userController.deleteOne);


module.exports = router;