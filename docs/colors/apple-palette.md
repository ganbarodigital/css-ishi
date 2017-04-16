{% import "ishi.twig" as ishi %}
# Apple Palette

## Introduction

Most applications on Apple's MacOS / OSX use a standard color picker. It provides a range of strong colors that have been widely used over the years.

These colors work well across most devices, especially devices with poor color reproduction or poor contrast levels.

## The Colors

These are the colors of the pencils found in Apple MacOS' built-in color picker. There are three color ranges, grouped by their luminosity, plus a grayscale palette.

<div class="callout info" markdown="1">
#### Not Sure How To Use These Colors?

Click on any color. This will load up a page full of details, including:

- SCSS variable(s),
- SCSS mixin(s),
- accessibility details
- automated analysis of the color's properties
</div>

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('apple-licorice', '#000000', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-lead', '#191919', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-tungsten', '#333333', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-iron', '#4c4c4c', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-steel', '#666666', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-tin', '#7f7f7f', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-nickel', '#808080', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-aluminium', '#999999') }}
                {{ ishi.small_colorswatch('apple-magnesium', '#b3b3b3') }}
                {{ ishi.small_colorswatch('apple-silver', '#cccccc') }}
                {{ ishi.small_colorswatch('apple-mercury', '#e6e6e6') }}
                {{ ishi.small_colorswatch('apple-snow', '#ffffff') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('apple-cayenne', '#800000', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-mocha', '#804000', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-asparagus', '#808000', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-fern', '#408000', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-clover', '#008000', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-moss', '#008040', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-teal', '#008080', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-ocean', '#004080', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-midnight', '#000080', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-eggplant', '#400080', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-plum', '#800080', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-maroon', '#800040', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('apple-maraschino', '#ff0000', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-tangerine', '#ff8000') }}
                {{ ishi.small_colorswatch('apple-lemon', '#ffff00') }}
                {{ ishi.small_colorswatch('apple-lime', '#80ff00') }}
                {{ ishi.small_colorswatch('apple-spring', '#00ff00') }}
                {{ ishi.small_colorswatch('apple-seafoam', '#00ff80') }}
                {{ ishi.small_colorswatch('apple-turquoise', '#00ffff') }}
                {{ ishi.small_colorswatch('apple-aqua', '#0080ff', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-blueberry', '#0000ff', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-grape', '#8000ff', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-magento', '#ff00ff', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-strawberry', '#ff0080', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('apple-salmon', '#ff6666') }}
                {{ ishi.small_colorswatch('apple-cantaloupe', '#ffcc66') }}
                {{ ishi.small_colorswatch('apple-banana', '#ffff66') }}
                {{ ishi.small_colorswatch('apple-honeydew', '#ccff66') }}
                {{ ishi.small_colorswatch('apple-flora', '#66ff66') }}
                {{ ishi.small_colorswatch('apple-spindrift', '#66ffcc') }}
                {{ ishi.small_colorswatch('apple-ice', '#66ffff') }}
                {{ ishi.small_colorswatch('apple-sky', '#66ccff') }}
                {{ ishi.small_colorswatch('apple-orchid', '#6666ff', 'dark-bg') }}
                {{ ishi.small_colorswatch('apple-lavender', '#cc66ff') }}
                {{ ishi.small_colorswatch('apple-bubblegum', '#ff66ff') }}
                {{ ishi.small_colorswatch('apple-carnation', '#ff6fcf') }}
            </ul>
        </div>
    </div>
</div>
