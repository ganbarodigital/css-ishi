{% import "ishi.twig" as ishi %}
# Components

## Introduction

<p class="p--leader">Components (or microformats - take your pick) are non-standard HTML markup that can really make your content standout. They're reusable structures that you can quickly use in your content or site templates.</p>

Wherever possible, the markup used is semantic. To make that possible, some of these components are powered behind the scenes by JavaScript. [Follow these instructions if you use any of these components](javascript.html).

## Content Components

* There are [callouts](callouts.html) and [panels](panels.html) to draw attention to a point that you want to get across.
* Want to entice the reader to click a link to get started? Use a [call to action](callstoaction.html).

## Navigation Components

* [Anchors for headings](anchors-for-headings.html) are icons that appear after your content's headings, so that users can link to specific sections or sub-sections of your content.
* [Navbars](navbars.html) are horizontal menus that you can put anywhere on your page.
* Want previous / next buttons on your page, just like there are at the top and bottom of this page? Use a [pageflow nav section](pageflow-navigation.html).
* Need a [table of contents](toc.html)? Ishi can generate one for you.

{{ ishi.content('flow') }}
