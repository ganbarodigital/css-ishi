---
layout: components
title: Navbars
pageflow_name: navbars
---

# Navbars

## Introduction

Use a _navbar_ when you want a horizontal navigation menu on the page.

You can have as many _navbars_ on the page as you need. Each one can be styled separately.

## Markup

A _navbar_ is simply a list wrapped in a `<nav>` element:

{% highlight html %}
<nav class="navbar">
    <ul>
        <li><a href="link-to-page">Item 1</a></li>
        <li><a href="link-to-page">Item 2</a></li>
        <li><a href="link-to-page">Item 3</a></li>
        <li><a href="link-to-page">Item 4</a></li>
    </ul>
</nav>
{% endhighlight %}

## Default Behaviour

If the whole navbar fits on the screen, then Ishi doesn't need to do anything.

If the navbar is wider than the screen, Ishi does the following:

1. It takes the navbar items that don't fit on the screen, and moves them into a hidden dropdown box.
1. It adds a _More..._ link on the end of the navbar. Clicking this link will show and hide the rest of the navbar elements.

Ishi recalculates the navbar whenever:

1. the browser is resized, and
1. if the screen is rotated (e.g. portrait to landscape mode)
