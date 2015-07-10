---
title: Introduction to the template elements
authors: [agektmr]
date: 2014-10-07
original_date: 2014-10-07
image: devbytes-template.png
category: articles
layout: single
tags: ['Introduction', 'Template']
---

Templates allow teams to divide their work, allowing designers to focus on views written in HTML and CSS, while other engineers focus on logic and back end integration.

In this article, you'll learn how to use a new HTML element that is already available on Chrome, Opera, Firefox and Safari.

<!-- Excerpt -->

For those who prefer to watch instead of read, here is a summary of how it works.

<div class="iframe-wrap">
  <iframe src="//www.youtube.com/embed/qC5xK6H0GlQ"></iframe>
</div>

---

## Why Templates for browsers?

"Templates" used to be a technology frequently used with server side technologies such as PHP, Django (Python) or Ruby on Rails. But lately it's becoming more common to use templates in the browser.

This is primarily driven by the changing landscape of web architecture. Servers are becoming more dedicated to processing data, clients are becoming more dedicated to user interactions and views. MVC (Model, View, Controller) is no longer a server side only pattern, it's becoming a client side thing - look at AngularJS, Backbone.js, Ember.js, etc.

Solutions for browser side templating in the past used JavaScript. For example, [Mustache.js](http://mustache.github.io/), [Handlebars.js](http://handlebarsjs.com/), [AngularJS](https://angularjs.org/), [Backbone.js](http://backbonejs.org/). But techniques used in those libraries have a few pitfalls.

### Using div tag:

In the following example, the template is actually a `div` tag which is hidden with a bit of CSS. The downside of this approach is that the browser will fetch resources from inside the template, even if those resources haven't been used yet. In this case, `logo.svg`.

    <div style="display:none;">
      <div>
        <h1>Web Components</h1>
        <img src="http://webcomponents.org/img/logo.svg">
      </div>
    </div>

### Using script tag:

In the following example, the template content is stored inside of a `script` tag. The down side of this approach is that the templates will be converted into DOM elements   using `.innerHTML`, which could introduce a cross site scripting vulnerability if an adequate sanity check is not performed.

    <script type="text/template">
      <div>
        <h1>Web Components</h1>
        <img src="http://webcomponents.org/img/logo.svg">
      </div>
    </script>

And this is where native `<template>` comes in. `<template>` addresses these problems by providing an ability to insert "inert HTML tags" into a document.

By using "inert HTML tags":

* inlined scripts won't be executed without being stamped out
* resources such as `img` or `video` won't be fetched without being stamped out

## How do I use templates?

To define a template, simply wrap your content with a `<template>` tag.

    <template id="template">
      <style>
        ...
      </style>
      <div>
        <h1>Web Components</h1>
        <img src="http://webcomponents.org/img/logo.svg">
      </div>
    </template>

In order to stamp out the template, you'll need to write a bit of JavaScript.

    <script>
      var template = document.querySelector('#template');
      var clone = document.importNode(template.content, true);
      var host = document.querySelector('#host');
      host.appendChild(clone);
    </script>
    <div id="host"></div>

[Here's a live example](http://jsbin.com/qaxiw/7/edit).

The `template` node queried on first line will be cloned using `document.importNode()`. By assigning `true` to the 2nd argument, we are creating a deep copy. Appending it to another node will bring the contents of the template to life, in other words

* Included `script` tags will be executed
* Included resources (`img`, `video`, etc) will be fetched
* Included `style` tags will take effect

## The template element doesn't provide data binding

If you have experience working with other template engines such as AngularJS, Mustache.js, etc, you may expect to be able to use

**placeholders**

    <template bind="{{items}}"></template>

**repeaters**

    <template repeat="{{item in items}}"></template>

**conditionals**

    <template if="{{item.active}}"></template>

but these are different concepts from vanilla templating. These concepts are actually called "data binding" and are not implemented in the native template element. If you are interested in using these features, I recommend looking into [Polymer](http://www.polymer-project.org/) ([TemplateBinding](https://github.com/Polymer/TemplateBinding)) or [x-tags](http://www.x-tags.org/).

## Supported browsers

The template element is supported by Chrome, Opera, Safari and Firefox as of October 2014. To check availability, go to [chromestatus.com](https://www.chromestatus.com/features/5207287069147136). For polyfilling Internet Explorer and other legacy browsers, you can use [platform.js](https://github.com/polymer/platform).

## Resources

If you are interested in learning more about the template element, head over to:

* [HTML's New Template Tag - HTML5Rocks](http://goo.gl/JEIWir)
* [WhatWG HTML Template specification](http://www.whatwg.org/specs/web-apps/current-work/multipage/scripting-1.html#the-template-element)
