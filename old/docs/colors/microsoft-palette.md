{% import "ishi.twig" as ishi %}
# Microsoft Palette

## Introduction

These are the colors from Microsoft's design language. These colors will be instantly familiar to anyone who uses Microsoft Windows or the Xbox.

The Microsoft Design Language color palette is built around strong, distinctive colors. These colors have good contrast, and work well in apps that support both computer monitors and flat-panel TVs.

The [Microsoft Design Language website](https://www.microsoft.com/en-us/design/) has more detail on [how to use these colors](https://www.microsoft.com/en-us/design/color) in the Microsoft way. You'll also find additional (but sadly unnamed) shades and tones available that you can incorporate too.

## The Colors

### 'Metro' Colors

'Metro' was the original name given to the design language made popular by Windows 8 and Windows Phone. They are bold, bright colors that quickly capture attention.

We're using the color definitions from [MaterialUI](https://www.materialui.co).

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
                {{ ishi.small_colorswatch('metro-lime', '#a4c400') }}
                {{ ishi.small_colorswatch('metro-green', '#60a917') }}
                {{ ishi.small_colorswatch('metro-emerald', '#008a00', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-teal', '#00aba9') }}
                {{ ishi.small_colorswatch('metro-cyan', '#1ba1e2') }}
                {{ ishi.small_colorswatch('metro-cobalt', '#0050ef', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-indigo', '#6a00ff', 'dark-bg') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('metro-violet', '#aa00ff', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-pink', '#f472d0') }}
                {{ ishi.small_colorswatch('metro-magenta', '#d80073', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-crimson', '#a20025', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-red', '#e51400', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-orange', '#fa6800') }}
                {{ ishi.small_colorswatch('metro-amber', '#f0a30a') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('metro-yellow', '#e3c800') }}
                {{ ishi.small_colorswatch('metro-brown', '#825a2c', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-olive', '#6d8764', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-steel', '#647687', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-mauve', '#76608a', 'dark-bg') }}
                {{ ishi.small_colorswatch('metro-sienna', '#a0522d', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

### Microsoft Design Language Colors

'Metro' evolved into the Microsoft Design Language. There are few, if any, colors in common between 'Metro' and the Microsoft Design Language.

The current Microsoft Design Language colors take advantage of improvements in screen quality. They feature a much wider range of tones than before. They also feature more nuanced tones that can be used to deliver a more sophisticated look than was typically seen during the 'Metro' era.

Alas, Microsoft has not given any offical names to these colors that we could find. We've come up with our own names, using the closest match to our collection of [miscellaneous colors](misc-palette.html).

<div class="callout callout--attention" markdown="1">
Remember, these are not official Microsoft names for these colors!
</div>

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-red-1', '#750b1c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-red-2', '#a80000', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-red-3', '#c50f1f', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-red-4', '#e81123', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-red-5', '#e74856', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-red-6', '#e6808a') }}
                {{ ishi.small_colorswatch('msdl-red-7', '#f4abba') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-falured-1', '#7f1d10', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-falured-2', '#a52613', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-falured-3', '#da3b01', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-falured-4', '#f03a17', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-falured-5', '#ef6950') }}
                {{ ishi.small_colorswatch('msdl-falured-6', '#ee9889') }}
                {{ ishi.small_colorswatch('msdl-falured-7', '#eec7c2') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-saddlebrown-1', '#7f2f08', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-saddlebrown-2', '#a74109', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-saddlebrown-3', '#ca5010', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-saddlebrown-4', '#f7630c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-saddlebrown-5', '#f7894a') }}
                {{ ishi.small_colorswatch('msdl-saddlebrown-6', '#f7b189') }}
                {{ ishi.small_colorswatch('msdl-saddlebrown-7', '#f2d5c9') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-rawumber-1', '#7f4200', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-rawumber-2', '#b05e0d', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-rawumber-3', '#d47300', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-rawumber-4', '#ff8c00') }}
                {{ ishi.small_colorswatch('msdl-rawumber-5', '#ffaa44') }}
                {{ ishi.small_colorswatch('msdl-rawumber-6', '#ffc988') }}
                {{ ishi.small_colorswatch('msdl-rawumber-7', '#ffdabb') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-brown-1', '#ab620d', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-brown-2', '#d48c00') }}
                {{ ishi.small_colorswatch('msdl-brown-3', '#eaa300') }}
                {{ ishi.small_colorswatch('msdl-brown-4', '#ffb900') }}
                {{ ishi.small_colorswatch('msdl-brown-5', '#ffc83d') }}
                {{ ishi.small_colorswatch('msdl-brown-6', '#ffd679') }}
                {{ ishi.small_colorswatch('msdl-brown-7', '#ffe5b6') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-yellow-1', '#986f0b', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-yellow-2', '#c19c00') }}
                {{ ishi.small_colorswatch('msdl-yellow-3', '#dfbe00') }}
                {{ ishi.small_colorswatch('msdl-yellow-4', '#fce100') }}
                {{ ishi.small_colorswatch('msdl-yellow-5', '#fff100') }}
                {{ ishi.small_colorswatch('msdl-yellow-6', '#faec6e') }}
                {{ ishi.small_colorswatch('msdl-yellow-7', '#f9f1a5') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-christi-1', '#73aa24') }}
                {{ ishi.small_colorswatch('msdl-christi-2', '#8cbd18') }}
                {{ ishi.small_colorswatch('msdl-christi-3', '#a4cf0c') }}
                {{ ishi.small_colorswatch('msdl-christi-4', '#bad80a') }}
                {{ ishi.small_colorswatch('msdl-christi-5', '#d1ec3c') }}
                {{ ishi.small_colorswatch('msdl-christi-6', '#e4f577') }}
                {{ ishi.small_colorswatch('msdl-christi-7', '#f8ffb3') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-bilbao-1', '#498205', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-bilbao-2', '#599b00', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-bilbao-3', '#6bb700') }}
                {{ ishi.small_colorswatch('msdl-bilbao-4', '#7cd300') }}
                {{ ishi.small_colorswatch('msdl-bilbao-5', '#9ad93a') }}
                {{ ishi.small_colorswatch('msdl-bilbao-6', '#b7df74') }}
                {{ ishi.small_colorswatch('msdl-bilbao-7', '#d5e5ae') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-green-1', '#0b6a0b', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-green-2', '#107c10', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-green-3', '#13a10e', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-green-4', '#16c60c') }}
                {{ ishi.small_colorswatch('msdl-green-5', '#47d041') }}
                {{ ishi.small_colorswatch('msdl-green-6', '#79db75') }}
                {{ ishi.small_colorswatch('msdl-green-7', '#aae5aa') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-fungreen-1', '#00722e', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-fungreen-2', '#10893e', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-fungreen-3', '#00ae56') }}
                {{ ishi.small_colorswatch('msdl-fungreen-4', '#00cc6a') }}
                {{ ishi.small_colorswatch('msdl-fungreen-5', '#38d487') }}
                {{ ishi.small_colorswatch('msdl-fungreen-6', '#70dda5') }}
                {{ ishi.small_colorswatch('msdl-fungreen-7', '#a8e5c2') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-mosque-1', '#005e50', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mosque-2', '#008272', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mosque-3', '#00b294') }}
                {{ ishi.small_colorswatch('msdl-mosque-4', '#00cea6') }}
                {{ ishi.small_colorswatch('msdl-mosque-5', '#41dabc') }}
                {{ ishi.small_colorswatch('msdl-mosque-6', '#81e6d3') }}
                {{ ishi.small_colorswatch('msdl-mosque-7', '#c2f2e9') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-teal-1', '#006666', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-teal-2', '#038387', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-teal-3', '#009ca4', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-teal-4', '#00b7c3') }}
                {{ ishi.small_colorswatch('msdl-teal-5', '#30c6cc') }}
                {{ ishi.small_colorswatch('msdl-teal-6', '#61d6d6') }}
                {{ ishi.small_colorswatch('msdl-teal-7', '#91e5df') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-bluelagoon-1', '#005b70', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-bluelagoon-2', '#006f94', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-bluelagoon-3', '#0099bc', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-bluelagoon-4', '#00bcf2') }}
                {{ ishi.small_colorswatch('msdl-bluelagoon-5', '#31d2f7') }}
                {{ ishi.small_colorswatch('msdl-bluelagoon-6', '#69eaff') }}
                {{ ishi.small_colorswatch('msdl-bluelagoon-7', '#99ecff') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-prussianblue-1', '#003966', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-prussianblue-2', '#004e8c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-prussianblue-3', '#0063b1', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-prussianblue-4', '#0078d7', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-prussianblue-5', '#3a96dd', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-prussianblue-6', '#83beec') }}
                {{ ishi.small_colorswatch('msdl-prussianblue-7', '#b3dbf2') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-blue-1', '#00188f', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-blue-2', '#0027b4', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-blue-3', '#0037da', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-blue-4', '#0046ff', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-blue-5', '#3b78ff', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-blue-6', '#7ba7ff') }}
                {{ ishi.small_colorswatch('msdl-blue-7', '#abc9ed') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-sapphire-1', '#11255e', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-sapphire-2', '#19318d', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-sapphire-3', '#203dbd', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-sapphire-4', '#2849ec', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-sapphire-5', '#4f6bed', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-sapphire-6', '#7c96f9') }}
                {{ ishi.small_colorswatch('msdl-sapphire-7', '#a6bdff') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-midnightblue-1', '#242466', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-midnightblue-2', '#32318c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-midnightblue-3', '#413eb3', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-midnightblue-4', '#4f4bd9', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-midnightblue-5', '#6b69d6', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-midnightblue-6', '#bebee5') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-deepkoamaru-1', '#373277', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-deepkoamaru-2', '#49409a', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-deepkoamaru-3', '#5a4ebc', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-deepkoamaru-4', '#7160e8', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-deepkoamaru-5', '#8378de') }}
                {{ ishi.small_colorswatch('msdl-deepkoamaru-6', '#b5b5e2') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-windsor-1', '#49397a', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-windsor-2', '#5e4a9d', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-windsor-3', '#735bc1', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-windsor-4', '#886ce4', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-windsor-5', '#9c89e9') }}
                {{ ishi.small_colorswatch('msdl-windsor-6', '#c3c3f4') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-christalle-1', '#401b6c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-christalle-2', '#4e257f', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-christalle-3', '#5c2e91', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-christalle-4', '#744da9', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-christalle-5', '#8764b8', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-christalle-6', '#cfc4f5') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-scarletgum-1', '#460f54', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-scarletgum-2', '#5c126b', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-scarletgum-3', '#721481', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-scarletgum-4', '#881798', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-scarletgum-5', '#b146c2', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-scarletgum-6', '#dea2ed') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-palatinatepurple-1', '#5c005c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-palatinatepurple-2', '#800074', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-palatinatepurple-3', '#9a0089', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-palatinatepurple-4', '#b4009e', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-palatinatepurple-5', '#c239b3', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-palatinatepurple-6', '#de94e0') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-eggplant-1', '#77004d', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-eggplant-2', '#9b0062', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-eggplant-3', '#bf0077', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-eggplant-4', '#e3008c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-eggplant-5', '#e43ba6', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-eggplant-6', '#e8a3de') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-tyrianpurple-1', '#6b0036', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-tyrianpurple-2', '#970044', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-tyrianpurple-3', '#c30052', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-tyrianpurple-4', '#ea005e', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-tyrianpurple-5', '#ee3f86', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-tyrianpurple-6', '#edbed2') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-redberry-1', '#761721', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-redberry-2', '#a4262c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-redberry-3', '#d13438', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-redberry-4', '#ff4343', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-redberry-5', '#ff6767') }}
                {{ ishi.small_colorswatch('msdl-redberry-6', '#ff8c8c') }}
                {{ ishi.small_colorswatch('msdl-redberry-7', '#ffc0c0') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-indiantan-1', '#4d291c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-indiantan-2', '#603d30', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-indiantan-3', '#8e562e', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-indiantan-4', '#ac744c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-indiantan-5', '#bb9167') }}
                {{ ishi.small_colorswatch('msdl-indiantan-6', '#d8b094') }}
                {{ ishi.small_colorswatch('msdl-indiantan-7', '#f7d7c4') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-gablegreen-1', '#2d3f3a', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-gablegreen-2', '#3b534d', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-gablegreen-3', '#486860', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-gablegreen-4', '#567c73', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-gablegreen-5', '#7d9d95') }}
                {{ ishi.small_colorswatch('msdl-gablegreen-6', '#a3bfb7') }}
                {{ ishi.small_colorswatch('msdl-gablegreen-7', '#cae0d9') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-mirage-1', '#394146', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mirage-2', '#4a5459', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mirage-3', '#5a686c', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mirage-4', '#69797e', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mirage-5', '#859599') }}
                {{ ishi.small_colorswatch('msdl-mirage-6', '#a0aeb2') }}
                {{ ishi.small_colorswatch('msdl-mirage-7', '#bac8cc') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-mondo-1', '#4c4a48', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mondo-2', '#5d5a58', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mondo-3', '#6e6a68', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mondo-4', '#7a7574', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-mondo-5', '#989391') }}
                {{ ishi.small_colorswatch('msdl-mondo-6', '#b1adab') }}
                {{ ishi.small_colorswatch('msdl-mondo-7', '#cbc6c4') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-gray-1', '#1f1f1f', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-gray-2', '#2b2b2b', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-gray-3', '#393939', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-gray-4', '#767676', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-gray-5', '#cccccc') }}
                {{ ishi.small_colorswatch('msdl-gray-6', '#e6e6e6') }}
                {{ ishi.small_colorswatch('msdl-gray-7', '#f2f2f2') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('msdl-black', '#000000', 'dark-bg') }}
                {{ ishi.small_colorswatch('msdl-white', '#ffffff') }}
            </ul>
        </div>
    </div>
</div>