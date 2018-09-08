const express = require('express');
const router = express.Router();

const path = require('path');

const { generateConfiguration, generateFile } = require('../configurator');

/*
  Note: All routes here are set with /api/ as their base,
    i.e. the route is /api/ping
*/

router.get('/ping', (_, res) => res.status(200).send({ ping: 'ok' }));

/*
  Configurator routes
*/
router.post('/configurator/create', generateConfiguration, (req, res) => {
  console.log(req.body);
  res.status(200).json(res.locals.configuration);
});

router.get('/configurator/download', generateFile, (req, res) => {
  res.setHeader('Content-disposition', 'attachment; filename="test.js"');
  res
    .status(200)
    .download(path.resolve('./server/api/test.js'), 'test.js', err => {
      console.log({
        err,
        sentHeaders: res.headersSent,
        headers: res.headers,
        filepath: path.resolve('./server/api/test.js')
      });
    });
});

module.exports = router;
