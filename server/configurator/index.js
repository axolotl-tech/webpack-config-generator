const fs = require('fs');
const {
  buildExports,
  buildScript,
  listPackageImports
} = require('./functions');

function generateConfiguration(req, res, next) {
  if (req.body && req.body.answers) {
    const { answers } = req.body;

    // Build the object
    const configuration = {};
    configuration.moduleExports = buildExports(answers);
    configuration.installScript = buildScript(answers);
    configuration.listPackageImports = listPackageImports(answers);

    // Check for errors
    if (
      !configuration.moduleExports ||
      !configuration.installScript ||
      !configuration.listPackageImports
    ) {
      return res.status(418).send('Failed to build the configuration object.');
    }

    // Pass on the result
    res.locals.configuration = configuration;

    next();
  } else {
    // If we received an improper body, return an error
    return res.status(418).end('No data received');
  }
}

function generateFile(req, res, next) {
  next();
}

function sendFile(req, res, next) {
  const filename = 'webpack.config.js';
  const filepath = path.resolve(`./server/configurator/__temp__/${filename}`);
  res.setHeader('Content-disposition', `attachment; filename="${filename}"`);

  res.status(200).download(filepath, filename, err => {
    res.status(418).end(err);
  });
}

module.exports = {
  generateConfiguration,
  sendFile,
  generateFile
};
