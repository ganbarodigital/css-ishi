---
layout: concepts
title: Device Groups
pageflow_name: device-groups
---

# Device Groups

## Introduction

Ishi uses CSS media queries to look its very best on your favourite device, whether that's your smartphone, your tablet, or your desktop or laptop computer. These media queries target _device groups_. The inspiration for this approach came from the BBC.

The BBC has rich experience in publishing written content that has to be available just about everywhere. In particular, we're big fans of how the {% include externallink.html name='bbc-gel' %} are approaching the difficult topic of responsive websites.

Unlike many popular CSS frameworks / toolkits, the BBC GEL Guidelines aren't organised around groups such as 'extra-small', 'small', 'medium', or 'large'. Instead, the BBC GEL Guidelines define groups based on the type of device you're likely to be using. The idea is to style each group so that your website looks the best it can on each type of device.

## Supported Groups

Each [Ishi theme]({% include pageurl.html name='themes' %}) supports these device groups:

* __Group A:__ feature phones (up to 320px wide)
* __Group B:__ smart phones (up to 600px wide)
* __Group C:__ tablets (up to 1006px wide)
* __Group D:__ desktops and laptops (over 1006px wide)

We may add __Group E__ in the future to support TV / so-called "big screen" UIs if there is a need for a different UI for those devices.

## Why It Works

This approach works because the vast majority of people have their browsers full-screen.

* If you're on a smart phone or a tablet, you currently don't have a choice in this.
* Most laptop screens are small enough that people tend to run the browsers full-screen.
* Desktops are the one device where some people do make their browser windows smaller. If this happens, they'll see everything resize and reflow to the tablet settings.

You can try this for yourself by visiting the [the BBC News website]({% include externalurl.html name='bbc-news' %}) from your desktop and resizing the browser.

## How It Works

We've defined media queries for each device group, as a Sass variable:

{% highlight scss %}
$media-group-a: "(max-width: 320px)";
$media-group-b: "(min-width: 320px) and (max-width: 600px)";
$media-group-c: "(min-width: 601px) and (max-width: 1007px)";
$media-group-d: "(min-width: 1007px)";
{% endhighlight %}

In your theme's `_main.scss` file, you would do the following:

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
    @import "ishi/_group-a.inc.scss";
    @import "ishi/50-layouts/sidebar-below/_group-a.scss";

    // add any markup that is unique to device group A
    // or import it from a file in your theme folder
}

@media #{$media-group-b} {
    @import "ishi/_group-b.inc.scss";
    @import "ishi/50-layouts/sidebar-below/_group-b.scss";

    // add any markup that is unique to device group B
    // or import it from a file in your theme folder
}

@media #{$media-group-c} {
    @import "ishi/_group-c.inc.scss";
    @import "ishi/50-layouts/sidebar-below/_group-c.scss";

    // add any markup that is unique to device group C
    // or import it from a file in your theme folder
}

@media #{$media-group-d} {
    @import "ishi/_group-d.inc.scss";
    @import "ishi/50-layouts/sidebar-left/_group-d.scss";

    // add any markup that is unique to device group D
    // or import it from a file in your theme folder
}
{% endhighlight %}

Each device group gets its own CSS for typography, components, utilities, structure, and your chosen layout. Ishi doesn't have to compromise and try to find (for example) a font-size that sort-of works on each device. This approach allows Ishi to set exactly the desired font-size - or any other CSS property for that matter - that best suits each target device.