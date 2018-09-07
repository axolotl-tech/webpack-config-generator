function generateConfiguration(req, res, next) {
  if (req.body && req.body.answers) {
    const result = build(req.body.answers);
    res.locals.configuration = result;
    next();
  } else {
    return res.status(400).end('No data received');
  }
}

function build(answers) {
  try {
    // Note: Make sure to match the keys on strings, not numbers;
    //    otherwise, Node.js flips out and throws an error
    let entryDirectory = answers['0'];
    let entryFile = answers['1'];
    let outputDirectory = answers['2'];
    let outputFile = answers['3'];

    let result = {
      entry: entryDirectory + entryFile,
      output: {
        path: outputDirectory,
        filename: outputFile
      }
    };

    return result;
  } catch (err) {
    return res.status(500).end('Failed to parse the Answers object');
  }
}

module.exports = {
  generateConfiguration,
  build
};
