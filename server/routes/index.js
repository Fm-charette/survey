const express = require('express');
const listRoute = require('./list.route');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

const router = express.Router();

const productionRoute = [
  {
    path: '/list',
    route: listRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/user',
    route: userRoute,
  }
];


productionRoute.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;