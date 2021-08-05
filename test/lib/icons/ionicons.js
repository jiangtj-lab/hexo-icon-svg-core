'use strict';

const { load, assignOptions, icon } = require('../../../lib/core');
const ionicons = require('../../../lib/icons/ionicons');
const { assignDefaultOptions } = require('../../../lib/install');
const { readModuleSVG } = require('../../../lib/utils');

const getSVG = name => {
  return readModuleSVG(`ionicons/dist/svg/${name}.svg`)
    .replace('class="ionicon"', 'class="icon ionicon"');
};

describe('ionicons', () => {

  before(() => {
    assignDefaultOptions();
    load(ionicons);
    assignOptions({default_type: 'ionicons'});
  });

  it('test outline style', () => {
    icon('accessibility').should.eql(getSVG('accessibility-outline'));
    icon('accessibility', {style: 'Outline'}).should.eql(getSVG('accessibility-outline'));
  });

  it('test filled style', () => {
    icon('accessibility', {style: 'Filled'}).should.eql(getSVG('accessibility'));
  });

  it('test sharp style', () => {
    icon('accessibility', {style: 'Sharp'}).should.eql(getSVG('accessibility-sharp'));
  });

  it('test name with -sharp or -outline', () => {
    icon('accessibility-outline', {style: 'Sharp'}).should.eql(getSVG('accessibility-outline'));
    icon('accessibility-sharp').should.eql(getSVG('accessibility-sharp'));
  });

  it('test name with logo-', () => {
    icon('logo-android', {style: 'Sharp'}).should.eql(getSVG('logo-android'));
    icon('logo-android').should.eql(getSVG('logo-android'));
  });

  it('test custom class', () => {
    icon('accessibility', {class: 'iconx'}).should.eql(readModuleSVG('ionicons/dist/svg/accessibility-outline.svg')
      .replace('class="ionicon"', 'class="iconx ionicon"'));
  });

});
