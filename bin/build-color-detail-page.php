<?php

use GanbaroDigital\ColorCalc\V1\RGB\CalculateContrastRatio;
use GanbaroDigital\ColorCalc\V1\RGB\CalculateYIQ;
use GanbaroDigital\CssParser\V1\Parsers\BuildCssColorValue;

require_once __DIR__ . "/../vendor/autoload.php";
require_once __DIR__ . '/analyse-color-swatch.php';

// do not call this directly - run build-colors.sh instead, and it will
// generate the content that we expect

$lines='';
while ($line = fgets(STDIN)) {
    $lines .= $line;
}
$lines = explode("\n", $lines);

// here we go!
$currentFile='';
foreach($lines as $line) {
    $parts = explode(':', $line);
    $filename = $parts[0];
    if (!isset($parts[1])) {
        continue;
    }
    $funcCall = $parts[1] . ';';

    // are we looking at a new file?
    if ($filename !== $currentFile) {
        $currentFile = $filename;
        $prefix='';
    }

    $details = eval('return ' . $funcCall);
    extract($details);

    // what have we learned?
    $content = <<<EOS
{% import "ishi.twig" as ishi %}
# {$varName}

## Introduction

This page contains everything we know about the color `{$varName}`:

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('{$varName}', '{$hex}', '{$cssClasses}') }}
            </ul>
        </div>
    </div>
</div>

<div class="callout attention" markdown="1">
This page is auto-generated from the definition of `{$varName}`. The code that built this page is largely contained in `build-color-detail-page.php`.

To rebuild this page, run the `bin/build-colors.sh` script.
</div>

## How To Use

### Color Variables

This color is available as an SCSS variable. You can use it in your own SCSS theme:

```scss
.headline {
    color: \${$varName};
}
```

### Mixins

Want to use `{$varName}` as a background color in your theme? We have a mixin that will set both the `background-color` and `color` properties for you:

```scss
.headline {
    @include {$varName}-bg();
}
```

Want to use `{$varName}` as a semi-transparent background color in your theme?

```scss
.headline {
    @include {$varName}-rgba(\$transparency);
}
```

## Accessibility

Need to learn how color can affect whether people can use your web app or not?

* [Everything About Color Contrast And Why You Should Rethink It](https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/), by [Cathy O'Connor](http://www.twitter.com/cagocon)

Let us know of any other articles that we should recommend, please!

EOS;
    if ($goodBgContentChoice === 'no' && $goodBgHeadingChoice === 'no') {
        $content .= <<<EOS
<div class="callout danger" markdown="1">
#### This Color Has Accessibility Problems

Some of your readers will find it hard to read any text you put on top of this color. Don't use `{$varName}` as a background color behind normal paragraphs or behind large headings.

You can still use this color for things like borders.
</div>
EOS;
    }
    else if ($goodBgHeadingChoice === 'yes' && $AA_normal !== 'yes') {
        $content .= <<<EOS
<div class="callout warning" markdown="1">
#### This Color Is Usable, Just Not Great

You can use `{$varName}` as a background color for large headings. It meets the WCAG 2.0 AA standard. Just don't use it as a background color behind normal paragraphs.
</div>
EOS;
    }
    else if ($goodBgHeadingChoice === 'yes' && $AA_normal === 'yes') {
        $content .= <<<EOS
<div class="callout warning" markdown="1">
#### This Color Is Usable, Just Not Great

You can use `{$varName}` as a background color behind normal paragraphs, and as a background color for large headings. It meets the WCAG 2.0 AA standard. But other colors will be even better!
</div>
EOS;
    }
    else {
        $content .= <<<EOS
<div class="callout success" markdown="1">
#### This Color Is Accessible

It's safe to use `{$varName}` as a background color behind normal paragraphs, and as a background color for large headings. It meets the WCAG 2.0 AAA standard!
</div>
EOS;
    }

    $content .= <<<EOS

### Color Properties

Here's our automated analysis of `{$varName}`, when used as a background color:

Property | Value
---------|------
Foreground Color | `{$fgColor}`
- Luminosity | {$fgLuminosity} ({$fgShade})
- sRGB Relative Luminosity | {$fgRelLuminosity}
Background Color | `{$hex}`
- Luminosity | {$bgLuminosity} ({$bgShade})
- sRGB Relative Luminosity | {$bgRelLuminosity}
Contrast Ratio `{$fgColor}` / `{$bgColor}` | {$contrastRatio}
- If We Used `{$fgAltColor}` / `{$bgColor}` | {$contrastRatioAlt}
Good Background Choice For Headings? | {$goodBgHeadingChoice}
Good Background Choice For Long Content? | {$goodBgContentChoice}

#### Notes

1. To determine color luminosity (black, white, or gray), we calculate the color's luma value from the [YIQ color space](https://en.wikipedia.org/wiki/YIQ), using [a formula originally by Brian Suda](https://24ways.org/2010/calculating-color-contrast/).
1. The sRGB relative luminosity is calculated using the [WCAG 2.0 formula](https://www.w3.org/TR/WCAG20/#relativeluminancedef). It maps each RGB component onto a non-linear gamma 2.2 curve.
1. The contrast ratio is calculated using the [WCAG 2.0 definition](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef). We share [the concerns that WebAIM has](http://webaim.org/blog/wcag-2-1-feedback/) about the WCAG 2.0 formula. There are some circumstances where it favours a foreground color that looks very low-contrast on modern screens.
1. We think a color is a good background choice if:
  - it is WCAG 2.0 AAA Compliant with our chosen foreground color `{$fgColor}` ({$AAA_normal}), and
  - both `{$fgColor}` and `{$bgColor}` have different luminosity (darker or brighter) ({$hasClearContrast}), and
  - `{$bgColor}` isn't a mid-range color when converted to grayscale ({$isContrastyBackground})

### WCAG 2.0

How does `{$varName}` (with `{$fgColor}` as our chosen foreground color) do against the [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)?

Compliance Level | When | Value
-----------------|------|------
AA Compliant | normal text | {$AA_normal}
AA Compliant | 18pt+ text | {$AA_large}
AAA Compliant | normal text | {$AAA_normal}
AAA Compliant | 18pt+ text | {$AAA_large}
EOS;

    file_put_contents(__DIR__ . '/../docs/color-details/' . $varName . '.md', $content);
}