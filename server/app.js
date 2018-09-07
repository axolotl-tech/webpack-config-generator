const express = require('express');
const bodyParser = require('body-parser'); // Does stream concatenation in Node to not worry about read & write streams
const path = require('path');

const app = express();
const api = require('./api');

// Global Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public'))); // if we don't have any files, we can run this

// Routers
app.use('/api', api);

// Default Route
app.get('*', (req, res) => {
  //Routes all requests to Express from React
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
