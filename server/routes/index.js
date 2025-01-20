const express = require('express');
const listRoute = require('./list.route');
const authRoute = require('./auth/login.route');

const router = express.Router();

const productionRoute = [
  {
    path: '/list',
    route: listRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  }
];


productionRoute.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;