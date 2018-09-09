<div align="center">
	<img src="https://raw.githubusercontent.com/BioMaRu/biomatic/readme-resource/readme-images/logo.png" alt="biomatic" height="120">
</div>

<h1 align="center">Biomatic CSS</h1>
<p align="center">A flexible atomic-focused CSS toolkit</p>

<div align="center">
	<a href="https://npmjs.org/package/biomatic">
		<img src="https://img.shields.io/npm/v/biomatic.svg?style=flat-square" alt="NPM version">
	</a>
	<a href="https://github.com/BioMaRu/biomatic/blob/master/LICENSE">
		<img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License">
	</a>
</div>

<br>
**Biomatic CSS** is an atomic-focused CSS library with utilities, layout, and basic components classes for faster development.

Biomatic's goal is to be a foundation to create and extend a maintainable CSS for your design systems (You can still easily use the complied css file).

**Biomatic** is unopiniated. You can configure colors, font, spacings, and more from simple SCSS configuration file and use them across your project.

# Features

- **Atomic-focused:** craft anything you wanted with the collection of atomic classes.
- **Battery included:** basic components, layouts and utilities included, for rapid UI development and easy to extend.
- **Clean responsive grid:** simple and clean grid systems.
- **Carefully naming:** readable and predictable class name.
- **Configurable:** configure and create your own design systems.
- **Pure CSS:** no javascript required.
- **Fun:** very fun to use.

# Installation

### Install manually
Download the compiled and minified of [biomatic](https://github.com/moonrhythm/biomatic/releases/download/v0.3.4/biomatic.full.min.css.zip).

Unzip and include ``biomatic.min.css`` in your website.
```html
<link href="/path/to/biomatic.min.css" rel="stylesheet">
```

### Install from CDN
Alternatively, you can use the unpkg or jsdelivr CDN to load latest compiled Biomatic
```html
<link href="https://unpkg.com/biomatic/dist/biomatic.min.css" rel="stylesheet">
```
```html
<link href="https://cdn.jsdelivr.net/npm/biomatic/dist/biomatic.min.css" rel="stylesheet">
```

### install using NPM or Yarn
```shell
npm install biomatic --save
```
```shell
yarn add biomatic
```

# Configuration and Build

If you want to use Biomatic as a foundation and extend it to create your design system. you can either
- Clone biomatic, configure files in [/config](https://github.com/moonrhythm/biomatic/blob/master/src/config), and then rebuild it.
- Install Biomatic from npm, create your own [main.scss](https://github.com/moonrhythm/biomatic/blob/master/src/main.scss) that import biomatic file from node_module but import [/config](https://github.com/moonrhythm/biomatic/blob/master/src/config) from your project instead, then rebuild that main.scss

## Clone and Build

**Clone biomatic**
```shell
git clone https://github.com/moonrhythm/biomatic.git
```
```shell
cd biomatic
```

**Install dependencies with npm or yarn**
```shell
npm install
```
```shell
yarn
```
This will install gulp, gulp-autoprefixer, gulp-rename, and gulp-sass.

**Build**
```shell
yarn run build
```
```shell
npm run build
```
The CSS output located in '/dist' directory

# Sites using Biomatic
<div style="display: flex">
	<a href="https://www.swapgap.com">
		<img height="50"
		style="margin-right: 16px" src="https://raw.githubusercontent.com/BioMaRu/biomatic/readme-resource/readme-images/swapgap.png?v=2">
	</a>
	<a href="https://fastwork.co">
		<img height="50"
		style="margin-right: 16px" src="https://raw.githubusercontent.com/BioMaRu/biomatic/readme-resource/readme-images/fastwork.png">
	</a>
	<a href="https://chanto.io">
		<img height="50"
		style="margin-right: 16px" src="https://raw.githubusercontent.com/BioMaRu/biomatic/readme-resource/readme-images/chanto.png">
	</a>
	<a href="https://healthathome.in.th/">
		<img height="50"
		style="margin-right: 16px" src="https://raw.githubusercontent.com/BioMaRu/biomatic/readme-resource/readme-images/healthathome.png">
	</a>
	<a href="https://rushh.co/">
		<img height="50"
		style="margin-right: 16px" src="https://raw.githubusercontent.com/BioMaRu/biomatic/readme-resource/readme-images/rushh.png">
	</a>
</div>

# License
Code copyright 2017 Theerapong Laowrungrat, 2018 Moon Rhythm. Code released under the <a href="https://github.com/moonrhythm/biomatic/blob/master/LICENSE">MIT license.</a>
