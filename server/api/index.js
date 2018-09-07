const express = require('express');
const router = express.Router();

const configurator = require('../configurator');

/*
  Note: All routes here are set with /api/ as their base,
    i.e. the route is /api/ping
*/

router.get('/ping', (_, res) => res.status(200).send({ ping: 'ok' }));

router.post(
  '/configurator/create',
  configurator.generateConfiguration,
  (_, res) => {
    res.status(200).json(res.locals.configuration);
  }
);

module.exports = router;
