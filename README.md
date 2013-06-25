# mq-class

Add and remove classes from elements using media queries in the DOM. Sometimes having
media queries within the CSS itself isn't what you need when you're trying to be
modular. This is due to the lack of element queries.

For example, a ribbon component may be 900px wide on one page and 500px on another page,
whenever the window on less wide than the ribbon, it should become flat. To do this with
CSS alone you would need multiple modifiers that apply media queries for different pages.

All you really want to do is apply the same modifier at different breakpoints depending on the context.

## API

    mediaClasses(els, options);

`els` is optional and will default to querying for elements matching `[data-mq-class]`. `options` is also optional.

## HTML

Add attributes to an element to trigger adding and removing classes using media queries

```
<div data-mq-class="foo > (max-width: 900px)">
```

The `>` character is used to separate the selectors and query.

If the media query matches, it `.foo` will be added, otherwise `.foo` will be removed.
You can do multiple classes at one:

```
<div data-mq-class="foo bar baz > (max-width: 900px)">
```

And you can do multiple queries:

```
<div data-mq-class="wide > (min-width: 900px), narrow > (max-width: 899px)">
```

And use complex queries:

```
<div data-mq-class="wide > (min-width: 900px) and (max-width: 1200px)">
```

## Options

  * `attr` The attribute to pull the query from. Defaults to `data-mq-class`