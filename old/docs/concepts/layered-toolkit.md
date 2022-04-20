{% import "ishi.twig" as ishi %}
# A Layered Toolkit

## Introduction

Ishi isn't a CSS stylesheet like {{ ishi.externallink('bootstrap') }} is. Ishi is a toolkit that you can use to generate your own CSS stylesheet. As a result, Ishi breaks down into several distinct areas:

1. Device-independent bits + your overrides
1. Device-dependent bits
1. Your Sass theme to glue it all together
1. Your CSS stylesheet to tailor your theme to your content

What are we trying to achieve with this approach?

* We want to be able to change a website's theme (colour scheme, look and feel, even layout) without editing any of the content at all. Changing content often means changing the software that generates the content. We want to avoid that where possible.
* We also want to be able to re-use a website's theme on other websites, without having all of those websites look exactly the same. We want {{ ishi.externallink('ganbarodigital') }}'s marketing pages, product / services pages, and documentation pages to all look like they belong to the same company without them all being locked into an identical look and structure.

<aside class="callout warning" markdown="1">
#### A Work In Progress

We're still learning how to create a CSS toolkit that is both extremely flexible _and_ comes with sensible defaults to save time.

Until Ishi hits v1.0, we're likely to break backwards-compatibility a few times as we figure this out.
</aside>

## Driven By Themes + Content Stylesheet

The Ishi toolkit proper is the device-independent bits (variables, mixins, and any global styles) and the device-dependent bits (everything that changes size or position on different devices).

Themes - still written in Sass - use the toolkit to define the look and feel:

* Override colours
* Apply styles to semantic markup

A theme is still content-agnostic. A theme provides generic CSS classes that can be applied to any number of different websites. You should be able to swap between two different themes without having to edit your content. That's the aim of a theme.

<aside class="callout attention" markdown="1">
For the moment, themes include layout positioning (such as sidebars). If, like us, you want a different page layout for marketing landing pages, product descriptions, and detailed documentation, you'll need to create different themes for each page. Unfortunately, that means having different CSS files for different types of pages on your websites.

We haven't worked out yet whether this is a good approach or not.
</aside>

Your content stylesheet pulls in the theme, and then defines any content-specific classes, layout, or styling required. This is the place where you create (for example) different classes for different blocks in your footer (such as your company contact details, company name, and so on).
