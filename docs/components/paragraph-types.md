# Paragraph Types

## Introduction

Add one of these CSS classes to your content to describe what the paragraph is.

You'll need to define these CSS classes in your theme - Ishi does not provide a default style for any of them. There is a list of Sass mixins that you can use to save a lot of effort.

## Styles

Your theme should define these CSS classes using the mixins below.

CSS Class | Usage
----------|--------
leader | Apply to the first paragraph of a section when you want it to be emphasised. Works best when there are several paragraphs together in a section.

<div class="callout info" markdown="1">
#### Why Doesn't Ishi Define These Classes?

A `leader` class (for example) is a semantic class. It describes what the paragraph is. It is up to each theme to decide how each `leader` class should look.

If Ishi provided a default `leader` class, there's no straight-forward way for a theme to throw away those defaults and replace them with its own preferences. The theme would have to override every single CSS property that Ishi set on its default `leader` class. And the theme would need updating every time Ishi added new CSS proprties to its default `leader` class.

It's much less effort in the long run to leave it up to each theme to define how each of these paragraph styles should look. Ishi provides a list of Sass mixins (see below) to make it as easy as possible to do.
</div>

## Mixins

Use one or more of these mixins to quickly define the CSS for the paragraph styles listed in the table above.

Mixin | Effect
------|-------
component-p-bolder() | Makes the paragraph use a bold weight
component-p-caps() | Capitalises all the text in the paragraph

For example:

```scss
p.leader {
    @include component-p-bolder();
}
```

## Examples

<p class="leader-bolder" markdown="1">This is an example of a paragraph where the `component-p-bolder()` mixin has been applied to the style.</p>

<p class="leader-caps" markdown="1">And this paragraph is all in caps because the `component-p-caps()` mixin has been applied to its style.</p>

<p class="leader-bolder-caps" markdown="1">And this paragraph is about as shouty as you can get, because its CSS class uses both the `component-p-bolder()` and the `component-p-caps()` mixins!</p>

<div class="callout danger" markdown="1">
#### Do Not Copy The CSS Class Names Used In These Examples

<div class="content" markdown="1">
If you're using your browser's dev tools to look at how the examples work, you might have noticed that the example paragraphs use CSS classes like `leader-bolder` and `leader-caps` and so on.

These are CSS classes that we have created <strong>only</strong> to demonstrate what can be done with these mixins. If you dig through the CSS, you'll see that they're not defined in the `src/ishi/` folder, nor in the `src/themes/` folder. They exist only in the `docs.scss` file - the Sass file for this docs website.

In real life, we discourage these kind of CSS class names, because they describe presentation rather than meaning.
</div>
</div>
