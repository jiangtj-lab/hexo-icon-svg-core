'use strict';

const handlers = new Map();
const defaluts = {};
const innerOptions = require('./options');
const { formatKey } = require('./utils');

const load = handler => {
  if (Array.isArray(handler.type)) {
    handler.type.forEach(element => {
      handlers.set(formatKey(element), handler);
    });
  } else {
    handlers.set(formatKey(handler.type), handler);
  }
};

const assignOptions = options => {
  const inner = {};
  Object.keys(options).forEach(key => {
    inner[formatKey(key)] = options[key];
  });
  Object.assign(defaluts, inner);
};
assignOptions(innerOptions);

const findHandlerConfiguration = handler => {
  let key = handler.configurationKey;
  if (!key) {
    if (Array.isArray(handler.type)) {
      key = handler.type[0];
    } else {
      key = handler.type;
    }
  }
  return defaluts[formatKey(key)];
};

const icon = (name, options = {}) => {
  const type = formatKey(options.type || defaluts.defaulttype);
  const handler = handlers.get(type);
  if (!handler) {
    throw new Error(`Not find icon handler with type: ${type}`);
  }
  return handler.handle(name, Object.assign({}, findHandlerConfiguration(handler), options), defaluts.ctx);
};

module.exports = {load, assignOptions, icon, findHandlerConfiguration};
