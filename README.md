# Gridular CSS

Inspired by "Making and Breaking the Grid", by Timothy Samara, and YUI Grids (shortcomings...)

## Design Principles

* Simple enough to remain legible and have a low learning curve
* Few or zero browser hacks
* Compatible with MSIE 6+, Opera, Safari, Firefox, Chrome, etc.
* .gr is the pseudo-namespaces: http://meiert.com/en/blog/20070321/css-practice-pseudo-namespaces-in-complex-projects/
* Allow for nestable and potentially complex grid layouts
* Rely on % and em for units, so that layouts are be scalable and code is modular and concise

### Differences with YUI Grids

Many of the features of Gridular are meant to be improvements on perceived shortcomings of the YUI Grids library:

* Class names are simpler and hopefully easier to learn
* Grid nesting should work as newcomers would assume
* Support for grid margins and unit gutters

Some "improvements" are subject to opinion:

* "Unit Multipliers" (e.g., .gr3 for thirds or .gr5 for fifths) are more straightforward than arbitrary class names for grid configurations (e.g., .yui-gb, .yui-gc, .yui-gd) that are easy to confuse

## Gridular Vocabulary (subject to change)

<dl>
  <dt>Grid</dt>
  <dd>A `.gr` that encapsulates *units*, which can be seen as "columns". Without constituent units, a `.gr` is useful as a clearfix.</dd>
  <dt>Grid Container (Tentative)</dt>
  <dd>A `.gr-c` nested within a `.gr` for the purposes of accommodating user-defined *grid styles* that cannot be accomplished with a support *grid style coefficient*</dd>
  <dt>Grid Style (Only `.gr-m` implemented yet)</dt>
  <dd>A class for spatial styles that affects a *grid* and all of its *units*: `.gr-m`, `.gr-p`, and `.gr-b`</dd>
  <dt>Grid Style Coefficient (Tentative)</dt>
  <dd>A class that can be added to a `.gr` with a *grid style* to either increase or decrease the units of the *grid*s *spatial styles*</dd>
  <dt>Unit</dt>
  <dd>A constituent `.gr-u` of a *grid*</dd>
  <dt>Unit Factor</dt>
  <dd>A class that can be added to a `.gr` to specify its quantity of *units*: `.gr-3`, etc. (Note that a `.gr` without a *unit multiplier* will create a *grid* with 2 *units*)
  <dt>Fixed Grid (Tentative)</dt>
  <dd>A `.gr-f` is a *grid* that is fixed-positioned to a side of the viewport</dd>
</dl>

## Gridular is an Alpha Library!

The vocabulary (and corresponding class selectors) are still being assessed, and are subject to change, until the library is at least in Beta form. It is strongly discouraged to rely on Gridular in production environments until it is more fully developed.

*"Tentative" features are not yet implemented.*

## Known Issues/TODO

* Decide on optimal margin/gutter algebra
* Decide how to handle collapsing margins of adjacent grids
* Gridular.css currently relies on the Meyer Reset CSS
