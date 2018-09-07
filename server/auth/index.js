const express = require('express');
const router = express.Router();

const cookieController = require('../cookie/cookieController');

/*
  Note: All routes here are set with /auth/ as their base,
    i.e. the route is /auth/ping
*/

router.get('/ping', (_, res) => res.status(200).send({ ping: 'ok' }));

router.get('/set', cookieController.setCookie);

module.exports = router;
