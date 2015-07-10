---
title: Creating semantic sites with Web Components and JSON-LD
authors: [ewa_gasperowicz]
date: 2015-04-26
original_date: 2015-03-09
link: http://updates.html5rocks.com/2015/03/creating-semantic-sites-with-web-components-and-jsonld
category: articles
layout: single
tags: ['Semantics']
---

With the rising popularity of web components and supporting libraries like Polymer, custom elements become an attractive way to build UI features. The default encapsulation of custom elements makes them especially useful for creating independent widgets.

While some of the widgets are self-contained, many of them rely on external data to present the content to the user - e.g., the current forecast for a weather widget or the address of a company for a map widget.

It would be great if we could avoid repetition and ensure data consistency, by reusing the same data snippets to populate different widgets as well as inform search engines and other consumers about the content of our page. We can achieve this by using the [schema.org](http://schema.org/) standard and the [JSON-LD](http://www.w3.org/TR/json-ld/) format for our data.

<!-- Excerpt -->
