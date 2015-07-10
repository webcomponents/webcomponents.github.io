---
title: A W3C Custom Elements Alternative
authors: [andrea_giammarchi]
date: 2015-03-20
original_date: 2014-07-15
link: http://webreflection.blogspot.com.br/2014/07/a-w3c-custom-elements-alternative.html
category: articles
layout: single
tags: ['Polyfills', 'Custom Elements']
---

ES6 introduced some goodness to JavaScript, and Weak or Set Maps are part of it. However, it is not entirely possible to polyfill these features without risking to be a bit obtrusive and not so backward compatible. When `webcomponents.js` initially went out, it was lacking support for older browsers and bringing in external arbitrary polyfills that were not playing so well together with few other libraries. On top of that, it was bringing features that if used on Android 2 phones or other cheap devices, where not performing so well and hence not that useful as part of the library.

In order to avoid these little obstacles and brings at least Custom Elements out of the entire Web Components family in older Mobile browsers too, Andrea Giammarchi decided to invest some time and create a `document.registerElement` only polyfill with the goal of supporting as many mobile platforms as possible, and in a reasonable size over decent performance.

<!-- Excerpt -->
