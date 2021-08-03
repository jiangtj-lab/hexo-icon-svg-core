'use strict';

const { assignOptions, load, icon } = require('./core');
const { createReadStream } = require('hexo-fs');
const { collect } = require('./utils');
const qs = require('qs');
const fa = require('./icons/fa');
const ioniconsNpm = require('./icons/ionicons-npm');

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

const instalGenerator = hexo => {
  hexo.extend.generator.register('icon-generator', () => {
    return new Array(...collect.context)
      .map(item => {
        return {
          path: item.path,
          data: function() {
            return createReadStream(item.file);
          }
        };
      });
  });
};

const setHexoConfigFile = hexo => {
  assignOptions(hexo.config.icons);
};

const loadDefaultIcons = () => {
  load(fa);
  load(ioniconsNpm);
};

const install = hexo => {
  assignOptions({ctx: hexo});
  setHexoConfigFile(hexo);
  installHelper(hexo);
  instalTag(hexo);
  instalGenerator(hexo);
  loadDefaultIcons();
};

module.exports = {install, installHelper, instalTag, instalGenerator, setHexoConfigFile, loadDefaultIcons};
