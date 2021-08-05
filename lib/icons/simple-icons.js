'use strict';

const simpleIcons = require('simple-icons');


const handle = name => {
  // eslint-disable-next-line new-cap
  const icon = simpleIcons.Get(name).svg;
  return icon.replace('<svg ', '<svg class="icon simple-icons" ');
};

module.exports = {
  type: 'simple-icons',
  configurationKey: 'simple-icons',
  handle
};
