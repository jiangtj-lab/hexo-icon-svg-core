'use strict';

// const { major } = require('semver');
// const package = require('../../package.json');
const { collect } = require('../utils');
const { calcName } = require('./ionicons-utils');
const { resolve, join } = require('path');

const handle = (name, opts, ctx) => {
  name = calcName(name, opts.style);
  const file = resolve(ctx.plugin_dir, `ionicons/dist/svg/${name}.svg`);
  const path = `icons/ionicons/${name}.svg`;
  collect.add(path, file);
  const src = join(ctx.config.root, path);
  return `<img class="icon ionicons" src="${src}" />`;
};

module.exports = {type: ['ionicons', 'ionicons_npm'], handle};
