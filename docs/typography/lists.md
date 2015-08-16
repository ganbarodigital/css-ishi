---
layout: typography
title: Lists
pageflow_name: lists
---

# Lists

## Introduction

There isn't much to say about lists. Ishi provides very straight-forward styling for both bullet-point lists (unordered lists) and indexed lists (ordered lists).

## Unordered Lists

Use the `<ul>` element to create an unordered list. These lists have a round bullet point.

### No Nesting

Here is an example of an unordered list:

* first list item
* second list item
* third list item

### Nested List

Here is an example of a nested list:

* first list item
  * first nested item
  * second nested item
    * first really nested item
    * second really nested item
* second list item

## Ordered Lists

Use the `<ol>` element to create an ordered list. These lists are numbered, starting from 1. Sub-lists are indexed alphabetically, starting from 'a'. Sub-sub-lists are indexed using roman numerals, starting from 'i'.

### No Nesting

Here is an example of an ordered list:

1. first list item
1. second list item
1. third list item

### Nested List

Here is an example of a nested list:

1. first list item
   1. first nested item
   1. second nested item
      1. first really nested item
      1. second really nested item
1. second list item

### Very Long Ordered Lists

Although we don't recommend it, you can have lists that contain hundreds of items if you need to. You'll find an example on [a separate page]({% include pageurl.html name="long-list" %}).