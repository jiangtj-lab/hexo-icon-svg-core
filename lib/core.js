'use strict';

const handlers = new Map();
const innerOptions = {};
const { formatKey } = require('./utils');
const { mergeWith } = require('lodash');

const load = handler => {
  if (Array.isArray(handler.type)) {
    handler.type.forEach(element => {
      handlers.set(formatKey(element), handler);
    });
  } else {
    handlers.set(formatKey(handler.type), handler);
  }
};

const assignOptions = opts => {
  const temp = {};
  Object.keys(opts).forEach(key => {
    temp[formatKey(key)] = opts[key];
  });
  const customizer = (objValue, srcValue) => {
    if (srcValue === null || srcValue === undefined) {
      return objValue;
    }
    if (Array.isArray(objValue)) {
      return srcValue;
    }
  };
  mergeWith(innerOptions, temp, customizer);
};

const findHandlerConfiguration = handler => {
  let key = handler.configurationKey;
  if (!key) {
    if (Array.isArray(handler.type)) {
      key = handler.type[0];
    } else {
      key = handler.type;
    }
  }
  return innerOptions[formatKey(key)];
};

const icon = (name, opts = {}) => {
  const type = formatKey(opts.type || innerOptions.defaulttype);
  const handler = handlers.get(type);
  if (!handler) {
    throw new Error(`Not find icon handler with type: ${type}`);
  }
  return handler.handle(name, Object.assign({}, findHandlerConfiguration(handler), opts), innerOptions.ctx);
};

module.exports = {load, assignOptions, icon, findHandlerConfiguration};
