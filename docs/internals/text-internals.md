{% import "ishi.twig" as ishi %}
# Text Mixins and Vars

## Font Sizes

Taken from the {{ ishi.externallink('bbc-gell') }}, Ishi defines a total of 8 font sizes to use in your styles:

* @mixin type-canon()
* @mixin type-trafalgar()
* @mixin type-doublepica()
* @mixin type-greatprimer()
* @mixin type-pica()
* @mixin type-longprimer()
* @mixin type-brevier()
* @mixin type-minion()

The names come from traditional sizes of typesetting in books, apparently. We'll happily take the BBC's word for it!

The BBC GEL guidelines recommend using these type sizes like this:

Name | Example Usage
-----|---------------
type-canon() | Hero or blog post title
type-trafalgar() | Large promo, article title or section header
type-doublepica() | Sub header
type-greatprimer() | Headline title or subtitle
type-pica() | Article paragraphs
type-longprimer() | Index body copy & image captions
type-brevier() | Timestamps and bylines
type-minion() | Small header capitals

Along with these Sass mixins, `$type-pica-font-size` is defined as the base font size for all other text elements in Ishi.

## Vertical Whitespace

* `$type-p-spacing` - the spacing to use between paragraphs of text
* `$type-t-spacing` - the spacing to use between table cells
