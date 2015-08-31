---
layout: components
title: Pageflow Navigation
pageflow_name: pageflow-navigation
---

# Pageflow Navigation

## Introduction

Use the _pageflow_ component to provide _Previous_ and _Next_ links on a page.

## Markup

The _pageflow_ component is a short list wrapped in a `<nav>` element:

{% highlight html %}
<nav class="pageflow">
    <ul>
        <li><a href="link-to-previous-page">Item 1</a></li>
        <li><a href="link-to-next-page">Item 2</a></li>
    </ul>
</nav>
{% endhighlight %}

## Default Behaviour

Ishi uses JavaScript to make sure that all the HTML links in the _pageflow_ component are the same vertical height.

You have to provide the words _Previous_ and _Next_ to suit. Ishi does not inject any content into any of the links.

## Supported In

Where can you use this component?

Section | Supported? | How Many
--------|------------| --------
header | No | n/a
main | Yes | As many as you want
sidebar | No default styling |
footer | No default styling |