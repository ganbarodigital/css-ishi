{% import "ishi.twig" as ishi %}
# Callouts

## Introduction

### What Are Callouts For?

Use [panels](panels.html) and [callouts](callouts.html) when you need to draw the reader's attention to some text or an image.

* Panels are rounded boxes.
* Callouts are square boxes.

Otherwise, they support the exact same markup in all cases.

## A Basic Callout

To get a basic callout, wrap your content in a `<div>` or `<div>` with the `callout` class.

<div class="code-example">
    <header>
        <h4>Example: Basic Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <div class="callout">
This is a very basic callout.
            </div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout">
This is a basic callout.
</div>
```
        </div>
    </div>
</div>

By default, it gets the same background as the [`<pre>`](../typography/pre.html) element does.

Internally, a basic panel has padding to ensure that all the elements inside have a pleasing amount of space between themselves and the border of the callout.

## Callouts With Different Backgrounds

Ishi offers several alternative styles of callout.

### An Outline Callout

To create an outline callout, wrap your content in a `<div>` or `<div>` with the `callout callout--outline` classes.

<div class="code-example">
    <header>
        <h4>Example: Outline Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--outline" markdown="1">
This is an outline callout.

Notice how there's no background anymore, only the highlighting border?
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout--outline">
This is an outline callout.

Notice how there's no background anymore, only the highlighting border?
</div>
```
        </div>
    </div>
</div>

### A Gradient Callout

To create a callout with a gradient background, wrap your content in a `<div>` with the `callout callout--gradient` classes.

<div class="code-example">
    <header>
        <h4>Example: Gradient Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--gradient" markdown="1">
This is a callout with a subtle gradient background.

This is best used on smaller callouts.
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--gradient">
This is a callout with a subtle gradient background.

This is best used on smaller callouts.
</div>
```
        </div>
    </div>
</div>

### A Standout Callout

To create a callout that seems to standout above the rest of the page, wrap your content in a `<div>` with the `callout callout--standout` classes.

<div class="code-example">
    <header>
        <h4>Example: A Standout Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--standout" markdown="1">
This is a callout with a subtle drop-shadow effect to lift the callout off the page slightly.

It was originally designed for a real-time data dashboard.
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--standout">
This is a callout with a subtle drop-shadow effect to lift the callout off the page slightly.

It was originally designed for a real-time data dashboard.
</div>
```
        </div>
    </div>
</div>

### A Sunken Callout

To create a callout that seems to be sunk into the page, wrap your content in a `<div>` with the `callout callout--sunken` classes.

<div class="code-example">
    <header>
        <h4>Example: A Sunken Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--sunken" markdown="1">
This is a callout with a subtle drop-shadown effect to sink it slightly into the page.
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--sunken">
This is a callout with a subtle drop-shadown effect to sink it slightly into the page.
</div>
```
        </div>
    </div>
</div>

### Combining Backgrounds

You can combine any two of the `callout--outline` and `callout--gradient` classes with the `callout--standout` or `callout--sunken` classes.

<div class="code-example">
    <header>
        <h4>Example: Combining 'callout--standout' and 'callout--outline' Classes</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--standout callout--outline" markdown="1">
This is an outline callout that also stands out a little bit.
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--standout callout--outline">
This is an outline callout that also stands out a little bit.
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: Combining 'callout--sunken' and 'callout--outline' Classes</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--sunken callout--outline" markdown="1">
This is an outline callout that also sinks in a little bit.
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--sunken callout--outline">
This is an outline callout that also sinks in a little bit.
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: Combining 'callout--standout' and 'callout--gradient' Classes</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--standout callout--gradient" markdown="1">
This is a gradient callout that also stands out a little bit.
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--standout callout--gradient">
This is a gradient callout that also stands out a little bit.
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: Combining 'callout--sunken' and 'callout--gradient' Classes</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--sunken callout--gradient" markdown="1">
This is a gradient callout that also sinks in a little bit.
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--sunken callout--gradient">
This is a gradient callout that also sinks in a little bit.
</div>
```
        </div>
    </div>
