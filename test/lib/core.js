'use strict';

const { load, assignOptions, icon, findHandlerConfiguration } = require('../../lib/core');

describe('core', () => {

  it('test load', () => {
    load({
      type: 'test-load',
      handle: (name, opts) => {
        opts.name = name;
        return opts;
      }
    });

    icon('apl', {type: 'test load'}).should.eql({ type: 'test load', name: 'apl' });
  });

  it('test assignOptions', () => {
    load({
      type: 'test-load',
      handle: (name, opts) => {
        opts.name = name;
        return opts;
      }
    });

    assignOptions({
      test_load: {
        style: 'Outline'
      }
    });

    icon('apl', {type: 'test load'}).should.eql({ type: 'test load', name: 'apl', style: 'Outline' });
    icon('apl', {type: 'test load', style: 'Filled'}).should.eql({ type: 'test load', name: 'apl', style: 'Filled' });
  });

  it('test default type', () => {
    load({
      type: 'test-default-type',
      handle: (name, opts) => {
        opts.name = name;
        return opts;
      }
    });

    assignOptions({
      default_type: 'test-default-type'
    });

    icon('apl').should.eql({ name: 'apl' });
  });

  it('test findHandlerConfiguration', () => {
    assignOptions({
      key: 'key-config',
      keya: 'keya-config',
      configurationKey: 'configurationKey-config'
    });

    findHandlerConfiguration({
      type: 'key',
      configurationKey: 'configurationKey'
    }).should.eql('configurationKey-config');

    findHandlerConfiguration({
      type: 'key'
    }).should.eql('key-config');

    findHandlerConfiguration({
      type: ['keya', 'keyb']
    }).should.eql('keya-config');
  });

});
