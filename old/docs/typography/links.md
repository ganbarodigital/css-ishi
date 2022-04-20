# Links

## Introduction

In the `<body>` `<main>` section, Ishi blends old-school link styling with the current trend of making links look a little less shouty on the screen.

* links are shown in a contrasting blue color if they haven't been visited before
* links that have been visited are shown in a contrasting purple color
* links are faintly underlined
* links are highlighted when the pointer hovers over them, or when they are clicked

This produces [links](links.html) that look modern but still look like links.

## A Link

Use the standard `<a>` element to create a clickable hyperlink in your content.

### Customize Colors

Link colors are controlled by these variables:

Variable | Section | Changes Colour Of ...
---------|----------------------
`$main-a-link-fg-color` | `<body>` `<main>` | Text color of an `<a>` element
`$main-a-link-border-color` | `<body>` `<main>` | Underline color of an `<a>` element
`$main-a-visited-fg-color` | `<body>` `<main>` | Text color of an `<a>` element that has already been clicked on
`$main-a-visited-bg-color` | `<body>` `<main>` | Background color of an `<a>` element that has already been clicked on
`$main-a-hover-fg-color` | `<body>` `<main>` | Text color of an `<a>` element when the pointer hovers over it
`$main-a-hover-bg-color` | `<body>` `<main>` | Background color of an `<a>` element when the pointer hovers over it
`$main-a-active-fg-color` | `<body>` `<main>` | Text color of an `<a>` element when it is being clicked
`$main-a-active-bg-color` | `<body>` `<main>` | Background color of an `<a>` element when it is being clicked

