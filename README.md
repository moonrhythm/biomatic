<p align="center">
  <a href="https://biomatic-ui.com">
  	<img width=15% src="https://raw.githubusercontent.com/BioMaRu/biomatic/readme-resource/readme-images/logo.png">
  </a>
</p>

<h1 align="center">Biomatic UI</h1>
<p align="center">A Flexible Atomic-Focused CSS Framework</p>

<div align="center">
  
  <a href="https://npmjs.org/package/biomatic">
    <img src="https://img.shields.io/npm/v/biomatic.svg?style=flat-square"
      alt="NPM version" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/gzip size-34.7kb-brightgreen.svg?style=flat-square"
      alt="Gzip size" />
  </a>
  <a href="https://github.com/BioMaRu/biomatic/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"
      alt="License" />
  </a>
</div>

<div align="center">
  <h3>
    <a href="https://biomatic-ui.com">
      Website
    </a>
    <span> &nbsp;|&nbsp; </span>
    <a href="https://biomatic-ui.com/document/introduction">
      Document
    </a>
  </h3>
</div>

## Table of Content
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [License](#license)

## Features
- __atomic-focus:__ craft anythings you need with very flexible atomic class
- __battery-included:__ basic components included for rapid UI development
- __clean responsive grid:__ simple and clean grid layout using css grid
- __carefully naming:__ readable and predictable class name
- __configurable:__ config and build to match what you need 
- __pure css:__ no javascript required
- __fun:__ yes, very fun to use

## Installation
You can [download](https://github.com/BioMaRu/biomatic/releases/download/v0.1.2/biomatic.full.min.css.zip) the latest complied version of Biomatic and link to your project using
```html
<link href="/path/to/biomatic.full.min.css" rel="stylesheet">
```

Or install using NPM or Yarn
```shell
npm install biomatic
```

```shell
yarn add biomatic
```

Or use CDN (jsdelivr via NPM)
```html
<link href="
https://cdn.jsdelivr.net/npm/biomatic@0.1.3/dist/biomatic.full.min.css" rel="stylesheet">
```

## Configuration
You can configure things such as Color, Spacing, Breakpoint, or Add/Remove/Change Values to Atomic Class to match your design or branding.

All configurations located in [config.scss](https://github.com/BioMaRu/biomatic/blob/master/src/config.scss)

To build Biomatic

__First, install devDependencies using yarn or NPM.__
```shell
yarn
```

```shell
npm install
```
This will install gulp, gulp-autoprefixer, gulp-rename, and gulp-sass.


__Then use yarn or NPM run build script to build.__
```shell
yarn run build
```

```shell
npm run build
```
The CSS output will be in '/dist' directory.
Outer build options located in [package.json](https://github.com/BioMaRu/biomatic/blob/master/package.json)
## License
Code copyright 2017 Theerapong Laowrungrat. Code released under the <a href="https://github.com/BioMaRu/biomatic/blob/master/LICENSE">MIT license.</a>
