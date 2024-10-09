const app = require('./app');
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});