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

## Configuration
You can configure things such as Color, Spacing, Breakpoint, or Add/Remove/Change value to Atomic Class to match your design or branding.

```scss
/*==================================== 
  Main / Branding Color
======================================*/
$color-primary:     hsl(206, 100%, 56%);
$color-primary-900: hsl(206, 100%, 18%);
$color-primary-800: hsl(206, 100%, 27%);
$color-primary-700: hsl(206, 100%, 35%);
$color-primary-600: hsl(206, 100%, 45%);
$color-primary-500: hsl(206, 100%, 56%);
$color-primary-400: hsl(206, 100%, 66%);
$color-primary-300: hsl(206, 100%, 79%);
$color-primary-200: hsl(206, 100%, 87%);
$color-primary-100: hsl(206, 100%, 95%);

$color-accent:     hsl(350, 100%, 60%);
$color-accent-900: hsl(350, 100%, 20%);
$color-accent-800: hsl(350, 100%, 30%);
$color-accent-700: hsl(350, 100%, 40%);
$color-accent-600: hsl(350, 100%, 50%);
$color-accent-500: hsl(350, 100%, 60%);
$color-accent-400: hsl(350, 100%, 70%);
$color-accent-300: hsl(350, 100%, 80%);
$color-accent-200: hsl(350, 100%, 90%);
$color-accent-100: hsl(350, 100%, 95%);

$color-neutral:     hsl(213, 30%, 80%);
$color-neutral-900: hsl(213, 30%, 18%);
$color-neutral-800: hsl(213, 30%, 27%);
$color-neutral-700: hsl(213, 30%, 35%);
$color-neutral-700: hsl(213, 30%, 58%);
$color-neutral-600: hsl(213, 30%, 68%);
$color-neutral-500: hsl(213, 30%, 80%);
$color-neutral-400: hsl(213, 30%, 87%);
$color-neutral-300: hsl(213, 30%, 92%);
$color-neutral-200: hsl(213, 30%, 95%);
$color-neutral-100: hsl(213, 30%, 98%);

/*==================================== 
  Semantic Color
======================================*/
$color-positive: hsl(150, 80%, 45%);
$color-warning: hsl(40, 90%, 60%);
$color-info:    hsl(200, 100%, 65%);
$color-negative:   hsl(0, 100%, 65%);

/*==================================== 
  Gray Scale Color
======================================*/
$color-white: hsl(0, 255%, 100%);
$color-gray: hsla(0, 0%, 90%, 0.8);
$color-dark: hsla(231, 10%, 25%, 0.9);
$color-black: hsl(0, 0%, 0%);

/*==================================== 
  Responsive Breakpoint
======================================*/
$breakpoint-sm: 770px;
$breakpoint-md: 900px;
$breakpoint-lg: 1200px;

/*==================================== 
  Default Font Family
======================================*/
$font-primary: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
```

## License
Code copyright 2017 Theerapong Laowrungrat. Code released under the <a href="https://github.com/BioMaRu/biomatic/blob/master/LICENSE">MIT license.</a>
