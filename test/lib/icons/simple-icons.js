'use strict';

const { load, assignOptions, icon } = require('../../../lib/core');
const simpleIcons = require('../../../lib/icons/simple-icons');
const { readModuleSVG } = require('../../../lib/utils');
const { assignDefaultOptions } = require('../../../lib/install');

const getSVG = name => {
  return readModuleSVG(`simple-icons/icons/${name}.svg`)
    .replace('<svg ', '<svg class="icon simple-icons" ');
};

describe('simple icons', () => {

  before(() => {
    assignDefaultOptions();
    load(simpleIcons);
    assignOptions({default_type: 'simpleIcons'});
  });

  it('test icon()', () => {
    icon('simpleicons').should.eql(getSVG('simpleicons'));
  });

});
