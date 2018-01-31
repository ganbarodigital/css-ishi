# Naming Convention

## Variables

## CSS Classes

CSS class names are built from:

* what component | element it applies to
* its purpose | context
* detail | scope

Here are some examples:

CSS class | applies | context | detail
----------|---------|---------|-------
`.table-border-block` | table | border | block

### Background

Originally, we started with CSS class names such as `.attention` and `.alert`. No prefix, no suffix. And that worked without any issues for quite a while.

However, as Ishi grew in size, we started to have problems making these classes do the right thing when applied to different elements and components. We learned the hard way that, sometimes, there just isn't a single CSS definition that works well for all elements.

## SCSS Mixins