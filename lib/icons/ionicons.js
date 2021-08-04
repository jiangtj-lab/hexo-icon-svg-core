'use strict';

const { readFileSync } = require('fs');

const calcName = (name, style) => {
  if (name.startsWith('logo-') || name.endsWith('-outline') || name.endsWith('-sharp')) {
    return name;
  }
  style = style.toLowerCase();
  if (style === 'outline') {
    return `${name}-outline`;
  }
  if (style === 'sharp') {
    return `${name}-sharp`;
  }
  return name;
};

const handle = (name, opts) => {
  name = calcName(name, opts.style);
  const filePath = require.resolve(`ionicons/dist/svg/${name}.svg`);
  return readFileSync(filePath).toString();
};

module.exports = {type: ['ion', 'ionicons'], handle};
