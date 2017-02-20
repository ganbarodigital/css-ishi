{% import "ishi.twig" as ishi %}
# Structure

## Introduction

<p class="leader">"Markup with meaning" is what we strive for. Markup that describes what content is will outlive markup that describes how content will be displayed.</p>

Ishi isn't grid-based.

## Overview

* `body > header`
  * site navigation
  * banner
  * sub-navigation
* `body > main` is the page's main content
  * `body > main > .content` is an optional `<div>` to keep article and sidebar together
  * `body > main > article` should contain your main content
  * `body > main > aside.sidebar` should be your main sidebar area
* `body > footer` is where your footer goes
  * `body > footer > .content` is an optional `<div>` to style your footer's content all the same
  * `body > footer > .bootstrap` is an optional `<div>` or `<section>` to put a final strapline, copyright notice and so on

{{ ishi.content('flow') }}
