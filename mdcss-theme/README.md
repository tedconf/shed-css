# mdcss GitHub

<img align="right" width="96" height="96" src="https://jonathantneal.github.io/mdcss-theme-github/demo/mdcss-logo.png" title="mdcss logo">

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[mdcss GitHub] is a theme for [mdcss] based on the documentation styles seen across GitHub.

## Usage

Add [mdcss] and [mdcss GitHub] to your build tool:

```bash
npm install mdcss --save-dev
npm install mdcss-theme-github --save-dev
```

Whenever [mdcss] is used, reference this theme.

```js
require('mdcss')({
	theme: require('mdcss-theme-github')({ /* options */ })
})
```

## Features

#### Example

The `example` keyword is used to render living examples of code in iframes.

	```example
	<button>This is a button</button>
	```

Specifying a language like `example:html` generates an example that is then followed by the original code block.

	```example:html
	<button>This is a button</button>
	```

Arguments that follow `,name:value` may be used to customize the example iframes. For instance, the width or height of an example might be specified so that its contents adhere to a particular breakpoint.

	```example,width=1024px
	<p>The desktop view.</p>
	```

	```example,width=768px
	<p>The tablet view.</p>
	```

	```example,width=320px
	<p>The mobile view.</p>
	```

#### Color

The `color` keyword is used to generate a visual palette of colors. Arguments that follow `@name: value` may be used to provide any additional details about a color.

	```example:color
	@color: #ffffff @name: White
	@color: #f8f8f8 @name: White Smoke
	@color: #e7e7e7 @name: Whisper
	@color: #777777 @name: Grey
	@color: #565454 @name: Matterhorn
	@color: #4078c0 @name: Steel Blue
	@color: #333333 @name: Night Rider
	```

#### Order

The `order` heading detail is used to control the order of sections in the generated style guide. A negative order value will shift the item before non-ordered items, while a positive order value will push the item after non-ordered values.

```css
/*---
section: First Section
order: -1
---
```

Attached to a subsection, the order detail will control the position of the subsection inside the section.

```css
/*---
title:   Last Subsection
section: Third Section
order: 1
---
```


## Options

Options control the look and feel of the [mdcss GitHub] theme as well as any iframe examples that may be used.

#### `title`

Type: `String`  
Default: `'Style Guide'`

The page title to be used by the style guide.

#### `logo`

Type: `String`  
Default: `'mdcss-logo.png'`

<img src="https://jonathantneal.github.io/mdcss-theme-github/demo/mdcss-logo.png" width="96" height="96">

The page logo to be used by the style guide.

#### `css`

Type: `Array`  
Default: `['style.css']`

A list of CSS files to be used by the theme.

#### `js`

Type: `Array`  
Default: `[]`

A list of JavaScript files to be used by the theme.

#### `examples.base`

Type:    `String`  
Default: `null`

The base URL to use for all relative URLs contained within an example,
including CSS and JavaScript references.

#### `examples.target`

Type:    `String`  
Default: `'_self'`

The frame to open example hyperlinks from within an example.

#### `examples.css`

Type:    `Array`  
Default: `['style.css']`

A list of CSS files to be used by examples.

#### `examples.js`

Type:    `Array`  
Default: `null`

A list of JavaScript files to be used by examples.

#### `examples.bodyjs`

Type:    `Array`  
Default: `null`

A list of JavaScript files to be used by examples, inserted after the example.

#### `examples.htmlcss`

Type:    `String`  
Default: `'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:0;position:static;width:auto'`

A string of styles applied to the `<html>` wrapping the example. These default styles are used to create a seamless effect with the styleguide.

#### `examples.bodycss`

Type:    `String`  
Default: `'background:none;border:0;clip:auto;display:block;height:auto;margin:0;padding:16px;position:static;width:auto'`

A string of styles applied to the `<body>` wrapping the example. These default styles are used to create a seamless effect with the styleguide.

[ci]:      https://travis-ci.org/jonathantneal/mdcss-theme-github
[ci-img]:  https://img.shields.io/travis/jonathantneal/mdcss-theme-github.svg
[npm]:     https://www.npmjs.com/package/mdcss-theme-github
[npm-img]: https://img.shields.io/npm/v/mdcss-theme-github.svg
[mdcss]:   https://github.com/jonathantneal/mdcss

[mdcss GitHub]: https://github.com/jonathantneal/mdcss-theme-github
