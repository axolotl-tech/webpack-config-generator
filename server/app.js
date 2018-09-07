const express = require('express');
const bodyParser = require('body-parser'); // Does stream concatenation in Node to not worry about read & write streams
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// Global Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public'))); // if we don't have any files, we can run this

// Routers
const api = require('./api');
const auth = require('./auth');
app.use('/auth', auth);
app.use('/api', api);

// Default Route
app.get('*', (req, res) => {
  //Routes all requests to Express from React
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
