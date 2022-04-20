---
stu_title: Getting Started STU!!!
next_file: goals.html
---
# {{stu_title}}

Ishi runs on any computer which is already setup for Node.JS.

## Installing Dependencies

Before you download a copy of Ishi, you need to have the following installed:

* Node.JS and `npm` (used for building Ishi)
* git (used for downloading Ishi)

Your operating system might already come with some of these.

If you want to build this website (Ishi's docs) yourself, you'll also need to have Jekyll 2.x installed.

## Cloning Ishi

Download Ishi by cloning our Github repository:

<pre class="language-bash command-line" data-user="you" data-host="localhost"><code class="language-bash">
git clone https://github.com/ganbarodigital/css-ishi.git
</code></pre>

## Installing Tools

Ishi uses [`node-sass`](https://github.com/sass/node-sass). You can install all required tools via `npm`:

<pre class="language-bash command-line" data-user="you" data-host="localhost"><code class="language-bash">
cd css-ishi
npm install
</code></pre>

## Making Ishi Available

To use Ishi in your own Sass projects, add the `--include-path` flag on the command-line:

<pre class="language-bash command-line" data-user="you" data-host="localhost"><code class="language-bash">
node_modules/.bin/node-sass --include-path src docs-template/theme.scss > docs-template/assets/theme.css
</code></pre>

## Where To Use Ishi

Ishi doesn't provide any CSS files that you can simply drop into your own project to use. It provides a set of `.scss` files that you can include in your own theme.

Our [page on themes](themes/) has more detail.
