# Navbars

## Introduction

Use a _navbar_ when you want a horizontal navigation menu on the page.

## Markup

A _navbar_ is simply a list wrapped in a `<nav>` element:

```html
<nav class="navbar">
    <ul>
        <li><a href="link-to-page">Item 1</a></li>
        <li><a href="link-to-page">Item 2</a></li>
        <li><a href="link-to-page">Item 3</a></li>
        <li><a href="link-to-page">Item 4</a></li>
    </ul>
</nav>
```

## Default Styling

A navbar is an inline-block. The list inside it is a flexbox container.

## Default Behaviour

If the whole navbar fits on the screen, then Ishi doesn't need to do anything.

If the navbar is wider than the screen, Ishi does the following:

1. It takes the navbar items that don't fit on the screen, and moves them into a hidden dropdown box.
1. It adds a _More..._ link on the end of the navbar. Clicking this link will show and hide the rest of the navbar elements.

Ishi recalculates the navbar whenever:

1. the browser is resized, and
1. if the screen is rotated (e.g. portrait to landscape mode)

## Supported In

Where can you use this component?

Section | Supported? | How Many
--------|------------| --------
header | Yes | As many as you want
main | Yes | As many as you want
sidebar | No default styling |
footer | No default styling |
