---
title: How should I name my element?
authors: [zeno_rocha]
date: 2014-04-28
original_date: 2014-04-28
image: how-should-i-name-my-element.jpg
category: articles
layout: single
tags: ['Best Practices', 'Custom Elements']
---

Naming is always a challenging task when developing a component. We can create truly complex pieces of code but we still have a hard time to name a simple variable. The same is true for naming custom elements and we're here today to help you with that.

<!-- Excerpt -->

## `<oneword>` vs. `<two-words>`

Although using just one word for your element seems pretty handy (e.g `<tabs>`), according to the [spec](http://www.w3.org/TR/custom-elements/) your element need to have a dash in its name (e.g `<johns-tabs>`). That way you're forced to add a namespace which avoids conflicts with existing elements.

Some people use the `x-*` prefix when they have a single word element that doesn't make sense to break apart like `<x-instagram>` instead of `<insta-gram>`.

## `<polymer-something>` & `<x-something>`

Nowadays we've been using libraries like [Polymer](http://www.polymer-project.org/) and [X-Tag](http://x-tags.org/) to help us write custom elements. Those libraries usually include a prefix to identify their elements (e.g `<polymer-something>`, `<x-something>`), so when people create an element using Polymer for example they also include this `polymer-*` prefix.

This is considered a bad practice, because we don't want to build a world where elements are seen as being "owned" by Polymer or X-Tag or whatever framework may later come along.

The text before the dash is effectively a namespace and you should want to keep it short but also unique. Try not to overlap on someone else's prefix if possible.

## `<reserved-names>`

There are also some reserved names that you need to avoid:

* `annotation-xml`
* `color-profile`
* `font-face`
* `font-face-src`
* `font-face-uri`
* `font-face-format`
* `font-face-name`
* `missing-glyph`

The list of names above is the summary of all hyphen-containing element names from the applicable specifications, namely [SVG](http://www.w3.org/TR/SVG/eltindex.html) and [MathML](http://www.w3.org/TR/MathML/).

## Tools

If you want to check if a given string is a valid custom element name, check [Mathias Bynens's app](http://mothereff.in/custom-element-name). This little nice tool was built using [Sindre Sorhus's node module](https://github.com/sindresorhus/validate-element-name/) that allows you to programmatically validate a custom element name.

## What about you?

Tell us below how do you usually name your elements and share your thoughts about your own custom elements naming conventions.
