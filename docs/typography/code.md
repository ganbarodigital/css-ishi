{% import "ishi.twig" as ishi %}
# Syntax-Highlighted Code

## Introduction

_Syntax-highlighted code_ is source code, HTML markup, or human-readable data formats (JSON, XML, YAML et al).

<pre class="language-php"><code class="language-php">/**
 * this is an example
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1, $arg2)
    {
        // do something here
    }
}
</code></pre>

## Getting Started

### Markup

Wrap your example code in `pre` and `code` tags. Make sure that both tags include a `language-*` class. Replace the `*` with the name of the language that you want syntax highlighting for.

<aside class="code-example">
    <header>
        <h4>Example: Syntax-Highlighted Code</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<pre class="language-php"><code class="language-php">/**
 * this is an example
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1, $arg2)
    {
        // do something here
    }
}
</code></pre>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<pre class="language-php"><code class="language-php">
/**
 * this is an example
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1, $arg2)
    {
        // do something here
    }
}
</code></pre>
```
        </div>
    </div>
</aside>

### JavaScript

We need to use some JavaScript to add in the syntax highlighting. We use {{ ishi.externallink('prism') }} for this.

Why Prism?

* It's what everyone else uses at the moment.
* It supports a huge list of languages and markup formats.
* It works well.

You can include Prism in one of two ways:

* use the version of `prism.js` that's bundled with Ishi, or
* download your own copy of `prism.js` and include that instead

Ishi includes a bundled Prism CSS theme. It is heavily based on the one used by the {{ishi.externallink('mozilla-devnet')}}. It's the most readable Prism theme that we've seen to date.

For reference, the bundled copy of `prism.js` has these features selected:

* Markup
* CSS
* C-like
* JavaScript

* Bash
* PHP
* PHP Extras
* (other languages are handled by the Autoloader plugin below)

* [Line Highlight](http://prismjs.com/plugins/line-highlight/)
* [Line Numbers](http://prismjs.com/plugins/line-numbers/)
* [Autolinker](http://prismjs.com/plugins/autolinker/)
* [Highlight Keywords](http://prismjs.com/plugins/highlight-keywords/)
* [Autoloader](http://prismjs.com/plugins/autoloader/)
* [Command Line](http://prismjs.com/plugins/command-line/)
* [Normalize Whitespace](http://prismjs.com/plugins/normalize-whitespace/)

If you use your own download of Prism, don't forget to tick these features if you're already relying on them.

## Tricks, Tips and Other Options

### Line Numbers

You can add line numbers to your syntax-highlighted code.

1. Use our bundled `prism.js`, or include the 'line-numbers' plugin in your own copy of Prism.
1. Add the `line-numbers` class to the outer `pre` tag.

Prism will inject line-numbers in a gutter on the left-hand side of the syntax-highlighted code.

<aside class="code-example">
    <header>
        <h4>Example: Syntax-Highlighted Code</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<pre class="language-php line-numbers"><code class="language-php">/**
 * this is an example
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1, $arg2)
    {
        // do something here
    }
}
</code></pre>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<pre class="language-php line-numbers"><code class="language-php">
/**
 * this is an example
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1, $arg2)
    {
        // do something here
    }
}
</code></pre>
```
        </div>
    </div>
</aside>

If you want the line numbers to start from a specific number, add the `data-start` attribute to the outer `pre` tag.

<aside class="code-example">
    <header>
        <h4>Example: Syntax-Highlighted Code</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<pre class="language-php line-numbers" data-start="635"><code class="language-php">/**
 * this is an example
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1, $arg2)
    {
        // do something here
    }
}
</code></pre>
        </div>
        <div class="example-source hidden" data-type="HTML" markdown="1">
```html
<pre class="language-php line-numbers" data-start="635"><code class="language-php">
/**
 * this is an example
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1, $arg2)
    {
        // do something here
    }
}
</code></pre>
```
        </div>
    </div>
</aside>

### Fake Command-Line Prompt

Prism can inject a UNIX-like `user@hostname` command-line prompt.

<div class="callout callout--warning" markdown="1">
#### Larger Screens Only

We only show the command-line prompt on [group D displays](../concepts/device-groups.html). Anything smaller just doesn't have the horizontal space to show it.
</div>

Make these changes to your outer `pre` tag:

1. add `language-bash` and `command-line` CSS classes
1. add `data-user=<user>`. Change `<user>` to the user you want shown in the command-line prompt.
1. add `data-host=<hostname>`. Change `<hostname>` to the hostname you want in the command-line prompt.

<aside class="code-example">
    <header>
        <h4>Example: Injecting A Command-Line Prompt</h4>
    </header>
    <div class="example-content">
        <div class="example-output">
<pre class="language-bash command-line" data-user="you" data-host="localhost"><code class="language-bash">
git clone https://github.com/ganbarodigital/css-ishi.git
</code></pre>
        </div>
        <div class="example-source hidden" markdown="1">
```html
<pre class="language-bash command-line" data-user="you" data-host="localhost"><code class="language-bash">
git clone https://github.com/ganbarodigital/css-ishi.git
</code></pre>
```
        </div>
    </div>
</aside>

### Autoloading Additional Languages

If you pre-compile Prism will all supported languages, the result is a JavaScript file that's well over 200K in size. That's a little heafty for mobile users, especially as you're unlikely to need all of those languages on a single page.

Prism's Autolader plugin is a good compromise. It will go and download any additional syntaxes only when they're needed.

It needs a little bit of setup work:

* go to the [Autoloader plugin page](http://prismjs.com/plugins/autoloader/), and click on the link called 'download all grammars'. This will build a ZIP file of all the syntax files you need.
* unzip the grammars into a folder on your website
* set `Prism.plugins.autoloader.languages_path` to wherever you've put the folder

Here's how we've done it for this website:

```html
<html>
    <head>
        <script src="/assets/prism.js"></script>
        <script type="text/javascript">
Prism.plugins.autoloader.languages_path = "/assets/prism/";
        </script>
    </head>
    <body>
        ...
    </body>
</html>
```

You can see this in action on the following example. Open your browser's developer tools, go to the Network panel, and then refresh the page. You'll see the browser download the SQL syntax file.

```sql
SELECT * from my_table WHERE id=100;
```