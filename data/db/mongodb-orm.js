const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/my_databases'); // localhost/ -> the url we're trying to connect to, and if it doesn't exist then create it

mongoose.connection
  .once('open', (err, client) => {
    console.log('Mongoose connection made.');
  })
  .on('error', function(error) {
    console.log('Connection error:', error);
  });

const newFormSchema = new Schema({
  cookieID: { type: Number },
  test: { type: String }
});

const Form = mongoose.model('Form', newFormSchema);
let newForm = new Form({
  cookieID: 5678,
  test: 'STILL ALLIIVVEE'
});

console.log('Form created');

newForm.save();
console.log('Form Saved');
