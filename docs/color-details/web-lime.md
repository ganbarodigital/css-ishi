{% import "ishi.twig" as ishi %}
# web-lime

## Introduction

This page contains everything we know about the color `web-lime`:

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('web-lime', '#0f0', '') }}
            </ul>
        </div>
    </div>
</div>

<div class="callout attention" markdown="1">
This page is auto-generated from the definition of `web-lime`. The code that built this page is largely contained in `build-color-detail-page.php`.

To rebuild this page, run the `bin/build-colors.sh` script.
</div>

## How To Use

### Color Variables

This color is available as an SCSS variable. You can use it in your own SCSS theme:

```scss
.headline {
    color: $web-lime;
}
```

### Mixins

Want to use `web-lime` as a background color in your theme? We have a mixin that will set both the `background-color` and `color` properties for you:

```scss
.headline {
    @include web-lime-bg();
}
```

Want to use `web-lime` as a semi-transparent background color in your theme?

```scss
.headline {
    @include web-lime-rgba($transparency);
}
```

## Accessibility

Need to learn how color can affect whether people can use your web app or not?

* [Everything About Color Contrast And Why You Should Rethink It](https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/), by [Cathy O'Connor](http://www.twitter.com/cagocon)

Let us know of any other articles that we should recommend, please!
<div class="callout warning" markdown="1">
#### This Color Is Usable, Just Not Great

You can use `web-lime` as a background color behind normal paragraphs, and as a background color for large headings. It meets the WCAG 2.0 AA standard. But other colors will be even better!
</div>
### Color Properties

Here's our automated analysis of `web-lime`, when used as a background color:

Property | Value
---------|------
Foreground Color | `#000`
- Luminosity | 0 (dark)
- sRGB Relative Luminosity | 0
Background Color | `#0f0`
- Luminosity | 149.685 (dull)
- sRGB Relative Luminosity | 0.715
Contrast Ratio `#000` / `#0f0` | 15.304
- If We Used `#fff` / `#0f0` | 1.372
Good Background Choice For Headings? | yes
Good Background Choice For Long Content? | no

#### Notes

1. To determine color luminosity (black, white, or gray), we calculate the color's luma value from the [YIQ color space](https://en.wikipedia.org/wiki/YIQ), using [a formula originally by Brian Suda](https://24ways.org/2010/calculating-color-contrast/).
1. The sRGB relative luminosity is calculated using the [WCAG 2.0 formula](https://www.w3.org/TR/WCAG20/#relativeluminancedef). It maps each RGB component onto a non-linear gamma 2.2 curve.
1. The contrast ratio is calculated using the [WCAG 2.0 definition](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef). We share [the concerns that WebAIM has](http://webaim.org/blog/wcag-2-1-feedback/) about the WCAG 2.0 formula. There are some circumstances where it favours a foreground color that looks very low-contrast on modern screens.
1. We think a color is a good background choice if:
  - it is WCAG 2.0 AAA Compliant with our chosen foreground color `#000` (yes), and
  - both `#000` and `#0f0` have different luminosity (darker or brighter) (yes), and
  - `#0f0` isn't a mid-range color when converted to grayscale (no)

### WCAG 2.0

How does `web-lime` (with `#000` as our chosen foreground color) do against the [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)?

Compliance Level | When | Value
-----------------|------|------
AA Compliant | normal text | yes
AA Compliant | 18pt+ text | yes
AAA Compliant | normal text | yes
AAA Compliant | 18pt+ text | yes