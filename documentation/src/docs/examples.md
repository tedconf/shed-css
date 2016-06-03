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

### Responsive Web Design

What about RWD? shed was build with a mobile-first approach in mind.

<div class="c:white bg:black bg:blue@sm bg:blue.5@md">
	black, then blue at small, then blue.5 at md
</div>
