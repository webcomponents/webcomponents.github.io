---
title: Introduction to Custom Elements
authors: [agektmr]
date: 2014-11-24
image: devbytes-customelements.png
category: articles
layout: single
tags: ['Custom Elements', 'Shadow DOM', 'Template']
---
HTML tags provide various features targeting set of use cases assumed on the web platform. This can easily invite div soup once you try to implement complex components as a set of UI. That was okay when you used to build HTML on server side, but complexity gets worse to take similar approach on the browser side. Custom Elements will help there.

<!-- Excerpt -->

<div class="video-wrap">
  <iframe src="//www.youtube.com/embed/iVJA-lGkEFw"></iframe>
</div>

---

# What's Custom Elements?
Custom Elements enable developers to create their own HTML tags, let them use those on their websites, simplifies building process and help reusing those components.

# How to build a custom element
Defining a custom element is simple. Just call `document.registerElement()` with its tag name as the first argument.  

```
var XComponent = document.registerElement('x-component');
```
  
Now you can use `<x-component>`  wherever you want in the document.  

```
<x-component></x-component>
```
  
Note: `<x-component>` can appear in the document before definition of the custom element execution. See [HTML5Rocks article](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/) for details.  
## Naming rules
You need to have at least one '`-`' inside the name of a custom element. Any tag names without '`-`' will result in an error.  
  
Good  

* x-component
* x-web-component

Bad  

* web_component
* xelement
* XElement

## Imperative usage
Defined custom tag can be used declaratively by inserting `<x-component>` tag inside HTML, but you can also do an imperative approach.  

```
var XComponent = document.registerElement('x-component');
var dom = new XComponent();
document.body.appendChild(dom);
```
  
Above example is using `new` to instantiate a custom element.  

```
document.registerElement('x-component');
var dom = document.createElement('x-component');
document.body.appendChild(dom);
```
  
This example uses `document.createElement()` to instantiate a custom element.  

# Adding features to a custom element
Being able to use a custom tag name itself is fine, but it doesn't do much. Let's add some features to the element.  
  
In order to add features to a custom element, you first need to create a basic prototype object by calling `Object.create()` with `HTMLElement.prototype` as an argument. This way, you can have basic HTML element feature set, so you can add arbitrary functions. Once your prototype object looks good, set that as a value of a key '`prototype`' inside an object and call `document.registerElement()` with it as a second argument.  

```  
var proto = Object.create(HTMLElement.prototype);
proto.name = 'Custom Element';
proto.alert = function() {
  alert('This is ' + this.name);
};
document.registerElement('x-component', {
  prototype: proto
});
```

## Custom Element Structure
Let's see what's going on in a custom element using DevTools. Use "Inspect" panel to inspect the `x-component` tag we just created. You can see the `x-component` is an instance of a `x-component` prototype which is an instance of the `HTMLElement`.  
  
![](/img/stories/customelements-inherit.png)

# Type Extension Custom Element
You can create a custom element that extends a native HTML element's feature. This is called the Type Extension Custom Element and is used with its original tag name with an '`is`' attribute.  

```  
<div is="x-component"></div>
```
  
To define a type extension, add a key of '`extends`' inside of the second argument object with original tag name when calling `document.registerElement()`. Also the base prototype object should be created using the extending element's prototype instead of `HTMLElement`'s.  
  
Following is an example code when extending an `input` element.  

```
var XComponent = document.registerElement('x-component', {
  extends: 'input',
  prototype: Object.create(HTMLInputElement.prototype)
});
```
  
Notice that it `extends: 'input'` and prototype is based on `HTMLInputElement` instead of `HTMLElement`. Now you can use `<input is="x-component">` inside your document. By doing so, you can have extended APIs on top of basic `input` element's features.  
  
Note: You may wonder what happens if you set different elements for `'extends`' and '`prototype`'. Yes, it is possible and may bring something no ones ever think of. But as far as I have experimented, you won't get any valuable outcome.

## Use case at GitHub
So what's the point of Type Extension Custom Element? Let's look at the great existing example at GitHub website.  
  
![](/img/stories/customelements-relativetime.png)  
  
