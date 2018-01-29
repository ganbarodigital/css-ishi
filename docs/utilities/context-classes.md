# Context Classes

Ishi provides several semantic context classes. Use them to tell your readers that there's something different about a particular piece of your content.

You can use the class to change all of the content, or selectively apply just the foreground or background color. You can also combine them with the `alert` class to invert the colors.

CSS Class | Background Only | Foreground Only
----------|------------------|-----------------
`attention` | `attention-bg` | `attention-fg`
`info` | `info-bg` | `info-fg`
`success` | `success-bg` | `success-fg`
`warning` | `warning-bg` | `warning-fg`
`danger` | `danger-bg` | `danger-fg`

Ishi also provides several non-semantic context classes. Use them to provide your own visual styling on your content.

CSS Class | Background Only | Foreground Only
----------|------------------|-----------------
`light` | `light-bg` | `light-fg`
`dark` | `dark-bg` | `dark-fg`

### Full Context Class

Each of the context classes sets:

- foreground color
- background color
- border color

to any HTML element that you apply it to.

<div class="attention block border">
    <p>Full attention class</p>
</div>

<div class="info block border">
    <p>Full info class</p>
</div>

<div class="success block border">
    <p>Full success class</p>
</div>

<div class="warning block border">
    <p>Full warning class</p>
</div>

<div class="danger block border">
    <p>Full danger class</p>
</div>

<div class="light block border">
    <p>Full light class</p>
</div>

<div class="dark block border">
    <p>Full dark class</p>
</div>

### Context Backgrounds

<div class="attention-bg block">
    <p>Attention background</p>
</div>

<div class="info-bg block">
    <p>Info background</p>
</div>

<div class="success-bg block">
    <p>Success background</p>
</div>

<div class="warning-bg block">
    <p>Warning background</p>
</div>

<div class="danger-bg block">
    <p>Danger background</p>
</div>

<div class="light-bg block">
    <p>Light background</p>
</div>

<div class="dark-bg block">
    <p>Dark background</p>
</div>

## Navigation Classes

They are:

* `current` <- coming soon!
