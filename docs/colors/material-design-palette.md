{% import "ishi.twig" as ishi %}
# Material Design Palette

## Introduction

{{ ishi.externallink('material-design') }} is the visual design language at the heart of the Android operating system. It's also a popular approach to interface design for single-page applications written in Angular JS.

Material Design provides a rich palette of colors to work with. [Their guidelines](https://material.io/guidelines/style/color.html#) recommend:

* choosing 3 contrasting shades from a single palette as your primary colors
* plus 1 'accent' color to complement those

Google recommends using one of the '500'-grade colors as the primary color for your site or app.

Not sure which colors go well together? Search online for [Material Design color picker](https://google.com/?q=material-design-color-picker) to find some handy tools to help you choose.

## The Colors

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
                {{ ishi.large_colorswatch('material-red', '500', '#F44336', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', '50', '#FFEBEE') }}
                {{ ishi.sub_colorswatch('material-red', '100', '#FFCDD2') }}
                {{ ishi.sub_colorswatch('material-red', '200', '#EF9A9A') }}
                {{ ishi.sub_colorswatch('material-red', '300', '#E57373') }}
                {{ ishi.sub_colorswatch('material-red', '400', '#EF5350', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', '500', '#F44336', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', '600', '#E53935', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', '700', '#D32F2F', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', '800', '#C62828', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', '900', '#B71C1C', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', 'A100', '#FF8A80') }}
                {{ ishi.sub_colorswatch('material-red', 'A200', '#FF5252', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', 'A400', '#FF1744', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-red', 'A700', '#D50000', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-pink', '500', '#E91E63', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', '50', '#FCE4EC') }}
                {{ ishi.sub_colorswatch('material-pink', '100', '#F8BBD0') }}
                {{ ishi.sub_colorswatch('material-pink', '200', '#F48FB1') }}
                {{ ishi.sub_colorswatch('material-pink', '300', '#F06292') }}
                {{ ishi.sub_colorswatch('material-pink', '400', '#EC407A', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', '500', '#E91E63', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', '600', '#D81B60', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', '700', '#C2185B', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', '800', '#AD1457', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', '900', '#880E4F', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', 'A100', '#FF80AB') }}
                {{ ishi.sub_colorswatch('material-pink', 'A200', '#FF4081', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', 'A400', '#F50057', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-pink', 'A700', '#C51162', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-purple', '500', '#9C27B0', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', '50', '#F3E5F5') }}
                {{ ishi.sub_colorswatch('material-purple', '100', '#E1BEE7') }}
                {{ ishi.sub_colorswatch('material-purple', '200', '#CE93D8') }}
                {{ ishi.sub_colorswatch('material-purple', '300', '#BA68C8') }}
                {{ ishi.sub_colorswatch('material-purple', '400', '#AB47BC', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', '500', '#9C27B0', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', '600', '#8E24AA', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', '700', '#7B1FA2', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', '800', '#6A1B9A', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', '900', '#4A148C', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', 'A100', '#EA80FC') }}
                {{ ishi.sub_colorswatch('material-purple', 'A200', '#E040FB', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', 'A400', '#D500F9', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-purple', 'A700', '#AA00FF', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-deeppurple', '500', '#673AB7', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '50', '#EDE7F6') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '100', '#D1C4E9') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '200', '#B39DDB') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '300', '#9575CD') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '400', '#7E57C2', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '500', '#673AB7', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '600', '#5E35B1', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '700', '#512DA8', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '800', '#4527A0', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', '900', '#311B92', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', 'A100', '#B388FF') }}
                {{ ishi.sub_colorswatch('material-deeppurple', 'A200', '#7C4DFF', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', 'A400', '#651FFF', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeppurple', 'A700', '#6200EA', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-indigo', '500', '#3F51B5', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', '50', '#E8EAF6') }}
                {{ ishi.sub_colorswatch('material-indigo', '100', '#C5CAE9') }}
                {{ ishi.sub_colorswatch('material-indigo', '200', '#9FA8DA') }}
                {{ ishi.sub_colorswatch('material-indigo', '300', '#7986CB') }}
                {{ ishi.sub_colorswatch('material-indigo', '400', '#5C6BC0', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', '500', '#3F51B5', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', '600', '#3949AB', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', '700', '#303F9F', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', '800', '#283593', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', '900', '#1A237E', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', 'A100', '#8C9EFF') }}
                {{ ishi.sub_colorswatch('material-indigo', 'A200', '#536DFE', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', 'A400', '#3D5AFE', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-indigo', 'A700', '#304FFE', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-blue', '500', '#2196F3', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-blue', '50', '#E3F2FD') }}
                {{ ishi.sub_colorswatch('material-blue', '100', '#BBDEFB') }}
                {{ ishi.sub_colorswatch('material-blue', '200', '#90CAF9') }}
                {{ ishi.sub_colorswatch('material-blue', '300', '#64B5F6') }}
                {{ ishi.sub_colorswatch('material-blue', '400', '#42A5F5') }}
                {{ ishi.sub_colorswatch('material-blue', '500', '#2196F3', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-blue', '600', '#1E88E5', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-blue', '700', '#1976D2', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-blue', '800', '#1565C0', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-blue', '900', '#0D47A1', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-blue', 'A100', '#82B1FF') }}
                {{ ishi.sub_colorswatch('material-blue', 'A200', '#448AFF', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-blue', 'A400', '#2979FF', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-blue', 'A700', '#2962FF', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-lightblue', '500', '#03A9F4') }}
                {{ ishi.sub_colorswatch('material-lightblue', '50', '#E1F5FE') }}
                {{ ishi.sub_colorswatch('material-lightblue', '100', '#B3E5FC') }}
                {{ ishi.sub_colorswatch('material-lightblue', '200', '#81D4FA') }}
                {{ ishi.sub_colorswatch('material-lightblue', '300', '#4FC3F7') }}
                {{ ishi.sub_colorswatch('material-lightblue', '400', '#29B6F6') }}
                {{ ishi.sub_colorswatch('material-lightblue', '500', '#03A9F4') }}
                {{ ishi.sub_colorswatch('material-lightblue', '600', '#039BE5', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-lightblue', '700', '#0288D1', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-lightblue', '800', '#0277BD', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-lightblue', '900', '#01579B', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-lightblue', 'A100', '#80D8FF') }}
                {{ ishi.sub_colorswatch('material-lightblue', 'A200', '#40C4FF') }}
                {{ ishi.sub_colorswatch('material-lightblue', 'A400', '#00B0FF') }}
                {{ ishi.sub_colorswatch('material-lightblue', 'A700', '#0091EA', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-cyan', '500', '#00BCD4') }}
                {{ ishi.sub_colorswatch('material-cyan', '50', '#E0F7FA') }}
                {{ ishi.sub_colorswatch('material-cyan', '100', '#B2EBF2') }}
                {{ ishi.sub_colorswatch('material-cyan', '200', '#80DEEA') }}
                {{ ishi.sub_colorswatch('material-cyan', '300', '#4DD0E1') }}
                {{ ishi.sub_colorswatch('material-cyan', '400', '#26C6DA') }}
                {{ ishi.sub_colorswatch('material-cyan', '500', '#00BCD4') }}
                {{ ishi.sub_colorswatch('material-cyan', '600', '#00ACC1') }}
                {{ ishi.sub_colorswatch('material-cyan', '700', '#0097A7', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-cyan', '800', '#00838F', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-cyan', '900', '#006064', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-cyan', 'A100', '#84FFFF') }}
                {{ ishi.sub_colorswatch('material-cyan', 'A200', '#18FFFF') }}
                {{ ishi.sub_colorswatch('material-cyan', 'A400', '#00E5FF') }}
                {{ ishi.sub_colorswatch('material-cyan', 'A700', '#00B8D4') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-teal', '500', '#009688', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-teal', '50', '#E0F2F1') }}
                {{ ishi.sub_colorswatch('material-teal', '100', '#B2DFDB') }}
                {{ ishi.sub_colorswatch('material-teal', '200', '#80CBC4') }}
                {{ ishi.sub_colorswatch('material-teal', '300', '#4DB6AC') }}
                {{ ishi.sub_colorswatch('material-teal', '400', '#26A69A') }}
                {{ ishi.sub_colorswatch('material-teal', '500', '#009688', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-teal', '600', '#00897B', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-teal', '700', '#00796B', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-teal', '800', '#00695C', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-teal', '900', '#004D40', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-teal', 'A100', '#A7FFEB') }}
                {{ ishi.sub_colorswatch('material-teal', 'A200', '#64FFDA') }}
                {{ ishi.sub_colorswatch('material-teal', 'A400', '#1DE9B6') }}
                {{ ishi.sub_colorswatch('material-teal', 'A700', '#00BFA5') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-lime', '500', '#CDDC39') }}
                {{ ishi.sub_colorswatch('material-lime', '50', '#F9FBE7') }}
                {{ ishi.sub_colorswatch('material-lime', '100', '#F0F4C3') }}
                {{ ishi.sub_colorswatch('material-lime', '200', '#E6EE9C') }}
                {{ ishi.sub_colorswatch('material-lime', '300', '#DCE775') }}
                {{ ishi.sub_colorswatch('material-lime', '400', '#D4E157') }}
                {{ ishi.sub_colorswatch('material-lime', '500', '#CDDC39') }}
                {{ ishi.sub_colorswatch('material-lime', '600', '#C0CA33') }}
                {{ ishi.sub_colorswatch('material-lime', '700', '#AFB42B') }}
                {{ ishi.sub_colorswatch('material-lime', '800', '#9E9D24') }}
                {{ ishi.sub_colorswatch('material-lime', '900', '#827717', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-lime', 'A100', '#F4FF81') }}
                {{ ishi.sub_colorswatch('material-lime', 'A200', '#EEFF41') }}
                {{ ishi.sub_colorswatch('material-lime', 'A400', '#C6FF00') }}
                {{ ishi.sub_colorswatch('material-lime', 'A700', '#AEEA00') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-lightgreen', '500', '#8BC34A') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '50', '#F1F8E9') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '100', '#DCEDC8') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '200', '#C5E1A5') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '300', '#AED581') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '400', '#9CCC65') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '500', '#8BC34A') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '600', '#7CB342') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '700', '#689F38', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '800', '#558B2F', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-lightgreen', '900', '#33691E', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-lightgreen', 'A100', '#CCFF90') }}
                {{ ishi.sub_colorswatch('material-lightgreen', 'A200', '#B2FF59') }}
                {{ ishi.sub_colorswatch('material-lightgreen', 'A400', '#76FF03') }}
                {{ ishi.sub_colorswatch('material-lightgreen', 'A700', '#64DD17') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-green', '500', '#4CAF50') }}
                {{ ishi.sub_colorswatch('material-green', '50', '#E8F5E9') }}
                {{ ishi.sub_colorswatch('material-green', '100', '#C8E6C9') }}
                {{ ishi.sub_colorswatch('material-green', '200', '#A5D6A7') }}
                {{ ishi.sub_colorswatch('material-green', '300', '#81C784') }}
                {{ ishi.sub_colorswatch('material-green', '400', '#66BB6A') }}
                {{ ishi.sub_colorswatch('material-green', '500', '#4CAF50') }}
                {{ ishi.sub_colorswatch('material-green', '600', '#43A047', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-green', '700', '#388E3C', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-green', '800', '#2E7D32', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-green', '900', '#1B5E20', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-green', 'A100', '#B9F6CA') }}
                {{ ishi.sub_colorswatch('material-green', 'A200', '#69F0AE') }}
                {{ ishi.sub_colorswatch('material-green', 'A400', '#00E676') }}
                {{ ishi.sub_colorswatch('material-green', 'A700', '#00C853') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-yellow', '500', '#FFEB3B') }}
                {{ ishi.sub_colorswatch('material-yellow', '50', '#FFFDE7') }}
                {{ ishi.sub_colorswatch('material-yellow', '100', '#FFF9C4') }}
                {{ ishi.sub_colorswatch('material-yellow', '200', '#FFF59D') }}
                {{ ishi.sub_colorswatch('material-yellow', '300', '#FFF176') }}
                {{ ishi.sub_colorswatch('material-yellow', '400', '#FFEE58') }}
                {{ ishi.sub_colorswatch('material-yellow', '500', '#FFEB3B') }}
                {{ ishi.sub_colorswatch('material-yellow', '600', '#FDD835') }}
                {{ ishi.sub_colorswatch('material-yellow', '700', '#FBC02D') }}
                {{ ishi.sub_colorswatch('material-yellow', '800', '#F9A825') }}
                {{ ishi.sub_colorswatch('material-yellow', '900', '#F57F17') }}
                {{ ishi.sub_colorswatch('material-yellow', 'A100', '#FFFF8D') }}
                {{ ishi.sub_colorswatch('material-yellow', 'A200', '#FFFF00') }}
                {{ ishi.sub_colorswatch('material-yellow', 'A400', '#FFEA00') }}
                {{ ishi.sub_colorswatch('material-yellow', 'A700', '#FFD600') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-amber', '500', '#FFC107') }}
                {{ ishi.sub_colorswatch('material-amber', '50', '#FFF8E1') }}
                {{ ishi.sub_colorswatch('material-amber', '100', '#FFECB3') }}
                {{ ishi.sub_colorswatch('material-amber', '200', '#FFE082') }}
                {{ ishi.sub_colorswatch('material-amber', '300', '#FFD54F') }}
                {{ ishi.sub_colorswatch('material-amber', '400', '#FFCA28') }}
                {{ ishi.sub_colorswatch('material-amber', '500', '#FFC107') }}
                {{ ishi.sub_colorswatch('material-amber', '600', '#FFB300') }}
                {{ ishi.sub_colorswatch('material-amber', '700', '#FFA000') }}
                {{ ishi.sub_colorswatch('material-amber', '800', '#FF8F00') }}
                {{ ishi.sub_colorswatch('material-amber', '900', '#FF6F00') }}
                {{ ishi.sub_colorswatch('material-amber', 'A100', '#FFE57F') }}
                {{ ishi.sub_colorswatch('material-amber', 'A200', '#FFD740') }}
                {{ ishi.sub_colorswatch('material-amber', 'A400', '#FFC400') }}
                {{ ishi.sub_colorswatch('material-amber', 'A700', '#FFAB00') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-orange', '500', '#FF9800') }}
                {{ ishi.sub_colorswatch('material-orange', '50', '#FFF3E0') }}
                {{ ishi.sub_colorswatch('material-orange', '100', '#FFE0B2') }}
                {{ ishi.sub_colorswatch('material-orange', '200', '#FFCC80') }}
                {{ ishi.sub_colorswatch('material-orange', '300', '#FFB74D') }}
                {{ ishi.sub_colorswatch('material-orange', '400', '#FFA726') }}
                {{ ishi.sub_colorswatch('material-orange', '500', '#FF9800') }}
                {{ ishi.sub_colorswatch('material-orange', '600', '#FB8C00') }}
                {{ ishi.sub_colorswatch('material-orange', '700', '#F57C00') }}
                {{ ishi.sub_colorswatch('material-orange', '800', '#EF6C00') }}
                {{ ishi.sub_colorswatch('material-orange', '900', '#E65100', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-orange', 'A100', '#FFD180') }}
                {{ ishi.sub_colorswatch('material-orange', 'A200', '#FFAB40') }}
                {{ ishi.sub_colorswatch('material-orange', 'A400', '#FF9100') }}
                {{ ishi.sub_colorswatch('material-orange', 'A700', '#FF6D00') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-deeporange', '500', '#FF5722', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeporange', '50', '#FBE9E7') }}
                {{ ishi.sub_colorswatch('material-deeporange', '100', '#FFCCBC') }}
                {{ ishi.sub_colorswatch('material-deeporange', '200', '#FFAB91') }}
                {{ ishi.sub_colorswatch('material-deeporange', '300', '#FF8A65') }}
                {{ ishi.sub_colorswatch('material-deeporange', '400', '#FF7043') }}
                {{ ishi.sub_colorswatch('material-deeporange', '500', '#FF5722', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeporange', '600', '#F4511E', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeporange', '700', '#E64A19', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeporange', '800', '#D84315', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeporange', '900', '#BF360C', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeporange', 'A100', '#FF9E80') }}
                {{ ishi.sub_colorswatch('material-deeporange', 'A200', '#FF6E40') }}
                {{ ishi.sub_colorswatch('material-deeporange', 'A400', '#FF3D00', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-deeporange', 'A700', '#DD2C00', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-brown', '500', '#795548', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-brown', '50', '#EFEBE9') }}
                {{ ishi.sub_colorswatch('material-brown', '100', '#D7CCC8') }}
                {{ ishi.sub_colorswatch('material-brown', '200', '#BCAAA4') }}
                {{ ishi.sub_colorswatch('material-brown', '300', '#A1887F') }}
                {{ ishi.sub_colorswatch('material-brown', '400', '#8D6E63', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-brown', '500', '#795548', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-brown', '600', '#6D4C41', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-brown', '700', '#5D4037', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-brown', '800', '#4E342E', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-brown', '900', '#3E2723', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-gray', '500', '#9E9E9E') }}
                {{ ishi.sub_colorswatch('material-gray', '50', '#FAFAFA') }}
                {{ ishi.sub_colorswatch('material-gray', '100', '#F5F5F5') }}
                {{ ishi.sub_colorswatch('material-gray', '200', '#EEEEEE') }}
                {{ ishi.sub_colorswatch('material-gray', '300', '#E0E0E0') }}
                {{ ishi.sub_colorswatch('material-gray', '400', '#BDBDBD') }}
                {{ ishi.sub_colorswatch('material-gray', '500', '#9E9E9E') }}
                {{ ishi.sub_colorswatch('material-gray', '600', '#757575', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-gray', '700', '#616161', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-gray', '800', '#424242', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-gray', '900', '#212121', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.large_colorswatch('material-bluegray', '500', '#607D8B', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-bluegray', '50', '#ECEFF1') }}
                {{ ishi.sub_colorswatch('material-bluegray', '100', '#CFD8DC') }}
                {{ ishi.sub_colorswatch('material-bluegray', '200', '#B0BEC5') }}
                {{ ishi.sub_colorswatch('material-bluegray', '300', '#90A4AE') }}
                {{ ishi.sub_colorswatch('material-bluegray', '400', '#78909C') }}
                {{ ishi.sub_colorswatch('material-bluegray', '500', '#607D8B', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-bluegray', '600', '#546E7A', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-bluegray', '700', '#455A64', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-bluegray', '800', '#37474F', 'dark-bg') }}
                {{ ishi.sub_colorswatch('material-bluegray', '900', '#263238', 'dark-bg') }}
            </ul>
        </div>
    </div>

</div>

