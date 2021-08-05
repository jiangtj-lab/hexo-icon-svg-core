'use strict';

const { assignOptions, load, icon } = require('./core');
const qs = require('qs');
const defaultOptions = require('./options');
const fortawesome = require('./icons/fortawesome');
const ionicons = require('./icons/ionicons');
const simpleIcons = require('./icons/simple-icons');

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

const assignDefaultOptions = hexo => {
  assignOptions({ctx: hexo});
  assignOptions(defaultOptions);
};

const setHexoConfigFile = hexo => {
  assignOptions(hexo.config.icon || {});
};

const loadDefaultIcons = () => {
  load(fortawesome);
  load(ionicons);
  load(simpleIcons);
};

const install = hexo => {
  assignDefaultOptions(hexo);
  setHexoConfigFile(hexo);
  installHelper(hexo);
  instalTag(hexo);
  loadDefaultIcons();
};

module.exports = {install, installHelper, instalTag, assignDefaultOptions, setHexoConfigFile, loadDefaultIcons};
