'use strict';

const { load, assignOptions, icon } = require('../../../lib/core');
const fa = require('../../../lib/icons/fa');
const { library, icon: faIcon } = require('@fortawesome/fontawesome-svg-core');
const { fas } = require('@fortawesome/free-solid-svg-icons');
const { far } = require('@fortawesome/free-regular-svg-icons');
const { fab } = require('@fortawesome/free-brands-svg-icons');

const setFAOptions = () => {
  load(fa);
  assignOptions({
    default_type: 'fa',
    fa: {
      classes: ['icon']
    }
  });
  library.add(fas, far, fab);
};

describe('font-awesome', () => {

  before(() => {
    setFAOptions();
  });

  it('test only name', () => {
    icon('adjust').should.eql(faIcon({iconName: 'adjust'}, {classes: ['icon']}).html[0]);
  });

  it('test name with fa- fas- far- or fab-', () => {
    icon('fa-angry').should.eql(faIcon({iconName: 'angry'}, {classes: ['icon']}).html[0]);
    icon('fas-angry').should.eql(faIcon({iconName: 'angry', prefix: 'fas'}, {classes: ['icon']}).html[0]);
    icon('far-angry').should.eql(faIcon({iconName: 'angry', prefix: 'far'}, {classes: ['icon']}).html[0]);
    icon('fab-android').should.eql(faIcon({iconName: 'android', prefix: 'fab'}, {classes: ['icon']}).html[0]);
  });

  it('test ignore fa prefix', () => {
    icon('fa adjust').should.eql(faIcon({iconName: 'adjust'}, {classes: ['icon']}).html[0]);
    icon('fa fas-angry').should.eql(faIcon({iconName: 'angry', prefix: 'fas'}, {classes: ['icon']}).html[0]);
  });

  it('test over class', () => {
    icon('adjust', {type: 'fa', classes: ['iconx']}).should.eql(faIcon({iconName: 'adjust'}, {classes: ['iconx']}).html[0]);
  });

  it('test find icon with definition', () => {
    icon({iconName: 'angry', prefix: 'far'}).should.eql(faIcon({iconName: 'angry', prefix: 'far'}, {classes: ['icon']}).html[0]);
  });

});
