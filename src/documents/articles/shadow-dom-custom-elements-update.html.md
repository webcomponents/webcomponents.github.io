---
title: Update on standardizing Shadow DOM and Custom Elements
authors: [anne_van_kesteren]
date: 2015-07-29
original_date: 2015-07-28
link: https://annevankesteren.nl/2015/07/shadow-dom-custom-elements-update
category: articles
layout: single
tags: ['Browser Support']
---

There has been revived interest in standardizing shadow DOM and custom elements across all browsers. To that end we had a bunch of discussion online, met in April to discuss shadow DOM, and met earlier this month to discuss custom elements. There is agreement around shadow DOM now. `host.attachShadow()` will give you a `ShadowRoot` instance. And `<slot>` elements can be used to populate the shadow tree with children from the host.

<!-- Excerpt -->
