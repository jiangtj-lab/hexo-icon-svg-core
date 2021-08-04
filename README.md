# hexo-icon-svg-core

A hexo plugin for svg icon, included font-awesome5 and ionicons (in development, there may be huge changes in the api)

## Install

```bash
yarn add @jiangtj/hexo-icon-svg-core
```

If used in themes or plugins, add the following additional content

```js
const { install } = require('@jiangtj/hexo-icon-svg-core/lib/install');
install(hexo);
```

## Config

```yml
icon:
  default_type: fa # or ionicons
  # fontawesome default options
  fontawesome:
    classes: ['icon'] # Add additional classes
  # ionicons default options
  ionicons:
    style: Outline # icon style, you should choose `Outline` `Filled` or `Sharp` (only for type: `ionicons`)
```

## Usage

In the script

```js
const { icon } = require('@jiangtj/hexo-icon-svg-core/lib/core');
icon(name, options)
```

In the theme layout, use a helper

```ejs
<%- icon(name, options) %>
```

In the article (key and value will be mapped to options)

```njk
{% icon name key1=value1 key2=value2 %}
```

## Api

### Font Awesome

- name:
  - String: icon name, and you can search them in font awesome
  - Object: icon definition
- options: icon options
  - type: icon provider type, `fa`(`fontawesome`) or `ion`(`ionicons`) at now, if not provided, the default_type in the configuration file will be used
  - ...[icon params](https://fontawesome.com/v5.15/how-to-use/javascript-api/methods/icon)

```js
icon('angry', {type: 'fa'})
icon('fas-angry', {type: 'fa'})
icon('fa far-angry', {type: 'fa'})
icon({iconName: 'angry', prefix: 'far'}, {type: 'fa'})
icon('angry', {type: 'fa'})
icon('angry', {type: 'fa', classes: ['iconx']})
```

### Ionicons
- name: icon name, and you can search them in ionicons
- options: icon options
  - type: icon provider type, `fa`(`fontawesome`) or `ion`(`ionicons`) at now, if not provided, the default_type in the configuration file will be used
  - style: icon style, you should choose `Outline` `Filled` or `Sharp`

```js
icon('accessibility', {type: 'ionicons'})
icon('accessibility-sharp', {type: 'ionicons'})
icon('accessibility', {type: 'ionicons', style: 'Filled'})
icon('logo-android', {type: 'ionicons'})
```

## Customize

See the [implementation](https://github.com/jiangtj-lab/hexo-icon-svg-core/tree/master/lib/icons) within this project

```js
const { load, assignOptions } = require('@jiangtj/hexo-icon-svg-core/lib/core');

load({
  type: 'custom type name', // type will be removed `-``_`` `, for example, this example is the same as `customtypename`
  // type: ['fa', 'fontawesome']
  // configurationKey: 'fontawesome'
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


