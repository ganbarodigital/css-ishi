---
layout: typography
title: Syntax-Highlighted Code
pageflow_name: code
---

# {{page.title}}

## Introduction

[Jekyll](http://jekyllrb.com) is a very popular tool for generating static HTML websites. It is used by GitHub Pages, making it the defacto standard static site generator for the Internet.

It can generate syntax-highlighted code using [Pygments](http://pygments.org). Ishi includes support for three different layouts that Pygments can generate:

* syntax-highlighted code with no line numbers (Pygment's default output)
* syntax-highlighted code with embedded line numbers
* syntax-highlighted code with separated line numbers (for easy copy and paste)

## Default Highlighted Code

{% raw %}
Use Jekyll's `{% highlight <language> %}` tag to highlight a piece of code.
{% endraw %}

{% highlight php startinline %}
/**
 * This is an example piece of embedded code
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1)
    {
        $this->args = [ $arg1 ];
    }
}
{% endhighlight %}

## Code With Embedded Line Numbers

{% raw %}
Use Jekyll's `{% highlight <language> linenos %}` tag to add line numbers to a highlighted piece of code. Depending on which syntax highlighter Jekyll is using, you'll either get the output immediately below, or you'll get the output in the _Code With Separated Line Numbers_ below.
{% endraw %}

{% highlight php startinline linenos %}
/**
 * This is an example piece of embedded code
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1)
    {
        $this->args = [ $arg1 ];
    }
}
{% endhighlight %}

## Code With Separated Line Numbers

{% raw %}
Use Jekyll's `{% highlight <language> linenos=table %}` tag to add line numbers to a highlighted piece of code. The generated HTML makes it easy for your readers to copy and paste the code from the web page.
{% endraw %}

{% highlight php startinline linenos=table %}
/**
 * This is an example piece of embedded code
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1)
    {
        $this->args = [ $arg1 ];
    }
}
{% endhighlight %}
