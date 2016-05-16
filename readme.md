# Funco :: type

## Functional CSS Type Utility

### setup

`@import "lib/{size|weight|letter-spacing|leading}/{short|long}"`

```css
:root {
	--funco-type-size---5: .125rem;
	--funco-type-size---4: .25rem;
	--funco-type-size---3: .333rem;
	--funco-type-size---2: .5rem;
	--funco-type-size---2: .666rem;
	--funco-type-size---1: .8rem;
	--funco-type-size--0: 1rem;
	--funco-type-size--1: 1.125rem;
	--funco-type-size--2: 1.25rem;
	--funco-type-size--3: 1.5rem;
	--funco-type-size--4: 1.75rem;
	--funco-type-size--5: 2rem;
	--funco-type-size--6: 3rem;
	--funco-type-size--7: 4rem;
	--funco-type-size--8: 5rem;
	--funco-type-size--9: 6rem;
	--funco-type-size--10: 7rem;
	--funco-type-letter-spacing--tight: 7rem;
	--funco-type-letter-spacing--normal: 7rem;
	--funco-type-letter-spacing--loose: 7rem;
	--funco-type-leading--title: 1.25;
	--funco-type-leading--copy: 1.55;
	--funco-type-leading--normal: 1;
	--funco-type-weight--light: light;
	--funco-type-weight--normal: normal;
	--funco-type-weight--bold: bold;
}

@custom-media --mq-xs (min-width: 20em);
@custom-media --mq-sm (min-width: 30em);
@custom-media --mq-md (min-width: 37em);
@custom-media --mq-lg (min-width: 43em);
@custom-media --mq-xl (min-width: 50em);
```
