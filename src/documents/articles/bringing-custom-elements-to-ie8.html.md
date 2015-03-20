---
title: Bringing Custom Elements to IE8
authors: [andrea_giammarchi]
date: 2015-03-20
link: http://webreflection.blogspot.com.br/2015/03/bringing-custom-elements-to-ie8.html
category: articles
layout: single
tags: ['Polyfill', 'Custom Elements']
---

Bringing modern Web standards to old browsers is always challenging, sometimes nearly impossible, but always beneficial for a graceful migrations approach.

Before his latest talk in Helsinki, Andrea managed to accomplish something unexpected and relatively simple: he manged to make his Custom Element's `document.registerElement` [polyfill](https://github.com/WebReflection/document-register-element#document-register-element) compatible with Internet Explorer 8 too, together with the already wide list of old Mobile platforms supported since the very beginning.

As result, when it's needed, and with a little extra effort, it is now possible to create components that won't break the old, even if not so good, Web platform.

<!-- Excerpt -->
