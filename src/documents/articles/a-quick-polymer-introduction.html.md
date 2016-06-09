---
title: A Quick Introduction To Polymer
authors: [mark_wheeler]
date: 2016-06-08
original_date: 2016-06-08
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

For example if you wanted to create an image carousel, you could make a new html element <code>&lt;image-carousel&gt;</code>, with all it's JavaScript and CSS inside the element itself. After that is done, you could use this element anywhere in your document.

A key feature of Web Components is the Shadow DOM, which encapsulates everything inside your element. So in the example above, CSS and JS won't interfere from other elements or global scripts, preventing JS conflicts and CSS bleed.

## Browser support?

The four areas of web components are:
* [HTML imports](http://www.w3.org/TR/html-imports/)
* [HTML templates](http://www.w3.org/TR/html-templates/)
* [Custom elements](http://www.w3.org/TR/custom-elements/)
* [Shadow DOM](http://www.w3.org/TR/shadow-dom/).

Browser support figures can be found here — [http://caniuse.com/#search=web%20components](http://caniuse.com/#search=web%20components).

All the major browsers have committed support for the v1.0 of the Shadow DOM specification, v1.0 of custom elements and HTML 5 templates.

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

[\#UseThePlatform](https://www.polymer-project.org/1.0/blog/2016-05-26-IO-2016-Recap.html) is the name Polymer give to represent the want for the browser to do all the heavy lifting without libraries.

One of the advantages of using Polymer is that it has a built in data binding model (like [Angular](https://angular.io)) enabling complete applications to be made without any other libraries.

Polymer [supports all major evergreen browsers](https://www.polymer-project.org/1.0/docs/browsers) and when combined with webcomponents.js supports IE 11+.

# Getting started
To get started with Polymer, we are going to make our own element called *my-element* (all custom elements need a name with a dash in it).

    <dom-module id="my-element">
      <template>
      </template>
      <script>
        Polymer({
          is: "my-element"
        });
      </script>
    </dom-module>

Save this in a file called `my-element.html`. We have declared the name of the element twice (once in the dom-module and once in the Polymer declaration). We can now load our element using `<my-element></my-element>`.

Lets add a bit of styling and a string data binding:

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

We have added a `<style>` block *inside* our element (these styles are not available outside our element) and added a properties block to the Polymer section. Each property allows us to bind data from the outside world to our element. The double-moustache syntax `{{}}` is replaced by Polymer with the realtime value of the property.

To modify the property you can use attributes:

    <my-element mybinding="Hello, World"></my-element>

Or they can be changed programatically:

    myobj.set('mybinding','Hello again!');
    //myobj being a reference to your element in the DOM

To put this all together:

    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <script src="components/webcomponentsjs/webcomponents-lite.js"></script>
        <link rel="import" href="components/polymer/polymer.html">
        <link rel="import" href="my-element.html" />
    </head>
    <body>
        <my-element mybinding="Hello, world"></my-element>
    </body>
    </html>

Our final example above loads webcomponents-lite, Polymer and our new element into our page.

The [Polymer documentation](https://www.polymer-project.org/1.0/docs/devguide/feature-overview) describes all the features in more detail, but the above example describes the basics of making a customizable element.

# Polymer tips and tools



## PRPL pattern

PRPL (pronounced purple) is a set of concepts to enable the next generation of web applications:

* Push - send critical components for apps initial view
* Render - load the initial screen ASAP
* Pre-cache - store the elements for remaining views
* Lazy-load - when a new view is called, load the elements

This pattern relies on [HTTP 2](https://http2.github.io) for the push capability (when you request only one element or page, the server recommends other files to cache to prevent having the browser work this out at a later time). The pre-cache relies on [service workers](http://www.w3.org/TR/service-workers/) to pull down (but not upgrade) all the other elements required for the routes. These elements will then be upgraded at the point in time they are needed (and all the code for this is in the browser cache).

## Speeding up with vulcanization

Most browsers don't natively support HTML imports out-of-the-box so they will need to be polyfilled. The problem with polyfills are that they are slower than native implementations. Worse than that, HTML Imports allow you to import an element, and then, in turn, that imported element can now import more dependent elements, and so on and so forth.

This dependency chain can be slow to import so a compiler ([vulcanize](https://github.com/Polymer/vulcanize)) was written to combine all dependencies. Using a compiler like Vulcanize assembles your imports into one flat file so that only that one HTML import is needed.

The PRPL pattern is the opposite of vulcanization. This pattern only loads the minimum individual elements needed to show whats on screen, then lazily load the others.

Polymer's new [CLI](https://github.com/Polymer/polymer-cli) is a tool that can be used for generating both PRPL and a vulcanized version of your project.

## Polybuild

[Polybuild](https://github.com/PolymerLabs/polybuild) is a tool that lives on top of vulcanize and makes it super easy to vulcanize a file and split the output into two files: a HTML file for the [templates](http://www.html5rocks.com/en/tutorials/webcomponents/template/) and a JavaScript file for the Polymer code.

## Sanitising your components

The Polymer project has an optional utility known as  [Hydrolysis](https://github.com/Polymer/hydrolysis) that can be used to analyze elements. Using Hydrolysis, a tool called  [polylint](https://github.com/PolymerLabs/polylint) was made that does a very basic sanity check of your elements (and follows the dependency chain) giving you some piece of mind in the build process.

Polymer's [CLI](https://github.com/Polymer/polymer-cli) tool includes a linter to make the process easier.

## Shady DOM

webcomponents.js comes in two flavors <em>standard</em> and <em>lite</em>. The <em>lite</em> version contains all the polyfills except the Shadow DOM polyfill. The reason for this is that stubbing Shadow DOM is extremely inefficient and can impact performance of your application significantly!

Specifically, there is a noticeable increase in load time when using the standard version of webcomponentsjs, so unless you explicitly need the Shadow DOM it is recommended you use the <em>lite</em> version.

The [Shady DOM](https://www.polymer-project.org/1.0/blog/shadydom) provides the same encapsulation benefits as the Shadow DOM but without the massive polyfill overhead.

## Polymer micro

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
