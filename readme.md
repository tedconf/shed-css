# shed.css – The Beginning of the End of CSS

Shed.css came about after I got tired of writing CSS. All of the CSS in the world has already been written, and there's no need to rewrite it in every one of our projects. After a bikeshedding session with [@brnnbrn](https://mobile.twitter.com/brnnbrn) & [@samselikoff](https://mobile.twitter.com/samselikoff), and [me](http://mobile.twitter.com/vinspee), we came up with a naming scheme we were satisfied with, and [shed.css](http://github.com/tedconf/shed-css) was born.

[What does shed accomplish?](http://tedconf.github.io/shed-css/docs.html#essential-concepts)

[What does it look like?](http://tedconf.github.io/shed-css/docs.html#examples)

## Use

#### _In a hurry? Clone [this repo](https://github.com/VinSpee/shed-starter) to get going with a starter kit and skip all of the setup._

### First, install shed using [npm](http://www.nearform.com/nodecrunch/nodejs-sudo-free/).

    ❯ yarn add -D shed-css

At this point, we come to a fork in the road. Choose one of these options:

#### 🚳 Single Speed

— I just want to use it.

    @import "shed-css/dist/index.css";

#### ⚛️ React

— I want to use it in React.js

Shed has a [react companion](https://github.com/VinSpee/react-shed) implemented using [styled components](https://styled-components.com/). It comes with an optional [babel plugin](https://github.com/VinSpee/babel-plugin-shed) which allows you to write components like this:

    <h1.shed
    	f="4"
    	px="2"
    	c="white"
    	bg="blue"
    >
    	Padded Headline
    </h1.shed>

#### 🖌 Fixie

— I want to customize the scale and fonts.

Shed is written in [PostCSS](http://postcss.org/) using future css syntax, but is distributed as future css and Sass. To customize the scale and fonts, you must follow one of these two paths:

##### PostCSS

install shed's peer dependencies ([postcss](http://postcss.org) and [cssnext](http://cssnext.io/postcss)) and add them to your build pipeline.

##### Install peer deps:

    npm ls 2>/dev/null | grep \"UNMET PEER DEPENDENCY\" | awk '{print $NF}' | xargs yarn add -D

##### Customize Variables:

    @import "shed-css/lib/index.css";

    :root {
    	/*
    	 * These "z" values reflect the steps on the scale.
    	 * Numbers prefixed with "dot" mean they're below
    	 * the base font size.
    	 */
    	--z-dot1: .19381rem
    	--z-dot2: .23257rem
    	--z-dot3: .27908rem
    	--z-dot4: .3349rem
    	--z-dot5: .40188rem
    	--z-dot6: .48225rem
    	--z-dot7: .5787rem
    	--z-dot8: .69444rem
    	--z-dot9: .83333rem
    	--z0: 0;
    	--z1: 1rem
    	--z2: 1.2rem
    	--z3: 1.44rem
    	--z4: 1.728rem
    	--z5: 2.0736rem
    	--z6: 2.48832rem
    	--z7: 2.98598rem
    	--z8: 3.58318rem
    	--z9: 4.29982rem
    	--z10: 5.15978rem

    	/*
    	 * These "f-f" values change the font family utilties
    	 * in the "font family" section.
    	 */
    	--f-f-sans: sans-serif;
    	--f-f-serif: serif;
    	--f-f-mono: monospace;

    	/*
    	 * These "l-h" values change the line height utilties
    	 * in the "line height" section. Unitless numbers recommended.
    	 */
    	--l-h--default: 1;
    	--l-h--tight: 1.2;
    	--l-h--normal: 1.5;
    	--l-h--loose: 1.75;

    	/*
    	 * These "l-s" values change the letter spacing
    	 * utilties in the "letter spacing" section.
    	 * Em values recommended.
    	 */
    	--l-s--default: normal;
    	--l-s--tight: -.04em;
    	--l-s--normal: -.01em;
    	--l-s--loose: .1em;
    }

Now, you might want to get your brand colors in there by [creating a custom theme.]({{#if baseurl}}{{ baseurl }}/{{/if}}docs.html#custom-theme)

#### 

<div class="f:4 c:blue f-w:700 v-a:m t-t:u">🚲🏚 Trailblazer</div>

— I demand complete control (pro-level bikeshedder)

[See the full customization guide](http://tedconf.github.io/shed-css/customization.html)

##### Sass

##### Customize Variables:

    @import "shed-css/lib/index.scss";

    $ms-base: 1rem !default;
    $ms-ratio: $minor-third !default;

    $f-f-sans: sans-serif !default;
    $f-f-serif: serif !default;
    $f-f-mono: monospace !default;

    $f-w-min: 100 !default;
    $f-w-max: 900 !default;

    $l-h--default: 1 !default;
    $l-h--tight: $z2 !default;
    $l-h--normal: $z1 !default;
    $l-h--loose: $z4 !default;

    $l-s--default: normal !default;
    $l-s--tight: -.08em !default;
    $l-s--normal: .16em !default;
    $l-s--loose: .32em !default;

    $z-dot9: $ms-1 !default;
    $z-dot8: $ms-2 !default;
    $z-dot7: $ms-3 !default;
    $z-dot6: $ms-4 !default;
    $z-dot5: $ms-5 !default;
    $z-dot4: $ms-6 !default;
    $z-dot3: $ms-7 !default;
    $z-dot2: $ms-8 !default;
    $z-dot1: $ms-9 !default;
    $z0: 0 !default;
    $z1: $ms0 !default;
    $z2: $ms1 !default;
    $z3: $ms2 !default;
    $z4: $ms3 !default;
    $z5: $ms4 !default;
    $z6: $ms5 !default;
    $z7: $ms6 !default;
    $z8: $ms7 !default;
    $z9: $ms8 !default;
    $z10: $ms9 !default;

    // Custom Media Query Variables
    $mq-xs: '(min-width: 20em)' !default;
    $mq-sm: '(min-width: 30em)' !default;
    $mq-md: '(min-width: 37em)' !default;
    $mq-lg: '(min-width: 50em)' !default;
    $mq-xl: '(min-width: 75em)' !default;
    $mq-xxl: '(min-width: 100em)' !default;
    }

Now, you might want to get your brand colors in there by [creating a custom theme.](http://tedconf.github.io/shed-css/docs.html#custom-theme)

#### 🚲🏚 Trailblazer

— I demand complete control (pro-level bikeshedder)

[See the full customization guide](http://tedconf.github.io/shed-css/customization.html)</div>