</div>

### Adding Extra Context

Add any one of the [context classes](../utilities/context-classes.html) to your `callout` `<div>` to change the colour of the callout's border and default background. All heading elements (`h1` to `h6`) will change colour too.

<div class="code-example">
    <header>
        <h4>Example: An Attention Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--attention">
    <h4>Attention!</h4>
    <p>This is a callout using the <code>attention</code> class. You might find this more pleasing than the gray of the default <code>callout</code>.</p>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--attention">
    <h4>Attention!</h4>
    <p>This is a callout using the <code>attention</code> class. You might find this more pleasing than the gray of the default <code>callout</code>.</p>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: An Info Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--info">
    <h4>Information!</h4>
    <p>This is a callout using the <code>info</code> class.</p>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--info">
    <h4>Information!</h4>
    <p>This is a callout using the <code>info</code> class.</p>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A Success Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--success">
    <h4>Success!</h4>
    <p>This is a callout using the <code>success</code> class.</p>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--success">
    <h4>Success!</h4>
    <p>This is a callout using the <code>success</code> class.</p>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A Warning Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--warning">
    <h4>Warning!</h4>
    <p>This is a callout using the <code>warning</code> class.</p>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--warning">
    <h4>Warning!</h4>
    <p>This is a callout using the <code>warning</code> class.</p>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A Danger Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--danger">
    <h4>Danger!</h4>
    <p>This is a callout using the <code>danger</code> class.</p>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--danger">
    <h4>Danger!</h4>
    <p>This is a callout using the <code>danger</code> class.</p>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A Light Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--light">
    <h4>Danger!</h4>
    <p>This is a callout using the <code>callout--light</code> class.</p>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--light">
    <h4>Danger!</h4>
    <p>This is a callout using the <code>callout--</code> class.</p>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A Dark Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--dark">
    <h4>Danger!</h4>
    <p>This is a callout using the <code>callout--dark</code> class.</p>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--dark">
    <h4>Danger!</h4>
    <p>This is a callout using the <code>callout--dark</code> class.</p>
</div>
```
        </div>
    </div>
</div>

## Callouts That Alert

To create a callout with distinctive header box, use an `<div>` with the `callout callout--alert` classes. Inside, use a `<h4>`, `<h5>` or `<h6>` to create the header. Wrap your callout's content in a `<div>` with the `content` class.

<div class="code-example">
    <header>
        <h4>Example: An Alert Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--alert">
    <h4>Alert!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--alert">
    <h4>Attention!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
```
        </div>
    </div>
</div>

### Adding Extra Context

Add any one of the [context classes](../utilities/context-classes.html) to your `callout callout--alert` `<div>` to change the colour of the callout's border and heading.

<div class="code-example">
    <header>
        <h4>Example: An 'attention' Alert Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--alert callout--attention">
    <h4>Attention!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--attention callout--alert">
    <h4>Attention!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: An 'info' Alert Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--alert callout--info">
    <h4>Information!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--alert callout--info">
    <h4>Information!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A 'success' Alert Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--alert callout--success">
    <h4>Success!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--alert callout--success">
    <h4>Success!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A 'warning' Alert Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--alert callout--warning">
    <h4>Warning!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--alert callout--warning">
    <h4>Warning!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A 'danger' Alert Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--alert callout--danger">
    <h4>Danger!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--alert callout--danger">
    <h4>Danger!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A 'light' Alert Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--alert callout--light">
    <h4>Danger!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--alert callout--light">
    <h4>Danger!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
```
        </div>
    </div>
</div>

<div class="code-example">
    <header>
        <h4>Example: A 'dark' Alert Callout</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<div class="callout callout--alert callout--dark">
    <h4>Danger!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<div class="callout callout--alert callout--dark">
    <h4>Danger!</h4>
    <div class="content">
        <p>This is a callout designed to emphasise the heading.</p>
    </div>
</div>
```
        </div>
    </div>
</div>
