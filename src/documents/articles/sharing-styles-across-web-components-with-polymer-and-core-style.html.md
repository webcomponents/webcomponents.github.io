---
title: Sharing styles across Web Components with Polymer and core-style
authors: [pascal_precht]
date: 2014-09-30
original_date: 2014-08-01
link: http://pascalprecht.github.io/2014/08/01/sharing-styles-across-web-components-with-polymer-and-core-style/
category: articles
layout: single
tags: ['Polymer', 'Styling']
---

One of the bigger challenges that come with Web Components, is the way how we share common stylesheets across multiple components. Usually, when you build an app and you have styles that are shared along several parts of your code, all you have to do is to is to embed your collected shared styles in your application once, because that's it, right? So you probably have a build process that first pre-processes your stylesheets, concatenates them to one file and if you're good, that file gets minified. Great. But does that work for Web Components too?

<!-- Excerpt -->
