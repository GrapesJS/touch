# GrapesJS Touch

This plugin enables touch support for the GrapesJS editor [Demo](https://grapesjs.com/demo.html)

> Requires GrapesJS v0.14.29 or higher





## Summary

* Plugin name: `grapesjs-touch`





## Options

This plugin has no options





## Download

* CDN
  * `https://unpkg.com/grapesjs-touch`
* NPM
  * `npm i grapesjs-touch`
* GIT
  * `git clone https://github.com/artf/grapesjs-touch.git`





## Usage

Browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-touch.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      // ...
      plugins: ['grapesjs-touch']
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import grapesjsTouch from 'grapesjs-touch';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [ grapesjsTouch ]
});
```






## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-touch.git
$ cd grapesjs-touch
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
