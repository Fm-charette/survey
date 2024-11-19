const express = require('express');
const listRoute = require('./list.route');

const router = express.Router();

const productionRoute = [
  {
    path: '/list',
    route: listRoute,
  },
];

productionRoute.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;