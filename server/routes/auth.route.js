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
    const { accessToken, refreshToken } = await authService.authenticateUser(req.body.email, req.body.password);
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours
    });
    res.json({ success: true, accessToken });
  } catch (err) {
    next(err);
  }
});

router.post('/refresh', async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ message: 'Refresh token manquant' });
    jwt.verify(refreshToken, process.env.JWT_REFRESHT, async (err, decoded) => {
      if (err)
        return res.status(403).json({ message: 'Refresh token invalide' });
      const user = await User.findById(decoded.id);
      if (!user)
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      const accessToken = await authService.authenticateUser(req.body.email, req.body.password);
      res.json({ accessToken });
    });
  } catch (err) {
    next(err);
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('refreshToken');
  res.json({ success: true, message: 'Déconnecté' });
});

module.exports = router;