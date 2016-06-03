## Goal
To eliminate distraction for developers and designers by creating a set of
options rather than encouraging [bikeshedding](https://en.wikipedia.org/w/index.php?title=Bikeshedding&redirect=no), where shed gets its name.


## Tactics
- provide predictable single-purpose classes to use as building blocks
- encourage the composition of classes to absolve developers from authoring css
	and thereby creating abstraction
- establish consistency by providing sizes for properties based on a scale

### Focus

When classes serve a single purpose, the cascade becomes a non-issue. If I use
the class `bg:black`, I can count on it only doing one thing - making the
backgorund for this element black. Future developers can also count on that.

This is the core idea that makes atomic/functional css work. Classes are
"immutable" and you can get the same output every time. They're predictable and
reliable.

### Composability

Because classes have a single purpose and you can count on them, they're easier
to use together. I can easily put `bg:black c:white` and be assured that they
won't conflict. I can also add `p:1` and know that I'm not going to impact
color or background color by adding padding.

### Scale

Choosing sizes has been a never-ending battle. 12px? 13.333px? 14.5px? 15px? and so on. Shed solves this problem by using a [modular scale](http://www.modularscale.com/?1&rem&1.2&web&text) to resolve these conflicts. Shed provides a root size (1rem, don't hijack the browser default) and 10 steps above and below it. These apply to font size, padding, margin, height, max-width, positioning, border-radius, etc. This removes the need to dwell on sizes and also makes it easy to combine properties in a meaningful ways. For example (_decoration added for clarity_):

<div class="pos:r h:10 bg:blue.5 m-y:4">
	<div
		class="
			pos:a
			c:white
			bg:blue
			p:.5
			t-t:u
			top:-.5
			left:-.5
			right:.5
		"
	>
		I should be aligned w/ my parent, but my background outside of it on the
		top and left, and inside on the right.
	</div>
</div>

```html
<div class="pos:r">
  <div
    class="
      pos:a
      p:.5
      top:-.5
      left:-.5
    "
  >
    I should be aligned w/ my parent, but my background outside of it on the top and left.
  </div>
</div>
```

### DRYness

That's great, but I wouldn't want to combine a load of classes every time
I need a button. shed suggests solving this problem by moving all of your
design language to the template layer. The reasons are multiple:

- When you create a new UI component, you're creating an abstraction, and abstractions are hard. You represent an idea through design and interaction. When you couple this with many common approaches to CSS architecture, you can exacerbate the problem by no only reusing that abstraction in CSS, but by coupling it with additional abstractions (commonly called patterns or objects) like the media object, breadcrumbs, block-list, etc. Now you have multiple requirements on the markup that are associated with multiple abstractions. Having so many moving and dependant abstractions becomes confusing and overwhelming.

- Because a special abstraction is created for every UI component, modifying
	them often involves extending that abstraction again. Now you have your
	primary abstraction, css-only pattern abstractions, and modifier
	abstractions. And you have to name all of these!


How does it actually work? Let's start with a simple example:

<div>
  <button
    class="
      d:i-b
      f-w:500
      p-x:3
      p-y:.7
      b-r:.4
      f:2
      c:white
      bg:blue
      t-t:u
      hover/bg:blue.9
    "
  >
  Log In
  </button>
</div>

```html
<button
  class="
    d:i-b
    f-w:700
    p-x:3
    p-y:.7
    b-r:.4
    f:2
    c:white
    bg:blue
    t-t:u
    hover/bg:blue.9
  "
>
  Log In
</button>
```

#### The Classes
While this can be overwhelming at first glance, there is a simple set of rules
at play. Let's break down this button into it's pieces:
- `d:i-b`: this is simply `display: inline-block`. There are [utilities for each
  display type](layout.html#00-display).
- `f-w:700`: this equates to `font-weight: 700`. [Font weights are available
  from 100 - 900](type.html#01-font-weight). Number values [map to named
  values](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values),
  so this is "bold".
- `p-x:3` equates to `padding-left: var(--z3); padding-right: var(--z3);`. “x”
  is used to specify both, like the the css property `overflow-x`.
- `p-y:.7` equates to `padding-top: var(--z-dot7); padding-bottom: var(--z-dot7)`. The ".7" means it's 3 steps down from the root on the scale, whereas a plain old "7" means it's seven steps up!
- `b-r:.4` means `border-radius: var(--z-dot4)`.
- `f:2`: Since one of the most common things you'll do with fonts is change
  their size, `f` does just that. This class sets `font-size: var(--z2)`.
- `c:white`: you should be able to guess this one. It was generated from our
  [theme](docs.html#custom-theme). It sets `color: var(--white)`.
- `bg:blue` similarly sets `background-color: var(--blue)`.
- `t-t:u`: Staying with our pattern of mapping to css properties, this sets
  `text-transform: uppercase;`.
- `hover/bg:blue.9`: While shed tries to remain entirely stateless, there are
  some actions in css that can't be avoided. We handle them with the
  `<action>/class` syntax, currently only color and background color are
  supported on hover.

Once you get moving, these shorthands should feel natural.
