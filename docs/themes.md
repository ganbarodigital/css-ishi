---
layout: concepts
title: Themes
---

# Themes

## Adding Ishi To Your Sass Library

{% highlight bash %}
sass -I <where-you-put-ishi>/src ...
{% endhighlight %}

## Your Theme File

{% highlight scss %}
// step1: import Ishi's base first
@import "ishi/00-base/_include.scss";

// step 2: import any overrides to Ishi's default variables
@import "_colors.scss";

// step 3: per-device group imports and custom styling
//
// remember to change the layout import to the layout of your choice,
// or with your own custom layout
@media #{$media-group-a} {
    @import "ishi/10-typography/_group-a.scss";
    @import "ishi/20-components/_group-a.scss";
    @import "ishi/30-utilities/_group-a.scss";
    @import "ishi/40-structure/_group-a.scss";
    @import "ishi/50-layouts/layout-right/_group-a.scss";

    // add any markup that is unique to device group A
}

@media #{$media-group-b} {
    @import "ishi/10-typography/_group-b.scss";
    @import "ishi/20-components/_group-b.scss";
    @import "ishi/30-utilities/_group-b.scss";
    @import "ishi/40-structure/_group-b.scss";
    @import "ishi/50-layouts/layout-right/_group-b.scss";

    // add any markup that is unique to device group B
}

@media #{$media-group-c} {
    @import "ishi/10-typography/_group-c.scss";
    @import "ishi/20-components/_group-c.scss";
    @import "ishi/30-utilities/_group-c.scss";
    @import "ishi/40-structure/_group-c.scss";
    @import "ishi/50-layouts/layout-right/_group-c.scss";

    // add any markup that is unique to device group C
}

@media #{$media-group-d} {
    @import "ishi/10-typography/_group-d.scss";
    @import "ishi/20-components/_group-d.scss";
    @import "ishi/30-utilities/_group-d.scss";
    @import "ishi/40-structure/_group-d.scss";
    @import "ishi/50-layouts/layout-right/_group-d.scss";

    // add any markup that is unique to device group D
}
{% endhighlight %}