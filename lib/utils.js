'use strict';

const { readFileSync } = require('fs');

const formatKey = key => {
  return key.replace(/[-| |_]/g, '').toLowerCase();
};

const readModuleSVG = filePath => {
  return readFileSync(require.resolve(filePath)).toString();
};

module.exports = { formatKey, readModuleSVG };
