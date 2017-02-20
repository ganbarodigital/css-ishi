# Table Of Contents

## Introduction

Use the _table of contents_ component to provide a table of contents anywhere on your page.

## Markup

The _table of contents_ component is an empty `<nav>` element:

```html
<nav class="toc" data-type="ishi-toc" data-max-depth="3">
</nav>
```

where:

* `class="toc"` is used for CSS styling
* `data-type="ishi-toc"` tells Ishi's JavaScript to populate this `<nav>` element with a table of contents
* `data-max-depth="3"` tells Ishi's JavaScript which level of headings to include

The results look like this:

<nav class="toc" data-type="ishi-toc" data-max-depth="3">
</nav>

## Default Behaviour

On page load, the page's headings are scanned, and a table of contents added to each _table of contents_ component on the page.

The _table of contents_ component looks for `<h1>` to `<h6>` headings in the following sections in the following order:

1. `<main>` `<article>`
1. `<main>`

Whichever section is found first, that's the section that is used. This allows you to use HTML headings elsewhere on the page without them appearing in the table of contents.

Your headings must have `id` attributes. Headings without `id` attribtues are not added to the table of contents.

## Supported In

Where can you use this component?

Section | Supported? | How Many
--------|------------| --------
header | No default styling |
main | Yes | As many as you want
sidebar | Yes | As many as you want
footer | No default styling |
