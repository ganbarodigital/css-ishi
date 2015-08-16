---
layout: concepts
title: Ishi's Internal Structure
pageflow_name: sass-structure
---

# Ishi's Internal Structure

## Introduction

Ishi's `.scss` files are split across two groups of folders.

* The first group of folders (in the `src/ishi/` folder) provide a Sass toolkit for defining themes, along with any supporting JavaScript code that is needed.
* The second group of folders (in the `src/themes/` folder) provide examples of how to use Ishi to build complete themes for your website or web-based application.

See [our page on themes](themes.html) for details on how to define your own theme, including how to include the files in the `src/ishi/` folder.

## Flow

Here's a full list of Ishi's folders, in the order that they are included:

1. 00-base: reset files, default variables and misc mixins
1. 10-typography: per-group text styles
1. 20-components: per-group microformats
1. 30-utilities: per-group helper styles
1. 40-structure: per-group default styling of content areas
1. 50-layouts: per-group layouts for content areas

The idea is to provide a layered approach, with the earlier layers (`00-base` to `40-structure`) providing the tools and default styles that a theme needs, and then the later layers (`50-layouts` and your theme) providing the per-website / per-web-application customisation.

## Base

### Purpose

`00-base` is the home for the parts of the Ishi toolkit that are generic:

* that aren't device-group specific, and
* that don't naturally fit into any of other sections of the toolkit

### Responsibilities

`00-base` is responsible for:

* user-agent stylesheet normalisation and reset
* default values for Ishi variables
* mixins that don't fit into any of the other sections

## Typography

### Purpose

`10-typography` is the home for all things content-related.

### Responsibilities

`10-typography` is responsible for:

* font sizes
* vertical whitespace between content markup
* styling any content-related markup

`10-typography` depends on the theme to provide:

* colours

`10-typography` is not responsible for:

* microformats - they belong in Components
* alignment / positioning - they belong in Layouts and your theme

## Components

### Purpose

`20-components` is the home for microformats - support for markup that works when used as a group.

### Responsibilities

`20-components` is responsible for:

* defining and styling all supported microformats

`20-components` depends on:

* the theme to define the colours used
* `10-typography` to define per-group font styles and vertical whitespace

`20-components` is not responsible for:

* alignment / positioning - they belong in Layouts and your theme

## Utilities

### Purpose

`30-utilities` is the home for helper classes and mixins - support for markup that isn't semantic.

### Responsibilities

`30-utilities` isn't responsible for:

* applying styles - that belongs in your theme

## Structure

### Purpose

`40-structure` is the home for default styles that are applied to our main [semantic structures](structure.html). The intention is to have a light touch here.

### Responsibilities

`40-structure` relies on:

* `10-typography` for font styles and vertical whitespace sizes

## Layouts

### Purpose

`50-layouts` provides a choice of common website layouts for you to pick from.

<div class="callout warning" markdown="1">
#### Multiple CSS Files May Be Needed

At the moment, you can only include one layout in each compiled CSS file. Each layout is applied directly to the [semantic markup](structure.html) of your HTML. They don't provide classes for you to manually include in your HTML.

If your website needs different themes for the home page and for article pages, you will need to create two separate theme files, and include two different CSS files in your HTML pages.
</div>

### Responsibilities

`50-layouts` is responsible for:

* defining per-group flexbox-based layout

`50-layouts` is not responsible for:

* defining any colors at all