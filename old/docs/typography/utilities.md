# Utilities

## Introduction

Ishi uses SASS mixins to make it easier to keep text styles consistent. Use these in your own styles and themes to remain consistent with Ishi going forward.

## Block Text

Block text is any text element that can act as a paragraph or list.

Here's a list of the SASS mixins for block text:

Name | Purpose
-----|--------
`util-block-text-standout()` | Extra decoration to make the block standout from normal paragraphs (e.g `<blockquote>`)

## Inline Text

Inline text is any text element that can appear inside a paragraph.

Here's a list of the SASS mixins for inline text:

Name | Purpose
-----|--------
`util-inline-text-pad()` | Padding to increase readability of styles that have a solid background color (e.g. `<code>`)
`util-inline-text-radius()` | Subtle border radius to increase visual appeal of styles that have a solid background color (e.g. `<code>`)

## All Text

These SASS mixins work on both block text and on inline text:

Name | Purpose
-----|--------
`util-text-bolder()` | Increase the font weight.
`util-text-caps()` | Text will display in ALL CAPS.
`util-text-smallcaps()` | Text will display in small capital letters.