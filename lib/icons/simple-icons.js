'use strict';

const simpleIcons = require('simple-icons');

const titleToSlug = title => {
  return title.toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/\./g, 'dot')
    .replace(/&/g, 'and')
    .replace(/đ/g, 'd')
    .replace(/ħ/g, 'h')
    .replace(/ı/g, 'i')
    .replace(/ĸ/g, 'k')
    .replace(/ŀ/g, 'l')
    .replace(/ł/g, 'l')
    .replace(/ß/g, 'ss')
    .replace(/ŧ/g, 't')
    .normalize('NFD')
    .replace(/[^a-z0-9]/g, '');
};

const handle = (name, opts) => {
  // eslint-disable-next-line new-cap
  const icon = simpleIcons.Get(titleToSlug(name)).svg;
  return icon.replace('<svg ', `<svg class="${opts.class} simple-icons" `);
};

module.exports = {
  type: 'simple-icons',
  configurationKey: 'simple-icons',
  handle
};
