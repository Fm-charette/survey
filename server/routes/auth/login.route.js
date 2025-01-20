const express = require("express");
const router = express.Router();
const { validate } = require('express-validation');
const { authValidation } = require('../../validations');
const { authController } = require("../../controllers");

router.get('/login');
router.post('/regiser', validate(authValidation.register), authController.register);

module.exports = router;