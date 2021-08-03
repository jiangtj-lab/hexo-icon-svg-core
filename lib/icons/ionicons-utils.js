'use strict';

const calcName = (name, style) => {
  if (name.startsWith('logo-')) {
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

module.exports = { calcName };
