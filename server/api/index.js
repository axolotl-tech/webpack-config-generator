const express = require('express')
const router = express.Router()

router.get('/ping', (_, res) => res.status(200).send({ ping: 'ok' }))

module.exports = router
