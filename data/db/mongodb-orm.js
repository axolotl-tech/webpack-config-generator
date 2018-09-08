const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_databases'); // localhost/ -> the url we're trying to connect to, and if it doesn't exist then create it

mongoose.connection.once('open', (err, client) => {
  console.log('Mongoose connection made.');
}).on('error', function(error) {
  console.log('Connection error:', error);
});
