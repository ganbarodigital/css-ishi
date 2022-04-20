# Context Classes

Ishi provides several semantic context classes. Use them to tell your readers that there's something different about a particular piece of your content.

You can use the class to change all of the content, or selectively apply just the foreground or background color. You can also combine them with the `alert` class to invert the colors.

CSS Class | Background Only | Foreground Only
----------|------------------|-----------------
`block--attention` | `block--attention-bg` | `block--attention-fg`
`block--info` | `block--info-bg` | `block--info-fg`
`block--success` | `block--success-bg` | `block--success-fg`
`block--warning` | `block--warning-bg` | `block--warning-fg`
`block--danger` | `block--danger-bg` | `block--danger-fg`

Ishi also provides several non-semantic context classes. Use them to provide your own visual styling on your content.

CSS Class | Background Only | Foreground Only
----------|------------------|-----------------
`block--primary` | `block--primary-bg` | `block--primary-fg`
`block--secondary` | `block--secondary-bg` | `block--secondary-fg`
`block--light` | `block--light-bg` | `block--light-fg`
`block--dark` | `block--dark-bg` | `block--dark-fg`

### Full Context Class

Each of the context classes sets:

- foreground color
- background color
- border color

to any HTML element that you apply it to.

<div class="block block--primary border">
    <p>Full primary class</p>
</div>

<div class="block block--secondary border">
    <p>Full secondary class</p>
</div>

<div class="block block--attention border">
    <p>Full attention class</p>
</div>

<div class="block block--info border">
    <p>Full info class</p>
</div>

<div class="block block--success border">
    <p>Full success class</p>
</div>

<div class="block block--warning border">
    <p>Full warning class</p>
</div>

<div class="block block--danger border">
    <p>Full danger class</p>
</div>

<div class="block block--light border">
    <p>Full light class</p>
</div>

<div class="block block--dark border">
    <p>Full dark class</p>
</div>

### Context Backgrounds

<div class="block--attention-bg block">
    <p>Attention background</p>
</div>

<div class="block--info-bg block">
    <p>Info background</p>
</div>

<div class="block--success-bg block">
    <p>Success background</p>
</div>

<div class="block--warning-bg block">
    <p>Warning background</p>
</div>

<div class="block--danger-bg block">
    <p>Danger background</p>
</div>

<div class="block--light-bg block">
    <p>Light background</p>
</div>

<div class="block--dark-bg block">
    <p>Dark background</p>
</div>

## Navigation Classes

They are:

* `current` <- coming soon!
