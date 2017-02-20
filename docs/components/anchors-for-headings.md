# Anchors For Headings

## Introduction

Use the _anchors for headings_ component to add anchor icons to the end of your `<h2>` and `<h3>` headings. Your users can then right-click on these icons to make a clickable link that goes directly to that heading or sub-heading.

## Markup

This component is activated by adding the `data-ishi-anchors` attribute to your `<body>` element:

```html
<body data-ishi-anchors="1">
    <!-- content goes here -->
</body>
```

## Default Behaviour

When a page loads, Ishi's JavaScript looks to see if the page's `<body>` element has the `data-ishi-anchors` attribute.  If it doesn't, this component is not activated.

The component finds all the `<h2>` and `<h3>` elements that had an `id` attribute, and adds an anchor icon to the end of each of them.

## Supported In

Where can you use this component?

Section | Supported?
--------|-----------
header | No
main | Yes
sidebar | No
footer | No
