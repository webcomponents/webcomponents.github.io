---
title: A Quick Introduction To Polymer
authors: [mark_wheeler]
date: 2015-05-26
original_date: 2015-05-26
image: a-quick-polymer-intro.png
category: articles
layout: single
tags: ['Custom Elements','Polymer']
---

A guide to Polymer and its build tools.

<!-- Excerpt -->

<blockquote style="margin-top:60px;margin-bottom:30px;font-style:italic;color:grey;font-size:1.5em">I've a feeling we're not in Kansas anymore - Dorothy</blockquote>
<br/><br/>
# Web component recap

Web components are a set of standards for creating reusable HTML elements.

For example if you wanted to create an image carousel, you could make a new html element <code>&lt;image-carousel&gt;</code> put all the JS and CSS inside, and use this element anywhere you want.

A key feature is the Shadow DOM, which encapsulates everything inside your element. So in the example above, CSS and JS cannot interfere from the outside preventing JS conflicts and CSS bleed.

# Browser support?

The four areas of web components are:
* [HTML imports](http://www.w3.org/TR/html-imports/)
* [HTML templates](http://www.w3.org/TR/html-templates/)
* [Custom elements](http://www.w3.org/TR/custom-elements/)
* [Shadow DOM](http://www.w3.org/TR/shadow-dom/).

Browser support figures can be found here — [http://caniuse.com/#search=web%20components](http://caniuse.com/#search=web%20components).

All major browsers have committed support for the v1.0 of the Shadow DOM specification, v1.0 of custom elements and HTML 5 templates.

* [Safari](https://webkit.org/blog/6017/introducing-safari-technology-preview/)
* [Internet Explorer](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/shadowdom)
* [Firefox](https://hacks.mozilla.org/2015/11/an-update-on-web-components-and-firefox/)

## HTML imports

The sticking point is HTML imports. Chrome has a native implementation, but [other browsers](http://stackoverflow.com/questions/21177267/es6-modules-vs-html-imports) are looking to Javascript ES6 modules (with a polyfill for HTML imports).

## webcomponents.js

Browser support is varying (at the time of writing) so [webcomponents.js](https://github.com/webcomponents/webcomponentsjs) was made to polyfill the web components API.

This code provides all you need to get started with web components!

# What is Polymer JS?

There are a few wrappers around web components such as [x-tag](http://x-tag.readme.io/) and [bosonic](https://bosonic.github.io).

[Polymer](https://www.polymer-project.org) is a similar wrapper with a few extra goodies thrown in on top.

The aim of the Polymer project is not to create a bloated library, but instead make the smallest library possible, and make the browser do all the work.

\#UseThePlatform is the name Polymer give to represent the want for the browser to do all the heavy lifting without libraries.

One of the advantages of using Polymer is that it has a built in data binding model (like [React](https://facebook.github.io/react/) or [Angular](http://angularjs.org/)) enabling complete applications to be made without any other libraries.

Polymer [supports evergreen browsers](https://www.polymer-project.org/1.0/docs/browsers) and when combined with webcomponents.js supports IE 11+.

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

    this.$.obj.set('mybinding','Even newer text');
    //this.$ is a Polymer representation of local DOM nodes

# PRPL pattern

PRPL (pronounced purple) is a set of concepts to enable the next generation of web applications:

* Push - send critical components for apps initial view
* Render - load the initial screen ASAP
* Pre-cache - store the elements for remaining views
* Lazy-load - when a new view is called, load the elements

This pattern relies on [HTTP 2](https://http2.github.io) for the push capability (when you request only one element or page, the server recommends other files to cache to prevent having the browser work this out at a later time). The pre-cache relies on [service workers](http://www.w3.org/TR/service-workers/) to pull down (but not instantiate) all the other elements required for the routes. These elements will then be instantiated at the point in time they are needed (and all the code for this is in the browser).

# Speeding up with vulcanisation

As most browsers doesn't natively support HTML imports out-of-the-box (and HTTP 2 is not widely run on severs) they need to be polyfilled. The problem is polyfills are slower than native implementations, and worse you can import an element, that imports dependent elements, and that itself imports elements.

This dependency chain can be slow to import so a compiler ([vulcanise](https://github.com/Polymer/vulcanize)) was written to combine all dependencies into one file so only one HTML import is needed.

The PRPL pattern is the opposite of vulcanistion. This pattern only loads the minimum individual elements to show whats on screen, then lazily load the others.

Polymer's new [CLI](https://github.com/Polymer/polymer-cli) has as tooling for generating both the PRPL and vulcanised version of your project.

## Polybuild

[Polybuild](https://github.com/PolymerLabs/polybuild) is a tool that lives on top of vulcanise and makes it super easy to vulcanise a file and split the output into two files: a HTML file for the [templates](http://www.html5rocks.com/en/tutorials/webcomponents/template/) and a JS file for the Polymer code.

# Sanitising your components

Polymer comes with a program called [Hydrolysis](https://github.com/Polymer/hydrolysis) that can be used to analyse elements. From this a tool called [polylint](https://github.com/PolymerLabs/polylint) was made that does a very basic sanity check of your elements (and follows the dependency chain) giving you some piece of mind in the build process.

Polymer's [CLI](https://github.com/Polymer/polymer-cli) tool includes a linter to make the process easier.

# Shady DOM

webcomponents.js comes in two flavours <em>standard</em> and <em>lite</em>. The <em>lite</em> version contains all the polyfills except the Shadow DOM polyfill. The reason for this is it is a heavy weight piece of code to copy the Shadow DOM!!

There is a noticeable increase in load time when using the standard version, so unless you explicitly need the Shadow DOM it is recommended for speed reasons you use the <em>lite</em> version.

The [Shady DOM](https://www.polymer-project.org/1.0/blog/shadydom) provides the same encapsulation benefits as the Shadow DOM but without the massive polyfill overhead.

# Polymer micro

If you don't want all the extra features of Polymer you can instead use [Polymer micro](https://www.polymer-project.org/1.0/docs/devguide/experimental#polymer-micro), which is just a plain wrapper around web components.

# Summary

## Polymer pros

Polymer is a great tool for building modern web apps, it includes a fast binding system that keeps the UI up to date with no extra effort, and wraps web components to provide all the benefits they are designed to provide.

## Polymer cons

There is an overhead of loading both Polymer and webcomponents.js and then having to go through the [upgrade process](http://www.w3.org/TR/2013/WD-components-intro-20130606/#element-upgrade) of custom elements. This means the user has to wait for the app to load fully before interacting with it (although you can be clever with app framing techniques and asynchronously load parts of the UI to reduce load time).

As time goes on and browsers implement the standard, using Polymer will provide speed enhancements as the Shadow DOM allows for efficient rendering (knowing there is no CSS leaks etc). And with HTTP 2.0 with service workers, a Polymer page will have no speed penalty.

## Staying up to date with Polymer

Polymer is always evolving and getting better. The links below are where all the latest info can be found:

* [Polymer blog](https://blog.polymer-project.org)
* [Roadmap](https://github.com/Polymer/project/blob/master/Roadmap.md)
