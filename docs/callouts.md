---
layout: components
title: Callouts
pageflow_name: callouts
---

# Callouts

## Introduction

### What Are Callouts For?

Use [panels](panels.html) and [callouts](callouts.html) when you need to draw the reader's attention to some text or an image.

* Panels are rounded boxes.
* Callouts are square boxes.

Otherwise, they support the exact same markup in all cases.

## A Basic Callout

To get a basic callout, wrap your content in a `<div>` or `<aside>` with the `callout` class.

<aside class="callout" markdown="1">
This is a basic callout.
</aside>

By default, it gets the same background as the [<pre>](pre.html) element does.

Internally, a basic panel has padding to ensure that all the elements inside have a pleasing amount of space between themselves and the border of the callout.

## Callouts With Different Backgrounds

Ishi offers several alternative styles of callout.

### An Outline Callout

To create an outline callout, wrap your content in a `<div>` or `<aside>` with the `callout outline` classes.

<div class="callout outline" markdown="1">
This is an outline callout.

Notice how there's no background anymore, only the highlighting border?
</div>

### A Gradient Callout

To create a callout with a gradient background, wrap your content in a `<div>` with the `callout gradient` classes.

<div class="callout gradient" markdown="1">
This is a callout with a subtle gradient background.

This is best used on smaller callouts.
</div>

### A Standout Callout

To create a panel that seems to standout above the rest of the page, wrap your content in a `<div>` with the `callout standout` classes.

<div class="callout standout" markdown="1">
This is a callout with a subtle drop-shadow effect to lift the callout off the page slightly.

It was originally designed for a real-time data dashboard.
</div>

### A Sunken Panel

To create a callout that seems to be sunk into the page, wrap your content in a `<div>` with the `callout sunken` classes.

<div class="callout sunken" markdown="1">
This is a callout with a subtle drop-shadown effect to sink it slightly into the page.
</div>

### Combining Backgrounds

You can combine any two of the `outline` and `gradient` classes with the `standout` or `sunken` classes.

<div class="callout standout outline" markdown="1">
This is an outline callout that also stands out a little bit.
</div>

<div class="callout sunken outline" markdown="1">
This is an outline callout that also sinks in a little bit.
</div>

<div class="callout standout gradient" markdown="1">
This is a gradient callout that also stands out a little bit.
</div>

<div class="callout sunken gradient" markdown="1">
This is a gradient callout that also sinks in a little bit.
</div>

### Adding Extra Context

Add any one of the [context classes](context-classes.html) to your `callout` `<aside>` to change the colour of the callout's border and default background. All heading elements (`h1` to `h6`) will change colour too.

<aside class="callout attention" markdown="1">
#### Attention!

This is a callout using the `attention` class. You might find this more pleasing than the grey of the default `callout`.
</aside>

<aside class="callout info" markdown="1">
#### Information!

This is a callout using the `info` class.
</aside>

<aside class="callout success" markdown="1">
#### Success!

This is a callout using the `success` class.
</aside>

<aside class="callout warning" markdown="1">
#### Warning!

This is a callout using the `warning` class.
</aside>

<aside class="callout danger" markdown="1">
#### Danger!

This is a callout using the `danger` class.
</aside>

## Callouts That Alert

To create a callout with distinctive header box, use an `<aside>` with the `callout alert` classes. Inside, use a `<h4>`, `<h5>` or `<h6>` to create the header. Wrap your callout's content in a `<div>` with the `content` class.

<aside class="callout alert" markdown="1">
#### Attention!

<div class="content" markdown="1">
This is a callout designed to draw your attention.
</div>
</aside>

### Adding Extra Context

Add any one of the [context classes](context-classes.html) to your `callout alert` `<aside>` to change the colour of the callout's border and heading.

<aside class="callout alert info" markdown="1">
#### Information!

<div class="content" markdown="1">
This is a callout using the `info` class.
</div>
</aside>

<aside class="callout alert success" markdown="1">
#### Success!

<div class="content" markdown="1">
This is a callout using the `success` class.
</div>
</aside>

<aside class="callout alert warning" markdown="1">
#### Warning!

<div class="content" markdown="1">
This is a callout using the `warning` class.
</div>
</aside>

<aside class="callout alert danger" markdown="1">
#### Danger!

<div class="content" markdown="1">
This is a callout using the `danger` class.
</div>
</aside>