{% import "ishi.twig" as ishi %}
# Miscellaneous Colors

## Introduction

Finally, Ishi includes a miscellaneous collection of colors. They're taken from:

* the [list of colors by shade](https://en.wikipedia.org/wiki/List_of_colors_by_shade) from Wikipedia, and related pages on there
* the [CSS 4 Color list](https://drafts/csswg.org/css-color/) from the CSS 4 draft
* the [X11 color names list](https://en.wikipedia.org/wiki/X11_color_names), where the colors differ from the CSS 4 draft

We'll add more colors to this list as and when we come across them :)

<div class="callout warning" markdown="1">
#### Here Be Dragons!

They're not designed to provide a consistent or complementary color palette on their own.

If you build your own palette from these colors, make sure that you do extensive testing across a wide range of devices. As designers and developers, we're often using better-than-average equipment. Cheaper and older devices (the kind that your audience may well be using) often lack good contrast and color range.
</div>

## A-Z Of Colors

Here are all the colors, sorted by their name (not by their prefix). For example, the following colors can all be found under 'B' for 'blue':

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('blue', 'crayola', '#1f75fe', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blue', 'munsell', '#0093af', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blue', 'pantone', '#0018a8', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

We feel it's more natural than using the whole SCSS variable name to sort the colors. Don't forget you can always use <kbd>CTRL</kbd>+<kbd>F</kbd> (or <kbd>CMD</kbd>+<kbd>F</kbd> on MacOS) to search this page for the color you're looking for too.

<div class="callout info" markdown="1">
#### Not Sure How To Use These Colors?

Click on any color. This will load up a page full of details, including:

- SCSS variable(s),
- SCSS mixin(s),
- accessibility details
- automated analysis of the color's properties
</div>

## By Shade

These groupings (mostly) come from Wikipedia. Corrections happily accepted!

### Shades Of White

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('aliceblue', 'web', '#f0f8ff') }}
                {{ ishi.prefix_colorswatch('antiflashwhite', 'misc', '#f2f3f4') }}
                {{ ishi.prefix_colorswatch('antiquewhite', 'web', '#faebd7') }}
                {{ ishi.prefix_colorswatch('azure', 'web', '#f0ffff') }}
                {{ ishi.prefix_colorswatch('babypowder', 'crayola', '#fefefa') }}
                {{ ishi.prefix_colorswatch('beige', 'web', '#f5f5dc') }}
                {{ ishi.prefix_colorswatch('bone', 'misc', '#e3dac9') }}
                {{ ishi.prefix_colorswatch('champagne', 'trad', '#f7e7ce') }}
                {{ ishi.prefix_colorswatch('cornsilk', 'web', '#fff8dc') }}
                {{ ishi.prefix_colorswatch('cream', 'x11', '#fffdd0') }}
                {{ ishi.prefix_colorswatch('dutchwhite', 'resene', '#efdfbb') }}
                {{ ishi.prefix_colorswatch('ecru', 'iscc-nbs', '#c2b280') }}
                {{ ishi.prefix_colorswatch('eggshell', 'iscc-nbs', '#f0ead6') }}
                {{ ishi.prefix_colorswatch('flax', 'trad', '#eedc82') }}
                {{ ishi.prefix_colorswatch('floralwhite', 'web', '#fffaf0') }}
                {{ ishi.prefix_colorswatch('ghostwhite', 'web', '#f8f8ff') }}
                {{ ishi.prefix_colorswatch('honeydew', 'web', '#f0fff0') }}
                {{ ishi.prefix_colorswatch('ivory', 'web', '#fffff0') }}
                {{ ishi.prefix_colorswatch('lavenderblush', 'web', '#fff0f5') }}
                {{ ishi.prefix_colorswatch('linen', 'web', '#faf0e6') }}
                {{ ishi.prefix_colorswatch('mintcream', 'web', '#f5fffa') }}
                {{ ishi.prefix_colorswatch('navajowhite', 'web', '#ffdead') }}
                {{ ishi.prefix_colorswatch('oldlace', 'web', '#fdf5e6') }}
                {{ ishi.prefix_colorswatch('seashell', 'web', '#fff5ee') }}
                {{ ishi.prefix_colorswatch('snow', 'web', '#fffafa') }}
                {{ ishi.prefix_colorswatch('splashedwhite', 'misc', '#fefdff') }}
                {{ ishi.prefix_colorswatch('vanilla', 'iscc-nbs', '#f3e5ab') }}
                {{ ishi.prefix_colorswatch('wheat', 'web', '#f5deb3') }}
                {{ ishi.prefix_colorswatch('white', 'web', '#ffffff') }}
                {{ ishi.prefix_colorswatch('whitesmoke', 'web', '#f5f5f5') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Gray

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('ashgrey', 'iscc-nbs', '#b2beb5' ) }}
                {{ ishi.prefix_colorswatch('battleshipgray', 'iscc-nbs', '#848482', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('bluegray', 'crayola', '#6699cc') }}
                {{ ishi.prefix_colorswatch('cadetgray', 'iscc-nbs', '#91a3b0') }}
                {{ ishi.prefix_colorswatch('charcoal', 'iscc-nbs', '#36454F', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('cinereous', 'trad', '#98817b') }}
                {{ ishi.prefix_colorswatch('coolgray', 'iscc-nbs', '#9090C0') }}
                {{ ishi.prefix_colorswatch('darkgrey', 'web', '#a9a9a9') }}
                {{ ishi.prefix_colorswatch('darkslategrey', 'web', '#2f4f4f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('davysgrey', 'iscc-nbs', '#555555', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('dimgrey', 'web', '#696969', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('gainsboro', 'web', '#dcdcdc') }}
                {{ ishi.prefix_colorswatch('glaucous', 'iscc-nbs', '#6082b6', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('gray', 'spanish', '#989898' )}}
                {{ ishi.prefix_colorswatch('gray', 'web', '#808080', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('gray', 'x11', '#bebebe') }}
                {{ ishi.prefix_colorswatch('graycard', 'misc', '#7c7c7c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('graygreen', 'iscc-nbs', '#5e716a', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('gunmetal', 'misc', '#2a3439', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('jet', 'iscc-nbs', '#343434', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('lightgray', 'web', '#d3d3d3') }}
                {{ ishi.prefix_colorswatch('lightslategray', 'web', '#778899', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('marengo', 'misc', '#4c5866', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('nickel', 'misc', '#727472', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('platinum', 'trad', '#e5e4e2' )}}
                {{ ishi.prefix_colorswatch('rocketmetallic', 'resene', '#8a7f8d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('rosequartz', 'iscc-nbs', '#aa98a9') }}
                {{ ishi.prefix_colorswatch('silver', 'web', '#c0c0c0') }}
                {{ ishi.prefix_colorswatch('slategray', 'web', '#708090', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('taupe', 'iscc-nbs', '#483c32', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('taupegray', 'iscc-nbs', '#8b8589') }}
                {{ ishi.prefix_colorswatch('timberwolf', 'crayola', '#dbd7d2') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Black

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('black', 'web', '#000000', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blackbean', 'xona', '#3d0c02', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blackleatherjacket', 'crayola', '#253529', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blackolive', 'ral', '#3b3c36', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('cafenoir', 'iscc-nbs', '#4b3621', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('charcoal', 'iscc-nbs', '#36454F', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('charlestongreen', 'misc', '#232b2b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('ebony', 'trad', '#555d50', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('eerieblack', 'crayola', '#1b1b1b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('licorice', 'crayola', '#1a1110', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('noir', 'crayola', '#414a4c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('oynx', 'crayola', '#353839', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('phthalogreen', 'misc', '#123524', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('raisinblack', 'iscc-nbs', '#242124', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('taupe', 'iscc-nbs', '#483c32', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Magenta

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('amaranth', 'trad', '#ab274f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blush', 'crayola', '#de5d83') }}
                {{ ishi.prefix_colorswatch('darkmagenta', 'web', '#8b008b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkorchid', 'web', '#9932cc', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('fuchsia', 'web', '#ff00ff', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('hotmagenta', 'crayola', '#ff1dce', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('indigo', 'web', '#4b0082', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('magenta', 'crayola', '#f653a6') }}
                {{ ishi.prefix_colorswatch('magenta', 'pantone', '#d0417e', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('magenta', 'web', '#ff00ff', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('magentadye', 'misc', '#ca1f7b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('magentahaze', 'pantone', '#9f4576', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('orchid', 'web', '#da70d6') }}
                {{ ishi.prefix_colorswatch('pigmentmagenta', 'cmyk', '#ff0090', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('plum', 'crayola', '#8e4585', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purplepizzazz', 'crayola', '#fe4eda') }}
                {{ ishi.prefix_colorswatch('quinacridonemagenta', 'liquitex', '#8e3a59', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('razzledazzlerose', 'crayola', '#ff33cc', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('shockingpink', 'crayola', '#ff6fff') }}
                {{ ishi.prefix_colorswatch('shockingpink', 'misc', '#fc0fc0', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('skymagenta', 'misc', '#cf71af') }}
                {{ ishi.prefix_colorswatch('steelpink',  'crayola', '#cc33cc', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('telemagenta', 'ral', '#cf3476', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Pink

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('amaranthpink', 'trad', '#f19cbb') }}
                {{ ishi.prefix_colorswatch('babypink', 'iscc-nbs', '#f4c2c2') }}
                {{ ishi.prefix_colorswatch('barbiepink', 'pantone', '#da1884', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('brightpink', 'misc', '#ff007f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('brinkpink', 'crayola', '#fb607f') }}
                {{ ishi.prefix_colorswatch('cameopink', 'iscc-nbs', '#efbbcc') }}
                {{ ishi.prefix_colorswatch('carnationpink', 'crayola', '#ffa6c9') }}
                {{ ishi.prefix_colorswatch('champagnepink', 'pantone', '#f1ddcf') }}
                {{ ishi.prefix_colorswatch('charmpink', 'plochere', '#e68fac') }}
                {{ ishi.prefix_colorswatch('cherryblossompink', 'trad', '#ffb7c5') }}
                {{ ishi.prefix_colorswatch('chinapink', 'plochere', '#de6fa1') }}
                {{ ishi.prefix_colorswatch('coralpink', 'iscc-nbs', '#f88379') }}
                {{ ishi.prefix_colorswatch('cottoncandy', 'crayola', '#ffbcd9') }}
                {{ ishi.prefix_colorswatch('deeppink', 'web', '#ff1493', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('deeppinklight', 'xona', '#ff5ccd') }}
                {{ ishi.prefix_colorswatch('fairytale', 'pantone', '#f2c1d1') }}
                {{ ishi.prefix_colorswatch('fandangopink', 'pantone', '#de5285', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('hotpink', 'web', '#ff69b4') }}
                {{ ishi.prefix_colorswatch('lavender', 'crayola', '#fbaed2') }}
                {{ ishi.prefix_colorswatch('lightcoral', 'web', '#f08080') }}
                {{ ishi.prefix_colorswatch('lighthotpink', 'xona', '#ffb3de') }}
                {{ ishi.prefix_colorswatch('lightpink', 'web', '#ffb6c1') }}
                {{ ishi.prefix_colorswatch('mexicanpink', 'misc', '#e4007c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('mimipink', 'plochere', '#ffdae9') }}
                {{ ishi.prefix_colorswatch('mistyrose', 'web', '#ffe4e1') }}
                {{ ishi.prefix_colorswatch('mountbattenpink', 'misc', '#997a8d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('newyorkpink', 'xona', '#d7837f') }}
                {{ ishi.prefix_colorswatch('orchidpink', 'pantone', '#f2bdcd') }}
                {{ ishi.prefix_colorswatch('palepink', 'iscc-nbs', '#f9ccca') }}
                {{ ishi.prefix_colorswatch('paradisepink', 'pantone', '#e63e62', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('pastelpink', 'iscc-nbs', '#dea5a4') }}
                {{ ishi.prefix_colorswatch('persianpink', 'trad', '#f77fbe') }}
                {{ ishi.prefix_colorswatch('piggypink', 'crayola', '#fddde6') }}
                {{ ishi.prefix_colorswatch('pink', 'baker-miller', '#ff91af') }}
                {{ ishi.prefix_colorswatch('pink', 'french', '#fd6c9e') }}
                {{ ishi.prefix_colorswatch('pink', 'pantone', '#d74894', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('pink', 'spanish', '#f7bfbe') }}
                {{ ishi.prefix_colorswatch('pink', 'web', '#ffc0cb') }}
                {{ ishi.prefix_colorswatch('pinklace', 'xona', '#ffddf4') }}
                {{ ishi.prefix_colorswatch('pinklavender', 'pantone', '#d8b2d1') }}
                {{ ishi.prefix_colorswatch('queenpink', 'plochere', '#e8ccd7') }}
                {{ ishi.prefix_colorswatch('shockingpink', 'crayola', '#ff6fff', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('shockingpink', 'misc', '#fc0fc0', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('silverpink', 'plochere', '#c4aead') }}
                {{ ishi.prefix_colorswatch('solidpink', 'xona', '#893843', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('steelpink',  'crayola', '#cc33cc', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('superpink', 'pantone', '#cf6ba9') }}
                {{ ishi.prefix_colorswatch('tangopink', 'plochere', '#e4717a') }}
                {{ ishi.prefix_colorswatch('ticklemepink', 'crayola', '#fc89ac') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Red

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('barnred', 'milkpaint', '#7c0a02', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('cardinalred', 'trad', '#c41e3a', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('carmine', 'pourpre', '#960018', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('chilired', 'misc', '#e23d28', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('crimson', 'ou', '#990000', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('crimson', 'web', '#dc143c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkred', 'web', '#8b0000', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkred', 'x11', '#a94442', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('desire', 'resene', '#ea3c53', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('firebrick', 'web', '#b22222', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('fireenginered', 'misc', '#ce2029', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('folly', 'misc', '#ff004f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('indianred', 'web', '#cd5c5c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('lust', 'iscc-nbs', '#e62020', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('maroon', 'web', '#800000', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('maroon', 'x11', '#b03060', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('mediumorchid', 'web', '#ba55d3', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('pigmentred', 'cmyk', '#ed1c24', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('red', 'cornell', '#b31b1b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('red', 'crayola', '#ee204d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('red', 'munsell', '#f2003c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('red', 'ncs', '#c40233', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('red', 'pantone', '#ed2939', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('red', 'spanish', '#e60026', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('red', 'web', '#ff0000', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('redwood', 'pantone', '#a45a52', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('ruby', 'trad', '#e0115f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('rustyred', 'crayola', '#da2c43', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('salmon', 'web', '#fa8072') }}
                {{ ishi.prefix_colorswatch('salmonpink', 'crayola', '#ff91a4') }}
                {{ ishi.prefix_colorswatch('scarlet', 'misc', '#ff2400', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('turkeyred', 'misc', '#a91101', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Brown

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('amber', 'ciecd', '#ffbf00') }}
                {{ ishi.prefix_colorswatch('beaver', 'crayola', '#9f8170') }}
                {{ ishi.prefix_colorswatch('beige', 'web', '#f5f5dc') }}
                {{ ishi.prefix_colorswatch('bisque', 'web', '#ffe4c4') }}
                {{ ishi.prefix_colorswatch('bistre', 'misc', '#3d2b1f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blancedalmond', 'web', '#ffebcd') }}
                {{ ishi.prefix_colorswatch('brown', 'misc', '#964b00', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('brown', 'web', '#a52a2a', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('buff', 'trad', '#f0dc82') }}
                {{ ishi.prefix_colorswatch('burlywood', 'web', '#deb887') }}
                {{ ishi.prefix_colorswatch('burntumber', 'xona', '#8a3324', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('chestnut', 'trad', '#954535', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('chocolate', 'trad', '#7b3f00', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('chocolate', 'web', '#d2691e', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('desertsand', 'crayola', '#edc9af') }}
                {{ ishi.prefix_colorswatch('khaki', 'misc', '#c3b091') }}
                {{ ishi.prefix_colorswatch('khaki', 'web', '#f0e68c') }}
                {{ ishi.prefix_colorswatch('kobicha', 'jtc', '#6b4423', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('mediumtaupe', 'misc', '#674c47', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('peru', 'web', '#cd853f') }}
                {{ ishi.prefix_colorswatch('rawumber', 'iscc-nbs', '#826644', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('rosybrown', 'web', '#bc8f8f') }}
                {{ ishi.prefix_colorswatch('russet', 'iscc-nbs', '#80461b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('sandybrown', 'web', '#f4a460') }}
                {{ ishi.prefix_colorswatch('sienna', 'web', '#a0522d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('smokeytopaz', 'crayola', '#832a0d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('tan', 'web', '#d2b48c') }}
                {{ ishi.prefix_colorswatch('taupe', 'iscc-nbs', '#483c32', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('woodbrown', 'ridgeway', '#c19a6b') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Orange

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('alloyorange', 'crayola', '#c46210', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('apricot', 'trad', '#fbceb1') }}
                {{ ishi.prefix_colorswatch('atomictangerine', 'crayola', '#ff9966') }}
                {{ ishi.prefix_colorswatch('bittersweet', 'crayola', '#fe6f5e') }}
                {{ ishi.prefix_colorswatch('bittersweetshimmer', 'crayola', '#bf4f51', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('burntorange', 'uta', '#bf5700', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('carrotorange', 'trad', '#ed9121') }}
                {{ ishi.prefix_colorswatch('coral', 'web', '#ff7f50') }}
                {{ ishi.prefix_colorswatch('darkgoldenrod', 'web', '#b8860b') }}
                {{ ishi.prefix_colorswatch('darkorange', 'web', '#ff8c00') }}
                {{ ishi.prefix_colorswatch('darksalmon', 'web', '#e9967a') }}
                {{ ishi.prefix_colorswatch('giantsorange', 'misc', '#fe5a1d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('isabelline', 'misc', '#f4f0ec') }}
                {{ ishi.prefix_colorswatch('lightorange', 'crayola', '#fed8b1') }}
                {{ ishi.prefix_colorswatch('lightsalmon', 'web', '#ffa07a') }}
                {{ ishi.prefix_colorswatch('melon', 'crayola', '#fdbcb4') }}
                {{ ishi.prefix_colorswatch('moccasin', 'web', '#ffe4b5') }}
                {{ ishi.prefix_colorswatch('orange', 'crayola', '#ff7538') }}
                {{ ishi.prefix_colorswatch('orange', 'misc', '#ff7f00') }}
                {{ ishi.prefix_colorswatch('orange', 'pantone', '#ff5800', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('orange', 'princeton', '#ee7f2d') }}
                {{ ishi.prefix_colorswatch('orange', 'spanish', '#e86100', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('orange', 'ut', '#ff8200') }}
                {{ ishi.prefix_colorswatch('orange', 'web', '#ffa500') }}
                {{ ishi.prefix_colorswatch('orangepeel', 'trad', '#ff9f00') }}
                {{ ishi.prefix_colorswatch('orangered', 'web', '#ff4500', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('papayawhip', 'web', '#ffefd5') }}
                {{ ishi.prefix_colorswatch('peach', 'trad', '#ffe5b4') }}
                {{ ishi.prefix_colorswatch('peachpuff', 'web', '#ffdab9') }}
                {{ ishi.prefix_colorswatch('persianorange', 'iscc-nbs', '#d99058') }}
                {{ ishi.prefix_colorswatch('persimmon', 'trad', '#ec5800', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('pumpkin', 'trad', '#ff7518') }}
                {{ ishi.prefix_colorswatch('saddlebrown', 'web', '#f4a460') }}
                {{ ishi.prefix_colorswatch('tomato', 'web', '#ff6347') }}
                {{ ishi.prefix_colorswatch('vermilion', 'trad', '#e34234', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Yellow

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('canaryyellow', 'misc', '#ffff99') }}
                {{ ishi.prefix_colorswatch('cream', 'x11', '#ffffcc') }}
                {{ ishi.prefix_colorswatch('darkkhaki', 'web', '#bdb76b') }}
                {{ ishi.prefix_colorswatch('gold', 'web', '#ffd700') }}
                {{ ishi.prefix_colorswatch('goldenrod', 'web', '#daa520') }}
                {{ ishi.prefix_colorswatch('lemon', 'crayola', '#fdff00') }}
                {{ ishi.prefix_colorswatch('lemonchiffon', 'web', '#fffacd') }}
                {{ ishi.prefix_colorswatch('lightgoldenrodyellow', 'web', '#fafad2') }}
                {{ ishi.prefix_colorswatch('lightyellow', 'web', '#ffffe0') }}
                {{ ishi.prefix_colorswatch('maximumyellow', 'crayola', '#fafa37') }}
                {{ ishi.prefix_colorswatch('mellowyellow', 'plochere', '#f8de7e') }}
                {{ ishi.prefix_colorswatch('olive', 'web', '#808000', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('palegoldenrod', 'web', '#eee8aa') }}
                {{ ishi.prefix_colorswatch('paleyellow', 'misc', '#fcf8e3') }}
                {{ ishi.prefix_colorswatch('processyellow', 'cmyk', '#ffef00') }}
                {{ ishi.prefix_colorswatch('royalyellow', 'iscc-nbs', '#fada5e') }}
                {{ ishi.prefix_colorswatch('safetyyellow', 'ansi', '#eed202') }}
                {{ ishi.prefix_colorswatch('unmellowyellow', 'crayola', '#ffff66') }}
                {{ ishi.prefix_colorswatch('yellow', 'crayola', '#fce883') }}
                {{ ishi.prefix_colorswatch('yellow', 'munsell', '#efcc00') }}
                {{ ishi.prefix_colorswatch('yellow', 'ncs', '#ffd300') }}
                {{ ishi.prefix_colorswatch('yellow', 'pantone', '#fedf00') }}
                {{ ishi.prefix_colorswatch('yellow', 'web', '#ffff00') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Green

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('armygreen', 'misc', '#4b5320', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('artichoke', 'iscc-nbs', '#8f9779') }}
                {{ ishi.prefix_colorswatch('artichoke', 'pantone', '#4b6f44', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('asparagus', 'crayola', '#87a96b') }}
                {{ ishi.prefix_colorswatch('avocado', 'pourpre', '#568203', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('bottlegreen', 'encycolorpedia', '#006a4e', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('brightgreen', 'hexcode', '#66ff00') }}
                {{ ishi.prefix_colorswatch('brightmint', 'misc', '#4fffb0') }}
                {{ ishi.prefix_colorswatch('brunswickgreen', 'bsc', '#1e3e2e', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('brunswickgreen', 'misc', '#1b4d3e', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('cadetblue', 'web', '#5f9ea0') }}
                {{ ishi.prefix_colorswatch('celadon', 'encycolorpedia', '#ace1af') }}
                {{ ishi.prefix_colorswatch('celadongreen', 'encycolorpedia', '#2f847c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkgreen', 'encycolorpedia', '#013220', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkgreen', 'web', '#006400', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkmossgreen', 'encycolorpedia', '#4a5d23', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkolivegreen', 'web', '#556b2f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkpastelgreen', 'encycolorpedia', '#03c03c') }}
                {{ ishi.prefix_colorswatch('darkseagreen', 'web', '#8fbc8f') }}
                {{ ishi.prefix_colorswatch('emerald', 'trad', '#50c878') }}
                {{ ishi.prefix_colorswatch('feldgrau', 'misc', '#4d5d53', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('fern', 'crayola', '#71bc78') }}
                {{ ishi.prefix_colorswatch('fern', 'misc', '#4f7942', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('forestgreen', 'up', '#014421', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('forestgreen', 'web', '#228b22', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'calpolypomona', '#1e4d2b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'castleton', '#00563b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'crayola', '#1cac78') }}
                {{ ishi.prefix_colorswatch('green', 'dartmouth', '#00693e', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'go', '#00ab66') }}
                {{ ishi.prefix_colorswatch('green', 'india', '#138808', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'islamic', '#009000', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'msu', '#18453b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'munsell', '#00a877', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'ncs', '#009f6b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'pakistan', '#006600', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'pantone', '#00ad83') }}
                {{ ishi.prefix_colorswatch('green', 'sacramentostate', '#043927', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'spanish', '#009150', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('green', 'web', '#008000', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('greenyellow', 'web', '#adff2f') }}
                {{ ishi.prefix_colorswatch('harlequin', 'trad', '#3fff00') }}
                {{ ishi.prefix_colorswatch('hookersgreen', 'misc', '#49796b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('huntergreen', 'iscc-nbs', '#355e3b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('jade', 'misc', '#00a86b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('junglegreen', 'crayola', '#29ab87') }}
                {{ ishi.prefix_colorswatch('kellygreen', 'misc', '#4cbb17') }}
                {{ ishi.prefix_colorswatch('laurelgreen', 'trad', '#a9ba9d') }}
                {{ ishi.prefix_colorswatch('lawngreen', 'web', '#7cfc00') }}
                {{ ishi.prefix_colorswatch('lightgreen', 'web', '#90ee90') }}
                {{ ishi.prefix_colorswatch('lime', 'web', '#00ff00') }}
                {{ ishi.prefix_colorswatch('limegreen', 'web', '#32cd32') }}
                {{ ishi.prefix_colorswatch('malachite', 'trad', '#0bda51') }}
                {{ ishi.prefix_colorswatch('mantis', 'xona', '#74c365') }}
                {{ ishi.prefix_colorswatch('mediumaquamarine', 'web', '#66cdaa') }}
                {{ ishi.prefix_colorswatch('mediumseagreen', 'web', '#3cb371') }}
                {{ ishi.prefix_colorswatch('mediumspringgreen', 'web', '#00fa9a') }}
                {{ ishi.prefix_colorswatch('midnightgreen', 'misc', '#004953', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('mintgreen', 'x11', '#98fb98') }}
                {{ ishi.prefix_colorswatch('mossgreen', 'iscc-nbs', '#8a9a5b') }}
                {{ ishi.prefix_colorswatch('myrtlegreen', 'iscc-nbs', '#317873', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('neongreen', 'misc', '#39ff14') }}
                {{ ishi.prefix_colorswatch('olivedrab', 'web', '#6b8e23', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('olivedrab7', 'misc', '#3c341f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('olivedrabcamouflage', 'misc', '#544f3d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('olivine', 'misc', '#9ab973') }}
                {{ ishi.prefix_colorswatch('palegreen', 'web', '#98fb98') }}
                {{ ishi.prefix_colorswatch('parisgreen', 'misc', '#50c878') }}
                {{ ishi.prefix_colorswatch('persiangreen', 'iscc-nbs', '#00a693', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('pigmentgreen', 'cmyk', '#00a550', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('pinegreen', 'crayola', '#01796f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('riflegreen', 'pantone', '#444c38', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('russiangreen', 'iscc-nbs', '#679267', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('seagreen', 'web', '#2e8b57', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('screamingreen', 'crayola', '#76ff7a') }}
                {{ ishi.prefix_colorswatch('shamrockgreen', 'trad', '#009e60', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('springgreen', 'web', '#00ff7f') }}
                {{ ishi.prefix_colorswatch('teagreen', 'encycolorpedia', '#d0f0c0') }}
                {{ ishi.prefix_colorswatch('teal', 'web', '#008080', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('yellowgreen', 'web', '#9acd32') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Cyan

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('aeroblue', 'sharpie', '#c9ffe5') }}
                {{ ishi.prefix_colorswatch('aqua', 'web', '#00ffff') }}
                {{ ishi.prefix_colorswatch('aquamarine', 'web', '#7fffd4') }}
                {{ ishi.prefix_colorswatch('blue', 'tiffany', '#81d8d0') }}
                {{ ishi.prefix_colorswatch('bluegreen', 'crayola', '#0d98ba', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('caribbeancurrent', 'behr', '#006d6f', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('celeste', 'misc', '#b2ffff') }}
                {{ ishi.prefix_colorswatch('cerulean', 'misc', '#007ba7', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('chartreuse', 'web', '#7ffff0') }}
                {{ ishi.prefix_colorswatch('cyan', 'cmyk', '#00b7eb') }}
                {{ ishi.prefix_colorswatch('cyan', 'web', '#00ffff') }}
                {{ ishi.prefix_colorswatch('darkcyan', 'web', '#008b8b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkturquoise', 'web', '#00ced1') }}
                {{ ishi.prefix_colorswatch('electricblue', 'misc', '#7df9ff') }}
                {{ ishi.prefix_colorswatch('greenblue', 'crayola', '#1164b4', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('keppel', 'xona', '#3ab09e') }}
                {{ ishi.prefix_colorswatch('lightcyan', 'web', '#e0ffff') }}
                {{ ishi.prefix_colorswatch('lightseagreen', 'web', '#20b2aa') }}
                {{ ishi.prefix_colorswatch('mediumturquoise', 'web', '#48d1cc') }}
                {{ ishi.prefix_colorswatch('paleturquoise', 'web', '#afeeee') }}
                {{ ishi.prefix_colorswatch('robineggblue', 'crayola', '#00cccc') }}
                {{ ishi.prefix_colorswatch('skyblue', 'crayola', '#80daeb') }}
                {{ ishi.prefix_colorswatch('turquoise', 'web', '#40e0d0') }}
                {{ ishi.prefix_colorswatch('verdigris', 'encycolorpedia', '#43b3ae') }}
                {{ ishi.prefix_colorswatch('viridian', 'trad', '#40826d', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Blue

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('babyblue', 'trad', '#89cff0') }}
                {{ ishi.prefix_colorswatch('blue', 'crayola', '#1f75fe', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blue', 'egyptian', '#1034a6', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blue', 'munsell', '#0093af', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blue', 'ncs', '#0087bd', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blue', 'pantone', '#0018a8', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blue', 'spanish', '#0070bb', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('blue', 'web', '#0000ff', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('cornflowerblue', 'web', '#6495ed') }}
                {{ ishi.prefix_colorswatch('darkblue', 'web', '#00008b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkslateblue', 'web', '#483d8b', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('deepskyblue', 'web', '#00bfff') }}
                {{ ishi.prefix_colorswatch('dodgerblue', 'web', '#1e90ff', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('independence', 'iscc-nbs', '#4c516d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('lavender', 'web', '#e6e6fa') }}
                {{ ishi.prefix_colorswatch('liberty', 'iscc-nbs', '#545aa7', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('lightblue', 'web', '#add8e6') }}
                {{ ishi.prefix_colorswatch('lightskyblue', 'web', '#87cefa') }}
                {{ ishi.prefix_colorswatch('lightsteelblue', 'web', '#b0c4de') }}
                {{ ishi.prefix_colorswatch('mediumblue', 'web', '#0000cd', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('mediumslateblue', 'web', '#7b68ee', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('midnightblue', 'web', '#191970', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('morningblue', 'iscc-nbs', '#8da399') }}
                {{ ishi.prefix_colorswatch('navy', 'web', '#000080', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('paynegray', 'misc', '#536878', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('periwinkle', 'trad', '#ccccff') }}
                {{ ishi.prefix_colorswatch('pigmentblue', 'cmyk', '#333399', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('powderblue', 'web', '#b0e0e6') }}
                {{ ishi.prefix_colorswatch('resolutionblue', 'xona', '#002387', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('royalblue', 'web', '#4169e1', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('skyblue', 'web', '#87ceeb') }}
                {{ ishi.prefix_colorswatch('spacecadet', 'resene', '#1d2951', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('steelblue', 'web', '#4682b4', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('ultramarine', 'misc', '#3f00ff', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Purple

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('byzantium', 'iscc-nbs', '#702963', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkpurple', 'iscc-nbs', '#301934', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('eminence', 'xona', '#6c3082', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('heliotrope', 'trad', '#df73ff') }}
                {{ ishi.prefix_colorswatch('mardigras', 'xona', '#880085', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('mauve', 'trad', '#e0b0ff') }}
                {{ ishi.prefix_colorswatch('mediumpurple', 'web', '#9370Db') }}
                {{ ishi.prefix_colorswatch('mediumvioletred', 'web', '#c71585', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('mulberry', 'crayola', '#c54b8c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('palatinate', 'misc', '#682860', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('pansypurple', 'iscc-nbs', '#78184a', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('pearlypurple', 'crayola', '#b768a2') }}
                {{ ishi.prefix_colorswatch('phlox', 'trad', '#df00ff', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('plum', 'web', '#dda0dd') }}
                {{ ishi.prefix_colorswatch('pompandpower', 'iscc-nbs', '#86608e', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purple', 'ksu', '#512888', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purple', 'munsell', '#9f00c5', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purple', 'northwestern', '#4e2a84', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purple', 'tyrian', '#66023c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purple', 'web', '#800080', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purple', 'x11', '#a020f0', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purpletaupe', 'misc', '#50404d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('purpureus', 'iscc-nbs', '#9a4eae', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('rebeccapurple', 'web', '#663399', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('royalpurple', 'crayola', '#7851a9', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('slateblue', 'web', '#6a5acd', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('thistle', 'web', '#d8bfd8') }}
            </ul>
        </div>
    </div>
</div>

### Shades Of Violet

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.prefix_colorswatch('africanviolet', 'pantone', '#b284be') }}
                {{ ishi.prefix_colorswatch('blueviolet', 'web', '#8a2be2', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('chineseviolet', 'pantone', '#856088', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('darkviolet', 'web', '#9400d3', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('electricviolet', 'misc', '#8f00ff', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('englishviolet', 'iscc-nbs', '#563c5c', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('grape', 'crayola', '#6f2da8', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('lavender', 'trad', '#b57edc') }}
                {{ ishi.prefix_colorswatch('palevioletred', 'web', '#db7093') }}
                {{ ishi.prefix_colorswatch('russianviolet', 'iscc-nbs', '#32174d', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('violet', 'jtc', '#5b3256', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('violet', 'misc', '#7f00ff', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('violet', 'pourpre', '#8806ce', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('violet', 'spanish', '#4c2882', 'dark-bg') }}
                {{ ishi.prefix_colorswatch('violet', 'web', '#ee82ee') }}
                {{ ishi.prefix_colorswatch('vividviolet', 'misc', '#9f00ff', 'dark-bg') }}
            </ul>
        </div>
    </div>
</div>
