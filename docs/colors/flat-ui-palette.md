{% import "ishi.twig" as ishi %}
# Flat UI Palette

## Introduction

[Flat design](https://en.wikipedia.org/wiki/Flat_design) is a minimalist UI design approach. It has roots in the [International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style) of the 1920s, and became a mainstream look in the digital world thanks to Microsoft's Metro and Apple adopting it for iOS 7.

There's no single palette adopted across all flat design approaches. Both [Apple](apple-palette.html) and [Microsoft](microsoft-palette.html) have their own palettes to work with, for example.

These are the colors from [the Flat UI theme by DesignModo](http://designmodo.github.io/Flat-UI/). We first came across them at [MaterialUI](https://www.materialui.co). We're including them because they create a look that's popular across blog themes, startup firms, and sometimes other CSS frameworks too ...

## The Colors

The Flat UI palette is very similar to the original 16-color VGA palette in style. It provides complementary light and dark shades for each color.

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
                {{ ishi.small_colorswatch('flat-turquoise', '#1abc9c') }}
                {{ ishi.small_colorswatch('flat-emerland', '#2ecc71') }}
                {{ ishi.small_colorswatch('flat-peterriver', '#3498db', 'dark-bg') }}
                {{ ishi.small_colorswatch('flat-amethyst', '#9b59b6', 'dark-bg') }}
                {{ ishi.small_colorswatch('flat-wetasphalt', '#34495e', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('flat-greensea', '#16a085', 'dark-bg') }}
                {{ ishi.small_colorswatch('flat-nephritis', '#27ae60') }}
                {{ ishi.small_colorswatch('flat-belizehole', '#2980b9', 'dark-bg') }}
                {{ ishi.small_colorswatch('flat-wisteria', '#8e44ad', 'dark-bg') }}
                {{ ishi.small_colorswatch('flat-midnightblue', '#2c3e50', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('flat-sunflower', '#f1c40f') }}
                {{ ishi.small_colorswatch('flat-carrot', '#e67e22') }}
                {{ ishi.small_colorswatch('flat-alizarin', '#e74c3c', 'dark-bg') }}
                {{ ishi.small_colorswatch('flat-clouds', '#ecf0f1') }}
                {{ ishi.small_colorswatch('flat-concrete', '#95a5a6') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('flat-orange', '#f39c12') }}
                {{ ishi.small_colorswatch('flat-pumpkin', '#d35400', 'dark-bg') }}
                {{ ishi.small_colorswatch('flat-pomegranate', '#c0392b', 'dark-bg') }}
                {{ ishi.small_colorswatch('flat-silver', '#bdc3c7') }}
                {{ ishi.small_colorswatch('flat-asbestos', '#7f8c8d') }}
            </ul>
        </div>
    </div>
</div>