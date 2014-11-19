---
title: 'Polyfills'
layout: polyfills
---

## Introduction

[webcomponents.js](https://github.com/WebComponents/webcomponents.js) is a set of polyfills built on top of the **Web Components** specifications. It makes it possible for developers to use these standards today across all modern browsers.

As these technologies are implemented in browsers, the polyfills will shrink and you'll gain the benefits of native implementations. `webcomponents.js` automatically detects native support and switches to the fast path when available. Your elements seamlessly start relying on the native stuff--and get faster in the process.

Although most developers will want to use everything in `webcomponents.js`, the polyfills are designed to be used separately, as well. They're available independently as part of the default release download and can also be built standalone. For example, Mozilla's [x-tags](http://www.x-tags.org/) and Brick projects use a subset of the `webcomponents.js` polyfills.

**Note**: The `webcomponents.js` polyfill layer is no longer needed for browsers that fully implement the Web Components APIs, such as Chrome 36+.

## What's in webcomponents.js?

The polyfills are a bundle that includes the following libraries:

- Web Components
  - [Custom Elements](/polyfills/custom-elements.html) . Define new elements in HTML.
  - [HTML Imports](/polyfills/html-imports.html). Load element definitions and other resources declaratively.
  - [Shadow DOM](/polyfills/shadow-dom.html). Encapsulate DOM subtrees and the associated CSS.
- DOM
  - [URL](https://github.com/Polymer/URL). Parse URLs in JavaScript.
  - [WeakMap](https://github.com/Polymer/WeakMap). Shim for ES6 WeakMap type.
  - [Mutation Observers](https://github.com/Polymer/MutationObservers). Efficiently watch for changes in the DOM.

**Note**: A lighter `webcomponents-lite.js` build is included with the default download package including support for just Custom Elements and HTML Imports if you don't require Shadow DOM. You can [generate](https://github.com/WebComponents/webcomponentsjs#manually-building) custom builds supporting any combination of Web Component features too.

## Installation & usage

To start using these features today, first download `webcomponents.js` using Bower:

    bower install --save webcomponents/webcomponents.js

Then, include `webcomponents.js` as you would any other script:

    <script src="bower_components/webcomponents/webcomponents.js"></script>

Alternatively, you can install the Web Component polyfills using [npm](http://npmjs.org):

    npm install --save webcomponents.js

**Note**: Due to the nature of some of the polyfills, to maximize compatibility with other libraries, make sure that `webcomponents.js` is the first script tag in your document's `<head>`.

Once included, you can use HTML Imports, Custom Elements, Shadow DOM, and other emerging standards within your app. For example, to use a webcomponents.js element, just import it using an HTML Import:

    <link rel="import"
          href="bower_components/paper-tabs/paper-tabs.html">

Then use `<paper-tabs>` just like any built-in tag.

While each polyfill can be built as a standalone, the recommended approach is to include the entire `webcomponents.js` file. This ensures all dependencies are present and the largest portion of the future web platform is available. Since this is the most-used configuration, it is also the most tested.

## Building each polyfill

For information on how to build each polyfill library independently, see [Manually Building](https://github.com/WebComponents/webcomponentsjs#manually-building).

## Next steps

`webcomponents.js` is a wonderful foundation for working with Web Components in a cross-browser fashion. If you're ready to start building your own elements, and would like to learn about the additional features `webcomponents.js`, read our guide on [Custom Elements](/polyfills/custom-elements.html).
