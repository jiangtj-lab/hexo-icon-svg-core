# hexo-icon-svg-core

A mutli-icons plugin for hexo

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
    classes: 'icon'
    style: outline # icon style, you should choose `outline` `filled` or `sharp`
  simple_icons:
    classes: 'icon'
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

### Font Awesome (type: `fa` or `fontawesome`)

- name:
  - String: icon name, and you can search them in font awesome
  - Object: icon definition
- options: icon options
  - type: icon provider type, if not provided, the default_type in the configuration file will be used
  - ...[icon params](https://fontawesome.com/v5.15/how-to-use/javascript-api/methods/icon)

```js
icon('angry', {type: 'fa'})
icon('fas angry', {type: 'fa'})
icon('far fa-angry', {type: 'fa'})
icon({iconName: 'angry', prefix: 'far'}, {type: 'fa'})
icon('angry', {type: 'fa'})
icon('angry', {type: 'fa', classes: ['iconx']})
```

### Ionicons (type: `ion` or `ionicons`)
- name: icon name, and you can search them in ionicons
- options: icon options
  - type: icon provider type, if not provided, the default_type in the configuration file will be used
  - class: you can custom icon size or others through it, default `icon`
  - style: icon style, you should choose `outline` `filled` or `sharp`

```js
icon('accessibility', {type: 'ionicons'})
icon('accessibility-sharp', {type: 'ionicons'})
icon('accessibility', {type: 'ionicons', style: 'Filled'})
icon('logo-android', {type: 'ionicons'})
icon('logo-android', {type: 'ionicons', class: 'iconx'})
```

### Simple Icons (type: `simpleicons`)
- name: icon name, and you can search them in ionicons
- options: icon options
  - type: icon provider type, if not provided, the default_type in the configuration file will be used
  - class: you can custom icon size or others through it, default `icon`

```js
icon('simpleicons', {type: 'simpleicons'})
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


