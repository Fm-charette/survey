const express = require("express");
const router = express.Router();
const { User } = require('../models');
const { authService } = require('../services');

router.post('/register', async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ success: true, message: 'Utilisateur créé' });
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const token = await authService.authenticateUser(req.body.email, req.body.password);
    res.json({ success: true, token });
  } catch (err) {
    next(err);
  }
});


module.exports = router;