GitHub has a many components that displays date and time. Notice they are not absolute dates/times but relative dates/times against browser's current time. You should be able to imagine how to calculate that but GitHub is doing that using Type Extension Custom Element with [`time-elements`](https://github.com/github/time-elements).  
  
Let's look into how it works.  
  
![](/img/stories/customelements-time.png)  
  
There are four things you should notice:  

* `time` tag is used as a base element
* `datetime` attribute indicates an absolute date/time
* `relative-time` is specified as a type extension
* `TextContent` indicates a relative date/time
  
This is done by calculating a relative date/time out from an absolute date/time (`datetime`) attribute on the fly as a type extension.  
  
The benefit of using Type Extension Custom Element is that even if JavaScript is turned off or the browser doesn't support Custom Elements (including polyfill), `time` element will still show the date/time information as a fallback keeping its semantics. Try using DevTools and turn off JavaScript, you'll notice it shows absolute dates/times.  
  
Read webcomponents.org's [How GitHub is using Web Components in production](http://webcomponents.org/articles/interview-with-joshua-peek/) for more details about `time-elements`.  
# Lifecycle callbacks
I mentioned `relative-time` custom element inserts a relative date/time into `TextContent` on the fly. But when does that happen? You can define functions to be called when certain events happened on Custom Elements, which are called "lifecycle callbacks".   
  
Here's the list of lifecycle callbacks:  
  
**.createdCallback()**  
Called after the element is created.

**.attachedCallback()**  
Called when the element is attached to the document

**.detachedCallback()**  
Called when the element is detached from the document.

**.attributeChangedCallback()**  
Called when one of attributes of the element is changed.
  
In case of `relative-time`, `.createdCallback()` and `.attributeChangedCallback()` is hooked to insert a relative date/time to `TextContent`.  

## Example
To use lifecycle callback, just define those functions as a property of a prototype object when registering a custom element as I mentioned earlier.  

```  
var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  var div = document.createElement('div');
  div.textContent = 'This is Custom Element';
  this.appendChild(div);
};
var XComponent = document.registerElement('x-component', {
  prototype: proto
});
```

# Combining with Templates and Shadow DOM
By involving Templates and Shadow DOM on `.createdCallback()` you can build a more web component element. Let's have a look at a sample code. To learn about Templates and Shadow DOM, read respective articles ([Template](http://blog.agektmr.com/2014/10/template-web-components.html), [Shadow DOM](http://blog.agektmr.com/2014/11/shadow-dom-web-components.html)) written previously.  
  
**HTML**
```
<!-- Template Definition -->
<template id="template">
  <style>
    ...
  </style>
  <div id="container">
    <img src="http://webcomponents.org/img/logo.svg">
    <content select="h1"></content>
  </div>
</template>
```

```
<!-- Custom Element usage -->
<x-component>
  <h1>This is Custom Element</h1>
</x-component>
```

**JavaScript**
```
var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  // Adding a Shadow DOM
  var root = this.createShadowRoot();
  // Adding a template
  var template = document.querySelector('#template');
  var clone = document.importNode(template.content, true);
  root.appendChild(clone);
}
var XComponent = document.registerElement('x-component', {
  prototype: proto
});
```
  
[Here's a live example.](http://jsbin.com/yugoka/3/edit?html,js,output)

# Supported browsers
Custom Elements are supported by Chrome and Opera. Firefox supports it behind a flag as of November 2014. To check availability, go to [chromestatus.com](https://www.chromestatus.com/features/4642138092470272) or [caniuse.com](http://caniuse.com/#feat=custom-elements). For polyfilling other browsers, you can use [webcomponents.js](https://github.com/Polymer/webcomponentsjs) (renamed from [platform.js](https://github.com/Polymer/platform)).  

# Resources
So that's the Custom Elements. [As you may have noticed](http://webcomponents.org/articles/interview-with-joshua-peek/), Custom Elements are used in the production of GitHub supporting IE9 by using polyfill. Now is your time to try this feature.  
  
If you are interested in learning more about the Custom Elements, head over to:  

* [Custom Elements: defining new elements in HTML - HTML5Rocks](http://goo.gl/ozdC4Q)
* [Custom Elements spec](http://w3c.github.io/webcomponents/spec/custom/)
