## Goal
To eliminate distraction for developers and designers by creating a set of
options rather than encouraging [bikeshedding](https://en.wikipedia.org/w/index.php?title=Bikeshedding&redirect=no), where shed gets its name.


## Tactics
- provide predictable single-purpose classes to use as building blocks
- encourage the composition of classes to absolve developers from authoring css
  and thereby creating abstraction
- establish consistency by providing sizes for properties based on a scale

<h3 id="focus">focus</h3>

When classes serve a single purpose, the cascade becomes a non-issue. If I use
the class `bg:black`, I can count on it only doing one thing - making the
background for this element black. Future developers can also count on that.

This is the core idea that makes atomic/functional css work. Classes are
"immutable" and you can get the same output every time. They're predictable and
reliable.

<h3 id="composability">composability</h3>

Because classes have a single purpose and you can count on them, they're easier
to use together. I can easily put `bg:black c:white` and be assured that they
won't conflict. I can also add `p:1` and know that I'm not going to impact
color or background color by adding padding.

<h3 id="scale">scale</h3>

Choosing sizes has been a never-ending battle. 12px? 13.333px? 14.5px? 15px? and so on. Shed solves this problem by using a [modular scale](http://www.modularscale.com/?1&rem&1.2&web&text) to resolve these conflicts. Shed provides a root size (1rem, don't hijack the browser default) and (by default) 10 steps above and below it. These apply to font size, padding, margin, height, max-width, positioning, border-radius, etc. This removes the need to dwell on sizes and also makes it easy to combine properties in a meaningful ways. For example (_decoration added for clarity_):

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

<h3 id="media-queries">Media Queries</h3>

Shed.css is build with mobile-first responsive web design in mind. The media
queries available by default are:

- `xxs`
- `xs`
- `sm`
- `md`
- `lg`
- `xl`
- `xxl`

You can access them like this:

```html
<div
  class="
    f:1
    f:2@xxs
    f:3@xs
    f:2@sm
    f:6@md
    f:4@lg
    f:5@xl
    f:6@xxl
  "
>I change sizes based on screen resolution</div>
```

<h3 id="dryness">dryness</h3>

That's great, but I wouldn't want to combine a load of classes every time
I need a button. shed suggests solving this problem by moving all of your
design language to the template layer. The reasons are multiple:

- When you create a new UI component, you're creating an abstraction, and abstractions are hard. You represent an idea through design and interaction. When you couple this with many common approaches to CSS architecture, you can exacerbate the problem by not only reusing that abstraction in CSS, but by coupling it with additional abstractions (commonly called patterns or objects) like the media object, breadcrumbs, block-list, etc. Now you have multiple requirements on the markup that are associated with multiple abstractions. Having so many moving and dependant abstractions becomes confusing and overwhelming.

- Because a special abstraction is created for every UI component, modifying
  them often involves extending that abstraction again. Now you have your
  primary abstraction, css-only pattern abstractions, and modifier
  abstractions. And you have to name all of these!

Give shed a shot - by embracing its constraints, you can get control of your
codebase and develop faster.
