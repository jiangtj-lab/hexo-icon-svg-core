# hexo-icon-svg-core

A hexo plugin for svg icon, included font-awesome5 and ionicons (in development, there may be huge changes in the api)

## Install

```bash
yarn add @jiangtj/hexo-icon-svg-core
```

If used in themes or plugins, add the following additional content

```js
const { install } = require('hexo-icon-svg-core/lib/install');
install(hexo);
```

## Usage

In the script

```js
const { icon } = require('hexo-icon-svg-core/lib/core');
icon(name, options)
```

In the theme layout, use a helper

```ejs
<%- icon(name, options) %>
```

In the article (key and value will be mapped to option)

```njk
{% icon name key1=value1 key2=value2 %}
```

## Api

- name: icon name, and you can search them in font awesome or ionicons
- options: icon options
  - type: icon provider type, `fa` or `ionicons` at now
  - style: icon style, you should choose `Outline` `Filled` or `Sharp` (only for type: `ionicons`)

## Customize

```js
const { load, assignOptions } = require('hexo-icon-svg-core/lib/core');

load({
  type: 'custom type name', // type will be removed `-``_`` `, for example, this example is the same as `customtypename`
  handle: (name, options, ctx) => {
    console.log(name)
    console.log(options)  // Passed in by the icon method, or default configuration
    console.log(ctx) // In most cases it is a hexo object
  }
})

// Set default configuration
assignOptions({
  custom_type_name: {
    key1: value1
    // ...
  }
})
```


