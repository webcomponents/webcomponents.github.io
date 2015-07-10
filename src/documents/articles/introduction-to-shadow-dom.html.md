---
title: Introduction to Shadow DOM
authors: [agektmr]
date: 2014-10-30
original_date: 2014-10-30
image: devbytes-shadowdom.png
category: articles
layout: single
tags: ['Introduction', 'Shadow DOM', 'Template']
---
Shadow DOM is an emerging web standard that gives developers access to style and DOM scoping. Learn how to use it on your own website.

<!-- Excerpt -->

<div class="iframe-wrap">
  <iframe src="//www.youtube.com/embed/Is4FZxKGqqk"></iframe>
</div>

---

## What is Shadow DOM?

![HTML5 video tag](/img/stories/shadowdom-video.png)

Here's a video rendered in the browser using the HTML video tag. While the code is as simple as a single tag, the video has built-in controls.

```html
<video src="http://craftymind.com/factory/html5video/BigBuckBunny_640x360.mp4" controls></video>
```

If you open up the DevTools and turn on 'Show user agent shadow DOM', we can actually look at the source for the video controls.

![Show user agent shadow DOM](/img/stories/shadowdom-settings.png)

And you'll see that they're actually made of HTML. This is an example of using the Shadow DOM.

![Shadow DOM in DevTools](/img/stories/shadowdom-devtools.png)

The nice thing about Shadow DOM is that you can actually use this feature in your own components.

## Structure of a Shadow DOM

An element that has a shadow root associated with it is called "shadow host". The shadow root can be treated as an ordinary DOM element so you can append arbitrary nodes to it.

![Structure of a Shadow DOM](/img/stories/shadowdom-architecture.png)

With Shadow DOM, all markup and CSS are scoped to the host element. In other words, CSS styles defined inside a Shadow Root won't affect its parent document, CSS styles defined outside the Shadow Root won't affect the main page.

## How I build a Shadow DOM

In order to create a Shadow DOM, invoke `.createShadowRoot()` on a  DOM node and obtain a Shadow Root. By adding elements to the Shadow Root, you can build Shadow DOM.

```html
<div id="host"></div>
```

```js
var host = document.querySelector('#host');
var root = host.createShadowRoot(); // Create a Shadow Root
var div = document.createElement('div');
div.textContent = 'This is Shadow DOM';
root.appendChild(div); // Append elements to the Shadow Root
```

Notice that elements added to the Shadow Root won't be queried. In this case
`document.querySelector('#host div')` results in `null`.

## Reflecting the Shadow Host's content to a Shadow DOM

Sometimes you may want to project the child elements of a Shadow Host into a Shadow DOM.

Imagine you want the similar functionality to the combination of `<select>` and `<option>`. They are separate tags but make sense as a select menu when used together.

With Shadow DOM, you can do this for example: A name tag that is styled in the Shadow DOM, but needs to pull in the user's name from an external input.

![Shadow DOM name tag example](/img/stories/shadowdom-content.png)

```html
<div id="nameTag">Bob</div>
```

In order to achieve this, you can use `<content>` element inside the Shadow DOM.

```js
var host = document.querySelector('#host');
var root = host.createShadowRoot();
var content = document.createElement('content');
content.setAttribute('select', 'h1'); // <content select="h1"></content>
root.appendChild(content);
```

```html
<div id="host">
  <h1>This is Shadow DOM</h1>
<div>
```

By giving `<content>` tag a `select` attribute with CSS selector as a value, you can distribute host's content to wherever you want.

Note that `select` attribute can only take direct children of the host element. For example, you can NOT assign descendant elements to the `select` attribute:

```html
<div id="host">
  <div class="child">
    <h1>This is Shadow DOM</h1>
  </div>
</div>

<content select=".child h1"></content> // Not allowed
```

## Combining with Templates

Shadow DOM is fantastic as you have learned so far, but adding contents imperatively isn't that efficient and is not designer friendly. Instead, you may wish to use HTML to define your content.

Here's where the `<template>` element comes in. Using the template element, you can define contents of your Shadow DOM declaratively with HTML. To learn about the &lt;template&gt; element, check out [the previous post](http://webcomponents.org/articles/introduction-to-template-element/).

```html
<!-- Content of <template> will be appended to the Shadow Root -->
<template id="template">
  <style>
    ...
  </style>
  <div id="container">
    <img src="http://webcomponents.org/img/logo.svg">
    <content select="h1"></content> // Insert h1 here
  </div>
</template>

<div id="host">
  <h1>This is Shadow DOM</h1>
</div>
```

```js
var host = document.querySelector('#host');
// Create a Shadow Root
var root = host.createShadowRoot();
var template = document.querySelector('#template');
// Copy the <template>
var clone = document.importNode(template.content, true);
// Append template to the Shadow Root
root.appendChild(clone);
```

[Here's a live example.](http://jsbin.com/bahera/4/edit?html,js,output)

## Supported browsers

Shadow DOM is supported by Chrome and Opera. Firefox supports it behind a flag as of October 2014. To check availability, go to [caniuse.com](http://caniuse.com/#search=components). For polyfilling other browsers, you can use [platform.js](https://github.com/polymer/platform) ([renamed](https://blog.polymer-project.org/announcements/2014/10/16/platform-becomes-webcomponents/) as webcomponents.js in Nov. 2014).

## Resources

So that is the very basic of the Shadow DOM. But this is only the tip of iceberg. There's tons of interesting things to learn around Shadow DOM such as

* Styling
* Event handling
* Working with multiple Shadow Roots

If you are interested in learning them, check out following pages:

* [Shadow DOM 101](http://goo.gl/1cxTS7)
* [Shadow DOM 201](http://www.html5rocks.com/tutorials/webcomponents/shadowdom-201/)
* [Shadow DOM 301](http://www.html5rocks.com/tutorials/webcomponents/shadowdom-301/)
* [Shadow DOM Specification](http://www.w3.org/TR/shadow-dom/)

Head to [posts tagged with Shadow DOM](http://webcomponents.org/tags/shadow-dom/) to learn even more.
