'use strict';

const { load, assignOptions, icon } = require('../../../lib/core');
const ionicons = require('../../../lib/icons/ionicons');
const { readFileSync } = require('fs');

const setIoniconsOptions = () => {
  load(ionicons);
  assignOptions({
    default_type: 'ionicons',
    ionicons: {
      style: 'Outline'
    }
  });
};

const getSVG = name => {
  const path = require.resolve(`ionicons/dist/svg/${name}.svg`);
  return readFileSync(path).toString();
};

describe('ionicons', () => {

  it('test outline style', () => {
    setIoniconsOptions();
    icon('accessibility').should.eql(getSVG('accessibility-outline'));
    icon('accessibility', {style: 'Outline'}).should.eql(getSVG('accessibility-outline'));
  });

  it('test filled style', () => {
    setIoniconsOptions();
    icon('accessibility', {style: 'Filled'}).should.eql(getSVG('accessibility'));
  });

  it('test sharp style', () => {
    setIoniconsOptions();
    icon('accessibility', {style: 'Sharp'}).should.eql(getSVG('accessibility-sharp'));
  });

  it('test name with -sharp or -outline', () => {
    setIoniconsOptions();
    icon('accessibility-outline', {style: 'Sharp'}).should.eql(getSVG('accessibility-outline'));
    icon('accessibility-sharp').should.eql(getSVG('accessibility-sharp'));
  });

  it('test name with logo-', () => {
    setIoniconsOptions();
    icon('logo-android', {style: 'Sharp'}).should.eql(getSVG('logo-android'));
    icon('logo-android').should.eql(getSVG('logo-android'));
  });

});
