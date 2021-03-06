{% import "ishi.twig" as ishi %}
# Text

## Introduction

Ishi provides beautiful typography for standard HTML 5 text elements. Based on the {{ ishi.externallink('bbc-gel') }}, we've added our own take on styling text to make it as readable as possible.

Can't find the HTML text element you want to use? You should assume that Ishi currently doesn't style it. Let us know by opening an issue on Github, and we'll put that right.

Also, checkout our [components section](../components/index.html). That's where you'll find a list of all of the microformats that Ishi currently supports.

## Font Face

Ishi's default font styling is chosen for great readability of long content on desktop, tablet and mobile phone screens.

### Customize Fonts

Font faces are controlled by these variables:

Variable     | Used For
-------------|----------
`$font-body` | Applied to `body`
`$font-h`    | Applied to `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
`$font-pre`  | Applied to `pre`, `code`, `samp` and `kbd`

## Headings

The standard `<h1>` to `<h6>` heading elements are supported by Ishi:

<h1 class="notoc">Heading 1</h1>
<h2 class="notoc">Heading 2</h2>
<h3 class="notoc">Heading 3</h3>
<h4 class="notoc">Heading 4</h4>
<h5 class="notoc">Heading 5</h5>
<h6 class="notoc">Heading 6</h6>

When a heading follows something that isn't another header, Ishi adds extra whitespace (a top margin). This groups blocks of related text together even when you use `<h1>` and `<h2>` elements immediately after to each other.

### Customize Colors

Heading colors are controlled by these variables:

Variable | Changes Colour Of ...
---------|----------------------
`$main-h-fg-color` | `<h1>` to `<h6>` text color in `<main>` section
`$main-h-bg-color` | `<h1>` to `<h6>` background color in `<main>` section
`$sidebar-h-fg-color` | `<h1>` to `<h6>` text color in the sidebar
`$sidebar-h-bg-color` | `<h1>` to `<h6>` background color in the sidebar
`$footer-h-fg-color` | `<h1>` to `<h6>` text color in the footer
`$footer-h-bg-color` | `<h1>` to `<h6>` background color in the footer

See [our semantic structure](../structure/index.html) for details about `<main>`, the sidebar and the footer.

## Paragraphs

The standard `<p>` element is sized for easy reading on each [device group](../concepts/device-groups.html). Each device group has its own font sizes. The line height should accomodate inline `<code>`, <kbd>keyboard</kbd>, <mark>highlighted text</mark> and <samp>output samples</samp> comfortably, without forcing extra spacing just for the lines containing those inline elements.

### Customize Colors

Content colors are controlled by these variables:

Variable | Applied To
---------|----------------------
`$header-fg-color` | default text color in the `<header>` section
`$main-fg-color` | default text color in `<main>` section
`$sidebar-fg-color` | default text color in the sidebar
`$footer-fg-color` | default text color in the footer

See [our semantic structure](../structure/index.html) for details about `<main>`, the sidebar and the footer.

## Paragraph Styles

Ishi provides several semantic classes for the `<p>` element. Use them to make them standout from the bulk of your content on the page.

### Abstract Paragraph

Use `<p class="p--abstract">` to bring an academic look to a summary paragraph. Summary paragraphs are normally found at the top of academically-focused content.

Follow it up with a `<p class="p--keywords">` to draw attention to the key topics covered in our content.

<div class="code-example">
    <header>
        <h4>Example: Abstract Paragraph</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <p class="p--abstract">This white paper looks at the mechanisms available to safeguard sensitive or legally-protected data entrusted to eDaaS. We introduce the Safeguarding architecture, and the related Access Audit architecture, and show how that enables businesses and organisations to meet the European General Data Protection Regulation (GDPR).</p>
            <p class="p--keywords"><strong>Keywords:</strong> GDPR, data protection, security, access auditing.</p>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<p class="p--abstract">This white paper looks at the mechanisms available to safeguard sensitive or legally-protected data entrusted to eDaaS. We introduce the Safeguarding architecture, and the related Access Audit architecture, and show how that enables businesses and organisations to meet the European General Data Protection Regulation (GDPR).</p>
<p class="p--keywords"><strong>Keywords:</strong> GDPR, data protection, security, access auditing.</p>
```
        </div>
    </div>
</div>

### Leading Paragraph

Use `<p class="p--leader">` to bring added emphasis to the opening paragraph of your content.

<div class="code-example">
    <header>
        <h4>Example: Leading Paragraph</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
            <p class="p--leader">This is a leading paragraph.</p>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<p class="p--leader">This is a leading paragraph.</p>
```
        </div>
    </div>
</div>

## Inserted and Deleted Text

Use the standard `<ins>` element to <ins>indicate text that has been added to the content</ins>. Inserted text appears as underlined text, with the same font weight and colour as a normal paragraph.

Use the standard `<del>` element to <del>indicate text that has been removed</del>. Deleted text appears as text with a line through it, with the same font weight as a normal paragraph, and with a slightly fainter color.

### Customize Colors

`<ins>` and `<del>` colors are controlled by these variables:

Variable | Changes Colour Of ...
---------|----------------------
`$header-ins-fg-color` | `<ins>` text color in the `<header>` section
`$header-ins-bg-color` | `<ins>` background color in the `<header>` section
`$header-del-fg-color` | `<del>` text color in the `<header>` section
`$header-del-bg-color` | `<del>` background color in the `<header>` section
`$main-ins-fg-color` | `<ins>` text color in `<main>` section
`$main-ins-bg-color` | `<ins>` background color in `<main>` section
`$main-del-fg-color` | `<del>` text color in `<main>` section
`$main-del-bg-color` | `<del>` background color in `<main>` section
`$sidebar-ins-fg-color` | `<ins>` text color in the sidebar
`$sidebar-ins-bg-color` | `<ins>` background color in the sidebar
`$sidebar-del-fg-color` | `<del>` text color in the sidebar
`$sidebar-del-bg-color` | `<del>` background color in the sidebar
`$footer-ins-fg-color` | `<ins>` text color in the footer
`$footer-ins-bg-color` | `<ins>` background color in the footer
`$footer-del-fg-color` | `<del>` text color in the footer
`$footer-del-bg-color` | `<del>` background color in the footer

## Blockquotes

Use the standard `<blockquote>` element to indicate a direct quote. Add a `<cite>` element at the end of the `<blockquote>` to show who the quote is from.

<blockquote>Ishi was invented for modern websites which still publish document-like content.<cite>Stuart Herbert</cite></blockquote>

Longer blockquotes are supported too. Use `<p>` elements inside your `<blockquote>` to separate out longer passages of text.

> You can add as many paragraphs as you want to your quotation.
>
> And Ishi will format it to keep everything together so that it is clear that this is all one long quotation.
>
> <cite>Stuart Herbert</cite>

## Inline Text Styles

Markup | Looks Like
-------|-----------
`<abbr>`   | <abbr title="abbreviation">This is abbreviated text</abbr>
`<em>`     | <em>This is emphasised text</em>
`<mark>`   | <mark>This is highlighed text</mark>
`<s>`      | <s>This is strikethrough text</s>
`<small>`  | <small>This is small text</small>
`<strong>` | <strong>This is strong text.</strong>
`<sub>`    | <sub>This is subscript text</sub>
`<sup>`    | <sup>This is superscript text</sup>
`<u>`      | <u>This is underlined text</u>
