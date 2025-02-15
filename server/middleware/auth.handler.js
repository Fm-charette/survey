const jwt = require('jsonwebtoken');

const  verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant ou mal formaté. Veuillez vous connecter.' });
  }
  const token = authHeader.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide ou expiré.' });
    }
    req.user = user;
    next();
  });
}

module.exports = { verifyAccessToken }