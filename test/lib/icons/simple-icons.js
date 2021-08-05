'use strict';

const { load, assignOptions, icon } = require('../../../lib/core');
const simpleIcons = require('../../../lib/icons/simple-icons');
const { readModuleSVG } = require('../../../lib/utils');

const setSimpleIconsOptions = () => {
  load(simpleIcons);
  assignOptions({
    default_type: 'simpleIcons'
  });
};

const getSVG = name => {
  return readModuleSVG(`simple-icons/icons/${name}.svg`)
    .replace('<svg ', '<svg class="icon simple-icons" ');
};

describe('simple icons', () => {

  before(() => {
    setSimpleIconsOptions();
  });

  it('test icon()', () => {
    icon('simpleicons').should.eql(getSVG('simpleicons'));
  });

});
