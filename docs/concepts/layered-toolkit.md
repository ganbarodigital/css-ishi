---
layout: concepts
title: A Layered Toolkit
pageflow_name: layered-toolkit
---

# {{page.title}}

## Introduction

Ishi isn't a CSS stylesheet like {% include externallink.html name='bootstrap' %} is. Ishi is a toolkit that you can use to generate your own CSS stylesheet. As a result, Ishi breaks down into several distinct areas:

1. Device-independent bits + your overrides
1. Device-dependent bits
1. Your theme to glue it all together
1. Your CSS stylesheet to tailor your theme to your content

<aside class="callout warning" markdown="1">
#### A Work In Progress

We're still learning how to create a CSS toolkit that is both extremely flexible _and_ comes with sensible defaults to save time.

Until Ishi hits v1.0, we're likely to break backwards-compatibility a few times as we figure this out.
</aside>
