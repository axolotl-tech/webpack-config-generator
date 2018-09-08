const Form = require('../../data/db/models/form-schema');

const FormController = {
  createForm: (req, res, next) => {
    const newForm = new Form({
      cookieID: req.body.answers.cookieID,
      0: req.body.answers[0],
      1: req.body.answers[1],
      2: req.body.answers[2],
      3: req.body.answers[3]
    });

    newForm.save(err => {
      console.log('bajdfnldka');
      if (err) return err;
      console.log('New form has been saved.');
    });

    Form.findOne({ cookieID: newForm.cookieID }, (err, thing) => {
      console.log('at form findOne');
    });

    next();
  }

  // findForm: (req, res, next) => {
  //   console.log('inside findForm controller method');
  //   Form.findOne({ cookieID: req.body.answers.cookieID }, ['wbpk-cookie'] }, function(err, thing) { //change cookieID to correct location;
  //     res.locals.form = thing;
  //     return thing;
  //   });
  //   next();
  // }
};

module.exports = FormController;
