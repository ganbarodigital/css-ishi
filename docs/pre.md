---
layout: page
title: Preformatted &amp; Code
---

# Preformatted & Code

## Introduction

You can use several standard HTML5 elements to tell the user what to type into their Terminal or their IDE of choice.

* `<kbd>` for individual keyboard sequences
* `<code>` for inline code to type, or to refer to filenames or commands
* `<samp>` to show expected output, inline inside a paragraph
* `<pre>` for larger blocks of input

## Keyboard Input

Use the HTML5 `<kbd>` element whenever you want the user to press one or more keys: <kbd>kbd</kbd> is sized to sensibly fit inside a long paragraph of text like this one, even on smaller devices with limited screen space.

* <kbd>CTRL + 5</kbd>

## Inline Code

Use `<code>` inside a paragraph when you need to wrap a filename, function name, and so on. `<code>` is sized to sensibly fit inside a long paragraph of text like this one.

* The function `exit()` should never be used in a PHP application.

## Inline Software Output

Use the `<samp>` block whenever you have output to show.

* If you run the `echo $HOME` command, the output is <samp>/Users/stuart</samp>.

In practice, `<samp>` is rarely used.

## A Basic <pre> Block

Use a basic `<pre>` block whenever you have input and/or output to show.

    This is a basic <pre> block.

`<pre>` blocks get the same background as the basic panel does.
