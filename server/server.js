const express = require('express')
const bodyParser = require('body-parser') // Does stream concatenation in Node to not worry about read & write streams
const path = require('path')
const app = express()

const PORT = 4000

const api = require('./api')

app.use('/api', api)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '..', 'public'))) // if we don't have any files, we can run this

app.get('*', (req, res) => {
  //Routes all requests to Express from React
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`)
})
