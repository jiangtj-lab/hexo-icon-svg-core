# hexo-icon-svg-core

A hexo plugin for svg icon, included font-awesome5 and ionicons

## Install

```bash
yarn add hexo-icon-svg-core
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
