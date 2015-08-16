---
layout: frontpage
title: Getting Started
pageflow_name: getting-started
---
# Getting Started

Ishi runs on any computer which is already setup for Ruby and Node.JS.

## Installing Dependencies

Before you download a copy of Ishi, you need to have the following installed:

* Ruby 2.x (used by Sass)
* Node.JS 0.12 or later and npm (used by Postcss)
* git (used for downloading Ishi)
* make (used for installing tools)

Your operating system might already come with some of these.

If you want to build this website (Ishi's docs) yourself, you'll also need to have Jekyll 2.x installed.

## Cloning Ishi

Download Ishi by cloning our Github repository:

{% highlight bash %}
git clone https://github.com/ganbarodigital/css-ishi.git
{% endhighlight %}

## Installing Tools

Ishi uses the Ruby-based Sass compiler, and the Node.JS-based Postcss processor. You can use our handy `Makefile` to install these for you:

{% highlight bash %}
cd css-ishi
make tools
{% endhighlight %}

<div class="callout attention" markdown="1">
You will be prompted for your password when you run `make tools`. This is necessary to install the tools globally on your machine.
</div>

## Making Ishi Available

To use Ishi in your own Sass projects, add the `-I` flag on the command-line:

{% highlight bash %}
sass --compass -I <where-you-put-ishi>/src ...
{% endhighlight %}

At the moment, Ishi does rely on a function or two provided by Compass. We hope to do something about that in the future.

## Where To Use Ishi

Ishi doesn't provide any CSS files that you can simply drop into your own project to use. It provides a set of `.scss` files that you can include in your own theme.

Our [page on themes]({% include pageurl.html name='themes' %}) has more detail.