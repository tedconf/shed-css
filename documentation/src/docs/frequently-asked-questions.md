
## Is this valid CSS?

While it may be unusual to use some of these characters, it is not invalid. As
I understand [section 4.1.3 of the CSS 2.1 spec on characters and case](https://www.w3.org/TR/CSS21/syndata.html#characters):
>“Identifiers can also contain escaped characters and any ISO 10646 character
>as a numeric code (see next item). For instance, the identifier "B&W?" may be
>written as "B\&W\?" or "B\26 W\3F".”

## Is this a new thought?

I haven't seen classnames formatted in this way before, but many of the ideas
inside of shed.css were inspired by [tachyons](http://tachyons.io/),
[Basscss](http://www.basscss.com/), [More Meaningful
Typography](http://alistapart.com/article/more-meaningful-typography), [Forcing
Immutability in
CSS](http://csswizardry.com/2016/05/the-importance-of-important/), [Functional
Programming, CSS, and your
sanity](http://www.jon.gold/2015/07/functional-css/), [Atomic
CSS](http://acss.io/), and many conversations and bikeshedding sessions.

## What does the CSS look like?

When writing class names that have weird characters in them, they must be
escaped with a backslash (`\`). That means something like `f:10` has to be
authored (in the stylesheet) is like this:
```
.f\:10 { font-size: var(--z-10); }
```
