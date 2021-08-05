'use strict';

const simpleIcons = require('simple-icons');
const { formatKey } = require('../utils');

const handle = (name, opts) => {
  // eslint-disable-next-line new-cap
  const icon = simpleIcons.Get(formatKey(name)).svg;
  return icon.replace('<svg ', `<svg class="${opts.class} simple-icons" `);
};

module.exports = {
  type: 'simple-icons',
  configurationKey: 'simple-icons',
  handle
};
