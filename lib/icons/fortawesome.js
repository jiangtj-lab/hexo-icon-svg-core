'use strict';

const { library, dom, icon } = require('@fortawesome/fontawesome-svg-core');
const { fas } = require('@fortawesome/free-solid-svg-icons');
const { far } = require('@fortawesome/free-regular-svg-icons');
const { fab } = require('@fortawesome/free-brands-svg-icons');

library.add(fas, far, fab);

function faCss() {
  return dom.css();
}

function handle(name, opts) {
  let iconDL = {};
  if (typeof name === 'string') {
    const sp = name.split(' ');
    if (sp.length === 2) {
      name = sp[1];
      iconDL.prefix = sp[0];
    }

    // ignore fa-
    if (name.startsWith('fa-')) {
      name = name.substring(3);
    }

    iconDL.iconName = name;
  } else {
    iconDL = name;
  }
  const dl = icon(iconDL, opts);
  if (!dl) {
    throw new Error(
      'Can not find icon "' + name + '"'
      + 'Make sure you have installed also a corresponding icons package:\n'
      + ' - @fortawesome/free-solid-svg-icons for fas prefix \n'
      + ' - @fortawesome/free-regular-svg-icons for far prefix\n'
      + ' - @fortawesome/free-brands-svg-icons for fab prefix\n'
    );
  }
  return dl.html[0];
}

module.exports = {
  type: ['fa', 'fontawesome'],
  configurationKey: 'fontawesome',
  handle,
  faCss
};
