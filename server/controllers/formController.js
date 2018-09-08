const Form = require('../../data/db/models/form-schema');

const FormController = {
  createForm: (req, res, next) => {
    console.log(req.cookies['wbpk-cookie']);
    
    const newForm = new Form({
      cookieID: req.cookies['wbpk-cookie'], //way to access the form in the future
      test: 'IM AALIIIVVEE',
      // '1': req.body['1'] - way to access questions
    });

    newForm.save((err) => {
      if (err) return err;
      console.log('New form has been saved.')
    });
    next();
  },
  findForm: (req, res, next) => {
    console.log('inside findForm controller method');
    Form.findOne({ cookieID: req.cookies['wbpk-cookie'] }, function(err, thing) {
      res.locals.form = thing;
      return thing;
    });
    next();
  }
}

module.exports = FormController;