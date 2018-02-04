{% import "ishi.twig" as ishi %}
# Primary Palette

## Introduction

Ishi uses color as part of presenting different typography and components. These colors are chosen for their readability on a wide range - and quality - of devices.

## The Colors

<div class="callout callout--info" markdown="1">
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
                {{ ishi.small_colorswatch('Black', '#000000', 'dark-bg') }}
                {{ ishi.small_colorswatch('White', '#FFFFFF' )}}
            </ul>
        </div>
    </div>
</div>
