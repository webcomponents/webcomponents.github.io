---
title: "Server-less applications powered by Web Components"
authors: [seb_cevey]
event: JSConf EU
date: 2015-01-01
original_date: 2014-09-14
category: presentations
layout: single
tags: ['Polymer', 'Custom Elements', 'Data-binding', 'Composition']
---

At the Guardian, we have built Web Components that fetch deployment and monitoring stats and pipe the data into customisable graphs, so that you can assemble live dashboards in plain HTML without having to write any JavaScript. By relying on open APIs and the AWS JavaScript SDK, the custom elements can run off static pages in your browser and talk directly to your monitoring APIs (Graphite, AWS CloudWatch, etc.) without any intermediate server.

<!-- Excerpt -->

In his talk, Sébastien demonstrates both the nascent world of the 2-tiered web architecture, which sees browsers directly access cloud services, and the declarative power of the Web, where rich functionalities can be obtained by combining simple Web Components.

The [source code](https://github.com/guardian/element-radiator) for all the elements used in the demo is Open Source and available on Github.

### Video

<div class="iframe-wrap">
    <iframe src="//www.youtube.com/embed/MdcD1rNkNLE" itemprop="video"></iframe>
</div>

### Slides

<a href="http://slides.com/theefer/serverless-web-components-jsconf">
    <img src="../../img/stories/serverless-applications-powered-by-web-components.jpg" alt="Presentation Cover">
</a>
