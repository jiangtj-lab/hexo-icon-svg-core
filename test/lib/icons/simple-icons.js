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
    icon('airplayvideo').should.eql(getSVG('airplayvideo'));
    icon('AirPlay Video').should.eql(getSVG('airplayvideo'));
    icon('/e/').should.eql(getSVG('e'));
    icon('.NET').should.eql(getSVG('dotnet'));
    icon('dotnet').should.eql(getSVG('dotnet'));
  });

  it('test custom class', () => {
    icon('simpleicons', {class: 'iconx'}).should.eql(readModuleSVG('simple-icons/icons/simpleicons.svg')
      .replace('<svg ', '<svg class="iconx simple-icons" '));
  });

});
