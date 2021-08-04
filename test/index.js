'use strict';

require('chai').should();

describe('main', () => {
  require('./lib/install');
  require('./lib/core');
  require('./lib/icons/ionicons');
});
