# Code Examples

## Introduction

Use a _code example_ to show the reader a piece of software code or markup, and (optionally) the output from that code.

## Markup

This component is built from:

* a container `<aside>` or `<div>` with the CSS class `code-example`
* an optional `<header>` with a `<h4>` title
* a container `<div>` with the CSS class `example-content`, containing:
    * an optional `<div>` with the CSS class `example-output`
    * an optional `<div>` with the CSS class `example-source`
* an optional `<footer>` with a `<h4>` title

Here's the markup:

```html
<aside class="code-example">
    <header>
        <h4>Example: A Basic Code Example</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
                This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-ishi-autohide="never" markdown="1">
            <pre class=" language-html"><code class=" language-html">
            <div class="panel">
                This is a basic panel component.
            </div>
            </code></pre>
        </div>
    </div>
</aside>
```

and here's a live example:

<aside class="code-example">
    <header>
        <h4>Example: A Basic Code Example</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-ishi-autohide="never" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
    </div>
</aside>

### Header Or Footer?

The _code example_ component supports both `<header>` and `<footer>` sections - but not at the same time!

Here's an example using a `<header>`:

<aside class="code-example">
    <header>
        <h4>Example: A Basic Code Example</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-ishi-autohide="never" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
    </div>
</aside>

and here's an example using a `<footer>`:

<aside class="code-example">
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-ishi-autohide="never" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
    </div>
    <footer>
        <h4>Example: A Basic Code Example</h4>
    </footer>
</aside>

<div class="callout warning" markdown="1">
#### Placement of Header and Footer

The `<header>` tag must be the first tag inside the `aside.code-example` or `div.code-example` container.

The `<footer>` tag must be the last tag inside the `aside.code-example` or `div.code-example` container.
</div>

### Output First, Or Source First?

A _code example_ contains two content `div`s:

* `div.example-output`: the result of running the example code, and
* `div.example-source`: the example code itself

You can put either of these content `div`s first.

Here's an example where the `<div.example-output>` comes before the `<div.example-source>`:

<aside class="code-example">
    <header>
        <h4>Example: A Basic Code Example</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-ishi-autohide="never" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
    </div>
</aside>

Here's an example where the `<div.example-source>` comes before the `<div.example-output>`:

<aside class="code-example">
    <header>
        <h4>Example: A Basic Code Example</h4>
    </header>
    <div class="example-content">
        <div class="example-source" data-ishi-autohide="never" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
    </div>
</aside>

## Default Styling

We try to limit our styling to the structural markup alone. We want your content markup to appear just as it would if it wasn't inside a _code example_.

* The `header` and `footer` tags are flexbox containers. (This is for the show/hide buttons, which we'll discuss in the next section).
* The `h4` tag inside is shown in bold, somewhat smaller than the main paragraph text. This is to distinguish it from the main paragraph text.
* The `div.example-content` has top and bottom borders, margins and padding.
* The `div.example-output` has no styling applied.
* The `div.example-source` has no styling applied.

## Auto-Hidden Source

Do you prefer to have the example code hidden by default, with a user-clickable toggle button to show / hide the example code?

This feature uses [JavaScript](javascript.html). Make sure you have added [Ishi's JavaScript to your page](javascript.html#installing-javascript).

Here's what it looks like if you use a `header`:

<aside class="code-example">
    <header>
        <h4>Example: A Basic Code Example</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-type="HTML" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
    </div>
</aside>

and here's what it looks like if you prefer to use a `footer`:

<aside class="code-example">
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-type="HTML" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
    </div>
    <footer>
        <h4>Example: A Basic Code Example</h4>
    </footer>
</aside>

### Enabling Auto-Hidden Source

Follow these steps:

1. First of all, add the `data-ishi-code-examples` attribute to your `body` tag:

   ```html
   <body data-ishi-code-examples="1">
   ...
   </body>
   ```

   This attribute tells our JavaScript to auto-hide all `div.example-source` elements on the page.

2. Add the `hidden` class to your `div.example-source`.

   ```html
   <div class="example-source hidden">
   ...
   </div>
   ```

   If you forget to do so, our JavaScript will add it for you. On some browsers, users will see the source (and then see it disappear) if our JavaScript has to add the `hidden` class for you.

3. Add the `data-type` attribute to your `div.example-source`. We use this value for the text of the show / hide button:

   ```html
   <div class="example-source hidden" data-type="HTML">
   ...
   </div>
   ```

### Custom Button Text

Use the `data-ishi-show` and `data-ishi-hide` attributes to completely control the text inside the show / hide buttons:

```html
<div class="example-source hidden" data-ishi-show="Reveal Example Code" data-ishi-hide="Conceal Example Code">
...
</div>
```

The JavaScript will ignore the `data-type` element completely:

<aside class="code-example">
    <header>
        <h4>Example: A Basic Code Example</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-ishi-show="Reveal Example Code" data-ishi-hide="Conceal Example Code" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
    </div>
</aside>

### Prevent Show / Hide Buttons

Use the `data-ishi-autohide=never` attribute to prevent Ishi:

* hiding the `div.example-source`, and
* adding the show / hide buttons

You must add this to each `div.example-source` that you want Ishi to ignore.

```html
<div class="example-source" data-ishi-autohide="never">
...
</div>
```

The result: the example source code is always visible, and cannot be hidden.

<aside class="code-example">
    <header>
        <h4>Example: A Basic Code Example</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <div class="panel">
This is a basic panel component.
            </div>
        </div>
        <div class="example-source" data-ishi-autohide="never" markdown="1">
```html
<div class="panel">
This is a basic panel component.
</div>
```
        </div>
    </div>
</aside>
