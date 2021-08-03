'use strict';

const qs = require('qs');
const { icon, load } = require('../../lib/core');

describe('install', () => {

  it('test tag', () => {
    // copy from install.js
    const tagFn = args => {
      const name = args.shift();
      let opts = {};
      if (args.length > 0) {
        opts = Object.assign({}, ...args.map(item => qs.parse(item)));
      }
      return icon(name, opts);
    };

    load({
      type: 'test-tag',
      handle: (name, opts) => {
        opts.name = name;
        return opts;
      }
    });

    tagFn(['foo', 'type=testtag']).should.eql({ type: 'testtag', name: 'foo' });
    tagFn(['foo', 'type=test-tag&style=shap']).should.eql({ type: 'test-tag', style: 'shap', name: 'foo' });
    tagFn(['foo', 'type=test-tag', 'style=shap']).should.eql({ type: 'test-tag', style: 'shap', name: 'foo' });
  });

});
