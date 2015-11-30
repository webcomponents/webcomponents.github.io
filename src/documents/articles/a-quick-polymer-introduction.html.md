---
title: A Quick Introduction To Polymer
authors: [mark_wheeler]
date: 2015-11-26
original_date: 2015-11-26
image: a-quick-polymer-intro.png
category: articles
layout: single
tags: ['Custom Elements','Polymer']
---

A quick guide to Polymer and its build tools.

<!-- Excerpt -->

# A quick web component recap

<blockquote style="margin-top:60px;margin-bottom:30px;font-style:italic;color:grey;font-size:1.5em">I've a feeling we're not in Kansas anymore - Dorothy</blockquote>

Web components are a set of standards for creating reusable HTML elements.

For example if you wanted to create an image carousel, you could make a new html element <code>&lt;image-carousel&gt;</code> put all the JS and CSS inside, and use this element anywhere you want.

A key feature is the shadow dom, which encapsulates everything inside your element. So in the example above CSS and JS cannot interfere from the outside preventing JS conflicts and CSS bleed.

# Browser support?

The four areas of web components are:
* [HTML imports](http://www.w3.org/TR/html-imports/)
* [HTML templates](http://www.w3.org/TR/html-templates/)
* [custom elements](http://www.w3.org/TR/custom-elements/)
* [shadow dom](http://www.w3.org/TR/shadow-dom/).

Browser support figures can be found here — [http://caniuse.com/#search=web%20components](http://caniuse.com/#search=web%20components).

## Firefox support

Firefox has some support for web components but they are not enabled by default. You can enable them by following the instructions here:

[https://developer.mozilla.org/en-US/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox](https://developer.mozilla.org/en-US/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox)

Future Firefox updates are [detailed here](https://hacks.mozilla.org/2015/11/an-update-on-web-components-and-firefox/).

## webcomponents.js

Browser support is widely varying (at the time of writing) so [webcomponents.js](https://github.com/webcomponents/webcomponentsjs) was made to polyfill the web components api.

The code provides all you need to get started with web components!

# What is Polymer JS?

There are a few wrappers around web components such as [x-tag](http://x-tag.readme.io/) and [bosonic](https://bosonic.github.io).

[Polymer](https://www.polymer-project.org) is a similar wrapper with a few extra goodies thrown in on top.

One of the advantages of using Polymer is that it has a built in data binding model (like [React](https://facebook.github.io/react/) or [Angular](http://angularjs.org/)) enabling complete applications to be made without any other libraries.

Polymer [supports evergreen browsers](https://www.polymer-project.org/1.0/resources/compatibility.html) and when combined with webcomponents.js supports IE10+.

# A quick Polymer example


    <dom-module id="my-element">
      <template>
        <style>
        .box{
          color: grey;
        }
        </style>
        <div class="box">{{mybinding}}</div>
        </template>
        <script>
        // element registration
        Polymer({
          is: "my-element",

          properties: {
            mybinding: {
              type: String,
              value: "My text here"
            }
          }
          });
        </script>
    </dom-module>

The example above creates a new component <code>my-element</code> and it has one binding called <code>mybinding</code>. This can be changed programatically or with attribute binding:

    <my-element id="obj" mybinding="New text"></my-element>

    obj.mybinding = 'Even newer text';

# Speeding up with vulcanisation

As most browsers doesn't natively support HTML imports out-of-the-box they need to be polyfilled. The problem is polyfills are slower than native implementations, and worse you can import an element, that imports dependent elements, and that itself imports elements.

This dependency chain can be slow to import so a compiler ([vulcanise](https://github.com/Polymer/vulcanize)) was written to combine all dependencies into one file so only one HTML import is needed.

## Polybuild

[Polybuild](https://github.com/PolymerLabs/polybuild) is a tool that lives on top of vulcanise and makes it super easy to vulcanise a file and split the output into two files: a HTML file for the [templates](http://www.html5rocks.com/en/tutorials/webcomponents/template/) and a JS file for the Polymer code.

## HTTP 2.0

The speed increases and [server push](https://http2.github.io/faq/#whats-the-benefit-of-server-push) technology of [HTTP 2.0](https://http2.github.io) will eventually make vulcanisation unnecessary, but for now the speed gains from vulcanisation are worth the extra build step!!

# Sanitising your components

Polymer comes with a program called [Hydrolysis](https://github.com/Polymer/hydrolysis) that can be used to analyse elements. From this a tool called [polylint](https://github.com/PolymerLabs/polylint) was made that does a very basic sanity check of your elements (and follows the dependency chain) giving you some piece of mind in the build process.

# Shady DOM

webcomponents.js comes in two flavours standard and lite. The lite version contains all the polyfills except the shadow DOM polyfill. The reason for this is it is a heavy weight piece of code to copy the shadow DOM!!

There is a noticeable increase in load time when using the standard version, so unless you explicitly need the shadow DOM it is recommended for speed reasons you use the lite version.

The [shady DOM](https://www.polymer-project.org/1.0/articles/shadydom.html) provides the same encapsulation benefits as the shadow DOM but without the massive polyfill overhead.

# Polymer micro

If you don't want all the extra features of Polymer you can instead use [Polymer micro](https://www.polymer-project.org/1.0/docs/devguide/experimental.html#polymer-micro), which is just a plain wrapper around web components.

# Summary

## Polymer pros

Polymer is a great tool for building modern web apps, it includes a fast binding system that keeps the UI up to date with no extra effort, and wraps web components to provide all the benefits they are designed to provide.

## Polymer cons

There is an overhead of loading both Polymer and webcomponents.js and then having to go through the [upgrade process](http://www.w3.org/TR/2013/WD-components-intro-20130606/#element-upgrade) of custom elements. This means the user has to wait for the app to load fully before interacting with it (although you can be clever with app framing techniques and asynchronously load parts of the UI to reduce load time).

## Staying up to date with Polymer

Polymer is always evolving and getting better. The links below are where all the latest info can be found:

* [Polymer blog](https://blog.polymer-project.org)
* [Polymer articles](https://www.polymer-project.org/1.0/articles/)
* [Roadmap](https://github.com/Polymer/project/blob/master/Roadmap.md)
