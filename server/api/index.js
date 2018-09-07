const express = require('express');
const router = express.Router();

/*
  Note: All routes here are set with /api/ as their base,
    i.e. the route is /api/ping
*/

router.get('/ping', (_, res) => res.status(200).send({ ping: 'ok' }));

module.exports = router;
