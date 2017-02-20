{% import "ishi.twig" as ishi %}
# Syntax-Highlighted Code

## Introduction

GitHub-flavoured Markdown (GFM) introduced _fenced code blocks_:

    ```php
    /**
     * This is an example piece of embedded code that includes a long comment line
     */

    namespace GanbaroDigital\Examples;

    class ExampleClass
    {
        public function __construct($arg1)
        {
            $this->args = [ $arg1 ];
        }
    }
    ```

This gets rendered into a `<pre><code class="language-php">` block:

```php
/**
 * This is an example piece of embedded code that includes a long comment line
 */

namespace GanbaroDigital\Examples;

class ExampleClass
{
    public function __construct($arg1)
    {
        $this->args = [ $arg1 ];
    }
}
```

## Syntax Highlighting

Use {{ ishi.externallink('prism') }} to get your fenced code blocks syntax-highlighted.
