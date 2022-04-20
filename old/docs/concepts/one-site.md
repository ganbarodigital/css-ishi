{% import "ishi.twig" as ishi %}
# Many Devices, One Site

## Introduction

A single CSS file built from Ishi supports all the different devices where a browser can run.

* When you build a site using Ishi, you don't need one site for mobile, and a separate site for desktop / laptop.
* You don't need both `http://www.example.com` and a separate `http://m.example.com`.

You can have a single `http://www.example.com` site, and Ishi's CSS and JavaScript will adapt to whatever device is being used.

We call this __many devices, one site__.

## Single Content

Your website sends the same HTML to every type of device.

<aside class="callout attention" markdown="1">
There's no server-side browser detection at all. You don't look at the `User-Agent:` header to influence the HTML you send back. You send the same content to each and every device.
</aside>

This approach is very pragmatic for content-oriented websites. It's especially suited to static sites built using tools such as {{ ishi.externallink('jekyll') }} or {{ ishi.externallink('sculpin') }}.

## Everything Is Responsive Via CSS

Your CSS file uses media queries to style and reflow the page for the device that is being used.

<aside class="callout attention" markdown="1">
There are no CSS classes that say "this is a 12 column grid on desktop, but only 3 columns on a smartphone". Your HTML markup is semantic, the CSS classes are semantic, and you use media queries to change the presentation.
</aside>

A CSS file built from Ishi contains different styling for several different [device groups](device-groups.html). Our media queries automatically adapt the presentation to the device being used.

## JavaScript Fills In The Gaps

Sometimes, JavaScript is the most reliable way to adapt a component for display.

<aside class="callout attention" markdown="1">
You use CSS classes and `data-*` attributes to semantically describe your content. JavaScript automatically rewrites these components when the page first loads, and hooks into the minimum set of events necessary to rewrite them again if anything changes.
</aside>

These "active" components are small, and self-contained. They generate semantic markup, and use the same semantic CSS classes that "passive" components do.

## Motivation

{{ ishi.externallink('ganbarodigital') }} is a small company. Technically, we're currently classed as a micro-business. We don't have enough people to build different versions of a website for different devices.

You could say that we have no choice: for each website we build, we can only afford to build one version, so it _has_ to work on every device that we want to support.

Is that such a bad thing? We'd argue that it is actually a good thing.

* How often is it that your first visit to a new website is on your smartphone or tablet?
* How often are "mobile" sites actually readable on your smartphone, or usable at all?
* How often do "mobile" sites present a cut-down version of the "desktop" site, forcing you to switch to a desktop / laptop to get things done?
* When you run into one of these kind of "mobile" sites, how likely are you to continue using it?

We believe that a single site can be a positive experience on all types of devices, and Ishi is built to help us - and you - achieve that.
