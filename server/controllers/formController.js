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

    // console.log('before save, after create form');

    newForm.save((err, answers) => {
      res.locals.answers = answers;
      next();
    });
  },

  findForm: (req, res, next) => {
    // console.log('inside findForm controller method');
    // console.log(req.body.answers)
    // Form.findOne({ cookieID: req.body.answers.cookieID }, function(err, answers) {
    //   res.locals.answers = answers;
    // });
    next();
  }
};

module.exports = FormController;
