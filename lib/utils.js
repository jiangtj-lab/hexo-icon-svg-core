'use strict';

const formatKey = key => {
  return key.replace(/[-| |_]/g, '').toLowerCase();
};

module.exports = { formatKey };
