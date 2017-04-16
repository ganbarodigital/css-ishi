{% import "ishi.twig" as ishi %}
# Ganbaro Palette

## Introduction

The Ganbaro Digital palette is built from the main colors that we use for our brand. They're tried and tested on both light and dark backgrounds, for both text and background gradients for diagrams and presentations.

## The Colors

Here are the Ganbaro Digital brand colors.

The color grades are organised in the same style that [the Material Design palette](material-design-palette.html) is:

* the '500' color is the main color tone to use
* pick any of the other color tints or shades for building gradients, or as secondary colors
* pick any of the 'aXXX' colors to act as a contrast / accent color

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
                {{ ishi.large_colorswatch('ganbaro-red', '500', '#d82726', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '50',  '#f8c3c2') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '100', '#f5acab') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '200', '#ef7f7e') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '300', '#ea5250', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '400', '#e42523', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '500', '#d82726', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '600', '#c4201e', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '700', '#b11d1b', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '800', '#a21b19', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', '900', '#971817', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', 'A100', '#ffaeac') }}
                {{ ishi.sub_colorswatch('ganbaro-red', 'A200', '#f26d6b') }}
                {{ ishi.sub_colorswatch('ganbaro-red', 'A400', '#ec2725', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-red', 'A700', '#b51110', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('ganbaro-green', '500', '#B1DD8C') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '50', '#e6f4db') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '100', '#ddf0ce') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '200', '#d5edc0') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '300', '#cce9b3') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '400', '#bee3a0') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '500', '#B1DD8C') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '600', '#96d165') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '700', '#7cc63d') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '800', '#63a12f', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-green', '900', '#4b7924', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-green', 'A100', '#9dd0a3') }}
                {{ ishi.sub_colorswatch('ganbaro-green', 'A200', '#94ba9a') }}
                {{ ishi.sub_colorswatch('ganbaro-green', 'A400', '#6d8f71', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-green', 'A700', '#075735', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('ganbaro-blue', '500', '#234F83', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '50', '#b9d0ec') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '100', '#91b6e1') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '200', '#689bd7') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '300', '#4080cc', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '400', '#2e67ab', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '500', '#234F83', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '600', '#1e436f', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '700', '#18375b', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '800', '#163151', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', '900', '#132b47', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', 'A100', '#1497FC', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', 'A200', '#108CEE', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', 'A400', '#0085E6', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-blue', 'A700', '#0065C1', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('ganbaro-yellow', '500', '#fde11a') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '50', '#fef29a') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '100', '#feed72') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '200', '#fdeb5d') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '300', '#fde949') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '400', '#fde635') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '500', '#fde11a') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '600', '#fcd819') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '700', '#fbd113') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '800', '#fbc609') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', '900', '#fcaf19') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', 'A100', '#fff995') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', 'A200', '#fff41f') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', 'A400', '#ffe32d') }}
                {{ ishi.sub_colorswatch('ganbaro-yellow', 'A700', '#ffc054') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('ganbaro-orange', '500', '#ff9300') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '50', '#ffbe66') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '100', '#ffb755') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '200', '#ffb044') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '300', '#ffa933') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '400', '#ff9e1a') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '500', '#ff9300') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '600', '#e68400') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '700', '#cc7600', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '800', '#bb6c00', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', '900', '#aa6200', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', 'A100', '#ffc981') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', 'A200', '#ffb34e') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', 'A400', '#e78400') }}
                {{ ishi.sub_colorswatch('ganbaro-orange', 'A700', '#814a00', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('ganbaro-tan', '500', '#6d6762', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '50',  '#ebe7e2') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '100', '#dbd7d2') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '200', '#aba7a2') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '300', '#9b9792') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '400', '#7b7772', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '500', '#6d6762', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '600', '#4b4742', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '700', '#3b3732', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '800', '#2b2722', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', '900', '#0b0702', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', 'A100', '#ded9dc') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', 'A200', '#aea9ac') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', 'A400', '#7e797c', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-tan', 'A700', '#3e393c', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('ganbaro-slate', '500', '#646b70', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '50',  '#c3d0da') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '100', '#aeb9c3') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '200', '#a0abb4') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '300', '#919ba3') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '400', '#7d858C', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '500', '#646b70', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '600', '#565c61', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '700', '#45494d', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '800', '#363a3d', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', '900', '#242628', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', 'A100', '#b1b9c9') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', 'A200', '#9ea4b3') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', 'A400', '#808591', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-slate', 'A700', '#494c52', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('ganbaro-mono', '500', '#696969', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '0',   '#ffffff') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '50',  '#eeeeee') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '100', '#dddddd') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '200', '#a8a8a8') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '300', '#919191') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '400', '#7d7d7d', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '500', '#696969', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '600', '#404040', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '700', '#303030', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '800', '#222222', 'dark-bg') }}
                {{ ishi.sub_colorswatch('ganbaro-mono', '900', '#000000', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>