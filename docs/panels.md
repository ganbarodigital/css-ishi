---
layout: components
title: Panels
---

# Panels

## Introduction

### What Are Panels For?

Use [panels](panels.html) and [callouts](callouts.html) when you need to draw the reader's attention to some text or an image.

* Panels are rounded boxes.
* Callouts are square boxes.

Otherwise, they support the exact same markup in all cases.

## A Basic Panel

To get a basic panel, wrap your content in a `<div>` or `<aside>` with the `panel` class.

<aside class="panel" markdown="1">
This is a basic panel.
</aside>

By default, it gets the same background as the [<pre>](pre.html) element does.

Internally, a basic panel has padding to ensure that all the elements inside have a pleasing amount of space between themselves and the border of the panel.

## Panels With Different Backgrounds

Ishi offers several alternative styles of panel.

### An Outline Panel

To create an outline panel, wrap your content in a `<div>` or `<aside>` with the `panel outline` classes.

<div class="panel outline" markdown="1">
This is an outline panel.

Notice how there's no background anymore, only the surrounding border?
</div>

### A Gradient Panel

To create a panel with a gradient background, wrap your content in a `<div>` with the `panel gradient` classes.

<div class="panel gradient" markdown="1">
This is a panel with a subtle gradient background.

This is best used on smaller panels.
</div>

### A Standout Panel

To create a panel that seems to standout above the rest of the page, wrap your content in a `<div>` with the `panel standout` classes.

<div class="panel standout" markdown="1">
This is a panel with a subtle drop-shadow effect to lift the panel off the page slightly.

It was originally designed for a real-time data dashboard.
</div>

### A Sunken Panel

To create a panel that seems to be sunk into the page, wrap your content in a `<div>` with the `panel sunken` classes.

<div class="panel sunken" markdown="1">
This is a panel with a subtle drop-shadown effect to sink it slightly into the page.
</div>

### Combining Backgrounds

You can combine any two of the `outline` and `gradient` classes with the `standout` or `sunken` classes.

<div class="panel standout outline" markdown="1">
This is an outline panel that also stands out a little bit.
</div>

<div class="panel sunken outline" markdown="1">
This is an outline panel that also sinks in a little bit.
</div>

<div class="panel standout gradient" markdown="1">
This is a gradient panel that also stands out a little bit.
</div>

<div class="panel sunken gradient" markdown="1">
This is a gradient panel that also sinks in a little bit.
</div>

### Adding Extra Context

Add any one of the [context classes](context-classes.html) to your `panel` `<aside>` to change the colour of the panel's border and default background. All heading elements (`h1` to `h6`) will change colour too.

<aside class="panel info" markdown="1">
#### Information!

This is a panel using the `info` class.
</aside>

<aside class="panel success" markdown="1">
#### Success!

This is a panel using the `success` class.
</aside>

<aside class="panel warning" markdown="1">
#### Warning!

This is a panel using the `warning` class.
</aside>

<aside class="panel danger" markdown="1">
#### Danger!

This is a panel using the `danger` class.
</aside>

## Panels That Alert

To create a panel with distinctive header box, use an `<aside>` with the `panel alert` classes. Inside, use a `<h4>`, `<h5>` or `<h6>` to create the header. Wrap your panel's content in a `<div>` with the `content` class.

<aside class="panel alert" markdown="1">
#### Attention!

<div class="content" markdown="1">
This is a panel designed to draw your attention.
</div>
</aside>

### Adding Extra Context

Add any one of the [context classes](context-classes.html) to your `panel alert` `<aside>` to change the colour of the panel's border and heading.

<aside class="panel alert info" markdown="1">
#### Information!

<div class="content" markdown="1">
This is a panel using the `info` class.
</div>
</aside>

<aside class="panel alert success" markdown="1">
#### Success!

<div class="content" markdown="1">
This is a panel using the `success` class.
</div>
</aside>

<aside class="panel alert warning" markdown="1">
#### Warning!

<div class="content" markdown="1">
This is a panel using the `warning` class.
</div>
</aside>

<aside class="panel alert danger" markdown="1">
#### Danger!

<div class="content" markdown="1">
This is a panel using the `danger` class.
</div>
</aside>