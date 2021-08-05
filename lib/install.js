'use strict';

const { assignOptions, load, icon } = require('./core');
const qs = require('qs');
const fortawesome = require('./icons/fortawesome');
const ionicons = require('./icons/ionicons');

const installHelper = hexo => {
  hexo.extend.helper.register('icon', (name, opts) => {
    return icon(name, opts);
  });
};

const instalTag = hexo => {
  hexo.extend.tag.register('icon', args => {
    const name = args.shift();
    let opts = {};
    if (args.length > 0) {
      opts = Object.assign({}, ...args.map(item => qs.parse(item)));
    }
    return icon(name, opts);
  });
};

const setHexoConfigFile = hexo => {
  assignOptions(hexo.config.icon || {});
};

const loadDefaultIcons = () => {
  load(fortawesome);
  load(ionicons);
};

const install = hexo => {
  assignOptions({ctx: hexo});
  setHexoConfigFile(hexo);
  installHelper(hexo);
  instalTag(hexo);
  loadDefaultIcons();
};

module.exports = {install, installHelper, instalTag, setHexoConfigFile, loadDefaultIcons};
