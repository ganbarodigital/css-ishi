{% import "ishi.twig" as ishi %}
# JavaScript for Components

## Introduction

Ishi uses small amounts of JavaScript for some of its components.

This JavaScript is used to do things that either we can't do in CSS alone, or that currently do not work in pure CSS across every modern browser. It is discrete, well-contained, and (to the best of our frontend ability) respects your battery life.

Rather than use JQuery as a portability layer between Ishi's JavaScript and the browser, we use {{ ishi.externallink('laroux') }} and target modern browsers exclusively.

## Installing JavaScript

Add these lines to the end of your content's `<body>` section:

```html
<html>
    <head>...</head>
    <body>
        <!-- content goes here -->
        <script src="laroux.js"></script>
        <script src="ishi.js"></script>
    </body>
</html>
```

## Why Laroux.js?

We chose {{ ishi.externallink('laroux') }} because:

* it's a very small download - important for people reading via mobile networks
* it's very fast - important for battery life on smart phones, tablets and even laptops
* it doesn't hide the DOM from you - you write JavaScript to work directly with the DOM, which we found very easy to learn how to do

## Using Ishi's JavaScript

Make sure that any Ishi components you use are correctly marked up. Load the Ishi JavaScript module as shown above. That's it.

* When Ishi's JavaScript module loads, it automatically finds the Ishi components that you have used, and finishes initialising those components.
* It will automatically install any event handlers that are needed (such as when a page is resized, or the orientation changed from portrait to landscape and back again).
