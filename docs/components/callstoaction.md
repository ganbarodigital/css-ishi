---
layout: components
title: Calls To Action
pageflow_name: callstoaction
---

# Calls To Action

## Introduction

### What Are Calls To Action For?

Use a call to action when you want to encourage the reader to do something.

## A Basic Call To Action

A basic call to action is an `<a>` link with the `calltoaction` class:

<a class="calltoaction" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

By default:

* we render it as a button with a bold appearance
* the text inside will not wrap, so keep it short and sweet!

## Calls To Action With Different Backgrounds

Ishi offers several different styles of call to action.

### An Outline Call To Action

To create a call to action with just an outline, wrap your link in an `<a>` with the `calltoaction outline` classes.

<a class="calltoaction outline" href="{% include pageurl.html name='getting-started' %}">Get started with Ishi now!</a>

### A Gradient Call To Action

To create a call to action with a gradient background, wrap your link in an `<a>` with the `calltoaction gradient` classes.

<a class="calltoaction gradient" href="{% include pageurl.html name='getting-started' %}">Get started with Ishi now!</a>

### A Standout Call To Action

To create a call to action that seems to standout above the rest of the page, wrap your link in an `<a>` with the `calltoaction standout` classes.

<a class="calltoaction standout" href="{% include pageurl.html name='getting-started' %}">Get started with Ishi now!</a>

### A Sunken Call To Action

To create a call to action that seems to be sunk into the page, wrap your link in an `<a>` with the `calltoaction sunken` classes.

<a class="calltoaction sunken" href="{% include pageurl.html name='getting-started' %}">Get started with Ishi now!</a>

### Combining Backgrounds

You can combine any two of the `outline` and `gradient` classes with the `standout` or `sunken` classes.

<a class="calltoaction outline standout" href="{% include pageurl.html name='getting-started' %}">Get started with Ishi now!</a>

<a class="calltoaction outline sunken" href="{% include pageurl.html name='getting-started' %}">Get started with Ishi now!</a>

<a class="calltoaction gradient standout" href="{% include pageurl.html name='getting-started' %}">Get started with Ishi now!</a>

<a class="calltoaction gradient sunken" href="{% include pageurl.html name='getting-started' %}">Get started with Ishi now!</a>

### Adding Extra Context

Add any one of the [context classes]({% include pageurl.html name='context-classes' %}) to your `calltoaction` `<a>` to change the colour of the call to action's border and default background.

<a class="calltoaction attention" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction info" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction success" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction warning" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction danger" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

### Combining Context And Backgrounds

You can combine the `outline`, `standout` or `sunken` classes with any of the context classes:

<a class="calltoaction attention outline" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction attention outline standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction attention outline sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction attention standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction attention sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction info outline" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction info outline standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction info outline sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction info standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction info sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction success outline" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction success outline standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction success outline sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction success standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction success sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction warning outline" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction warning outline standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction warning outline sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction warning standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction warning sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction danger outline" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction danger outline standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction danger outline sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction danger standout" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

<a class="calltoaction danger sunken" href="{% include pageurl.html name='getting-started' %}">Get Started With Ishi Today!</a>

## Calls To Action That Alert

Calls to action are not designed to be used for larger content. Other components, such as [callouts]({% include pageurl.html name='callouts' %}) and [panels]({% include pageurl.html name='panels' %}) are available for that purpose.