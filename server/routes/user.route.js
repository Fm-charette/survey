const express = require("express");
const { validate } = require('express-validation');
const router = express.Router();
const { userController } = require('../controllers');
const { userValidation } = require('../validations');

router.post('/', validate(userValidation.createUser), userController.createUser);
router.get('/', validate(userValidation.queryUser), userController.query);
router.get('/:id', validate(userValidation.findById), userController.findById);
router.patch('/:id', validate(userValidation.updateById), userController.updateByid);
router.delete('/:id', validate(userValidation.deleteOne), userController.deleteOne);


module.exports = router;