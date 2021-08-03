'use strict';

const collect = {
  context: new Set(),
  add: (path, file) => {
    collect.context.add({path, file});
  }
};

const formatKey = key => {
  return key.replace(/[-| |_]/g, '').toLowerCase();
};

module.exports = { collect, formatKey };
