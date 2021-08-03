'use strict';

const { library, dom, icon: getIcon } = require('@fortawesome/fontawesome-svg-core');

function tryInstall(block) {
  try {
    const icons = block();
    library.add(icons);
    return true;
  } catch (ex) {
    return false;
  }
}

tryInstall(() => { return require('@fortawesome/free-solid-svg-icons').fas; });
tryInstall(() => { return require('@fortawesome/free-regular-svg-icons').far; });
tryInstall(() => { return require('@fortawesome/free-brands-svg-icons').fab; });

function faCss() {
  return dom.css();
}

function handle(name, opts) {
  let iconDL = {};
  if (typeof name === 'string') {
    iconDL.iconName = name;
  } else {
    iconDL = name;
  }
  const icon = getIcon(iconDL, opts);
  if (!icon) {
    throw new Error(
      'Can not find icon "' + name + '"'
      + 'Make sure you have installed also a corresponding icons package:\n'
      + ' - @fortawesome/free-solid-svg-icons for fas prefix \n'
      + ' - @fortawesome/free-regular-svg-icons for far prefix\n'
      + ' - @fortawesome/free-brands-svg-icons for fab prefix\n'
    );
  }
  return icon.html;
}

module.exports = {type: ['fa', 'fa_js_core'], handle, faCss};
