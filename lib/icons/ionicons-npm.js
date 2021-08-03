'use strict';

// const { major } = require('semver');
// const package = require('../../package.json');
const { calcName } = require('./ionicons-utils');
const { resolve } = require('path');
const { readFileSync } = require('fs');

const handle = (name, opts, ctx) => {
  name = calcName(name, opts.style);
  const file = resolve(ctx.plugin_dir, `ionicons/dist/svg/${name}.svg`);
  return readFileSync(file).toString();
};

module.exports = {type: ['ionicons', 'ionicons_npm'], handle};
