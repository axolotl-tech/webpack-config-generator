const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newFormSchema = new Schema({
  cookieID: { type: Number },
  test: { type: String },
  // needs filling out with questionnaire
});

const Form = mongoose.model('Form', newFormSchema);

module.exports = Form;