{% import "ishi.twig" as ishi %}
# crayola-bluegreen

## Introduction

This page contains everything we know about the color `crayola-bluegreen`:

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('crayola-bluegreen', '#0d98ba', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

<div class="callout attention" markdown="1">
This page is auto-generated from the definition of `crayola-bluegreen`. The code that built this page is largely contained in `build-color-detail-page.php`.

To rebuild this page, run the `bin/build-colors.sh` script.
</div>

## How To Use

### Color Variables

This color is available as an SCSS variable. You can use it in your own SCSS theme:

```scss
.headline {
    color: $crayola-bluegreen;
}
```

### Mixins

Want to use `crayola-bluegreen` as a background color in your theme? We have a mixin that will set both the `background-color` and `color` properties for you:

```scss
.headline {
    @include crayola-bluegreen-bg();
}
```

Want to use `crayola-bluegreen` as a semi-transparent background color in your theme?

```scss
.headline {
    @include crayola-bluegreen-rgba($transparency);
}
```

## Accessibility

Need to learn how color can affect whether people can use your web app or not?

* [Everything About Color Contrast And Why You Should Rethink It](https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/), by [Cathy O'Connor](http://www.twitter.com/cagocon)

Let us know of any other articles that we should recommend, please!
<div class="callout warning" markdown="1">
#### This Color Is Usable, Just Not Great

You can use `crayola-bluegreen` as a background color for large headings. It meets the WCAG 2.0 AA standard. Just don't use it as a background color behind normal paragraphs.
</div>
### Color Properties

Here's our automated analysis of `crayola-bluegreen`, when used as a background color:

Property | Value
---------|------
Foreground Color | `#fff`
- Luminosity | 255 (bright)
- sRGB Relative Luminosity | 1
Background Color | `#0d98ba`
- Luminosity | 114.315 (dull)
- sRGB Relative Luminosity | 0.261
Contrast Ratio `#fff` / `#0d98ba` | 3.378
- If We Used `#000` / `#0d98ba` | 6.217
Good Background Choice For Headings? | yes
Good Background Choice For Long Content? | no

#### Notes

1. To determine color luminosity (black, white, or gray), we calculate the color's luma value from the [YIQ color space](https://en.wikipedia.org/wiki/YIQ), using [a formula originally by Brian Suda](https://24ways.org/2010/calculating-color-contrast/).
1. The sRGB relative luminosity is calculated using the [WCAG 2.0 formula](https://www.w3.org/TR/WCAG20/#relativeluminancedef). It maps each RGB component onto a non-linear gamma 2.2 curve.
1. The contrast ratio is calculated using the [WCAG 2.0 definition](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef). We share [the concerns that WebAIM has](http://webaim.org/blog/wcag-2-1-feedback/) about the WCAG 2.0 formula. There are some circumstances where it favours a foreground color that looks very low-contrast on modern screens.
1. We think a color is a good background choice if:
  - it is WCAG 2.0 AAA Compliant with our chosen foreground color `#fff` (no), and
  - both `#fff` and `#0d98ba` have different luminosity (darker or brighter) (yes), and
  - `#0d98ba` isn't a mid-range color when converted to grayscale (no)

### WCAG 2.0

How does `crayola-bluegreen` (with `#fff` as our chosen foreground color) do against the [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)?

Compliance Level | When | Value
-----------------|------|------
AA Compliant | normal text | no
AA Compliant | 18pt+ text | yes
AAA Compliant | normal text | no
AAA Compliant | 18pt+ text | no