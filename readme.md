# Shed

Shed is a collection of functional CSS utilities aiming to save you the trouble of writing CSS.

## Setup
1. install the _shed-css_ package `npm install --save-dev shed-css`
2. if you just want to work:
	`@import "shed-css/dist/index.css";` from your stylesheet.
	If you want to customize things, add postcss and use [css-next](https://github.com/MoOx/postcss-cssnext) to your build and `@import "shed-css/lib/index.css"`.

3. You can customize the following:

```css
:root {
	/* font families */
	--f-f-sans: sans-serif;
	--f-f-serif: serif;
	--f-f-mono: monospace;
	/* font weights, minimum and maximum
	 *
	 * We will generate all of the weights between
	 * and including these.
	 */
	--f-w-min: 100;
	--f-w-max: 900;
	/* Line heights */
	--l-h--default: 1;
	--l-h--tight: var(--z2);
	--l-h--normal: var(--z1);
	--l-h--loose: var(--z4);
	/* Letter spacing */
	--l-s--default: initial;
	--l-s--tight: -0.8em;
	--l-s--normal: .16em;
	--l-s--loose: .32em;
	/* "z" is short for "size". This is where you set
	 * up your [modular scale](http://www.modularscale.com/?1&em&1.2&web&text).
	 * By default, it's set to minor-third (1.2).
	 */
	--z-6: var(--ms-6);
	--z-5: var(--ms-5);
	--z-4: var(--ms-4);
	--z-3: var(--ms-3);
	--z-2: var(--ms-2);
	--z-1: var(--ms-1);
	--z0: 0;
	--z1: var(--ms0);
	--z2: var(--ms1);
	--z3: var(--ms2);
	--z4: var(--ms3);
	--z5: var(--ms4);
	--z6: var(--ms5);
	--z7: var(--ms6);
	--z8: var(--ms7);
	--z9: var(--ms8);
	--z10: var(--ms9);
}

/* media queries, min-width recommmended */
@custom-media --mq-xs (min-width: 20em);
@custom-media --mq-sm (min-width: 30em);
@custom-media --mq-md (min-width: 37em);
@custom-media --mq-lg (min-width: 50em);
@custom-media --mq-xl (min-width: 75em);
```
