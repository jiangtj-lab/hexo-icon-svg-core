'use strict';

const { readModuleSVG } = require('../utils');

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
  return readModuleSVG(`ionicons/dist/svg/${name}.svg`)
    .replace('class="ionicon"', `class="${opts.class} ionicon"`);
};

module.exports = {
  type: ['ion', 'ionicons'],
  configurationKey: 'ionicons',
  handle
};
