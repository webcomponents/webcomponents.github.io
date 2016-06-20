---
title: Introduction to HTML Imports
authors: [agektmr]
date: 2015-01-05
original_date: 2015-01-05
image: devbytes-htmlimports.png
category: articles
layout: single
tags: ['Introduction', 'HTML Imports', 'Custom Elements', 'Shadow DOM', 'Template']
---

[Template](http://webcomponents.org/articles/introduction-to-template-element), [Shadow DOM](http://webcomponents.org/articles/introduction-to-shadow-dom), and [Custom Elements](http://webcomponents.org/articles/introduction-to-custom-elements) enable you to build UI components easier than before. But it's not efficient to load each resources such as HTML, CSS and JavaScript separately.

Deduping dependencies isn't easy either. To load a library like jQuery UI or Bootstrap today requires using separate tags for JavaScript, CSS, and Web Fonts. Things get even more complex if you deal with Web Components with multiple dependencies.

HTML Imports allow you to load those resources as an aggregated HTML file.

<!-- Excerpt -->

<div class="iframe-wrap">
  <iframe src="//www.youtube.com/embed/JhpOw8mq1jo"></iframe>
</div>

---

## Using HTML Imports
In order to load an HTML file, add a `link` tag with an `import` in the `rel` attribute and an `href` that contains a path to the HTML file. For example, if you want to load an HTML file called `component.html` into `index.html`:

*index.html*
```html
<link rel="import" href="component.html" >
```

You can load any resource including scripts, stylesheets, and web fonts, into the imported HTML just like you do to regular HTML files:

*component.html*
```html
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
```

`doctype`, `html`, `head`, `body` aren't required. HTML Imports will immediately load the imported document, resolve subresources and execute JavaScript, if any.

## Execution order
Browsers parse the content of HTML in linear order. This means `script` tags at the top of HTML will be executed earlier than the ones at the bottom. Also, note that browsers usually wait for any JavaScript code to finish executing before parsing the following lines of HTML.

In order to avoid `script` tag to block rendering of HTML, you can use `async` / `defer` attributes (or you can move all of your script tags to the bottom of the page). `defer` attribute postpones execution of the script until entire HTML is parsed. `async` attribute lets the browser asynchronously execute the script so it won't block rendering HTML.

Then, how do HTML Imports work?

Script inside an html import behave just like a `script` tag with a `defer` attribute. In the example code below, `index.html` will execute `script1.js` and `script2.js` inside `component.html` before executing `script3.js`.

*index.html*
```html
<link rel="import" href="component.html"> // 1.
<title>Import Example</title>
<script src="script3.js"></script>        // 4.
```

*component.html*
```html
<script src="js/script1.js"></script>     // 2.
<script src="js/script2.js"></script>     // 3.
```

1. Loads `component.html` from `index.html` and wait for execution
1. Execute `script1.js` in `component.html`
1. Execute `script2.js` in `component.html` after execution of `script1.js`
1. Execute `script3.js` in `index.html` after execution of `script2.js`

Note that by adding an `async` attribute to `link[rel="import"]`, HTML Import behaves just like [`async` attribute to `script` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script). It won't wait for the execution and load of imported HTML which also means it doesn't block rendering the original HTML. This can potentially improve performance of your website unless other scripts depends on the execution of the imported HTML.

## Going beyond origins
HTML Imports basically can't import resources from other origins. For example, you can't import an HTML file at http://example.com/ from http://webcomponents.org/.

To avoid this restriction, use CORS (Cross Origin Resource Sharing). To learn about CORS, read [this article](http://www.html5rocks.com/tutorials/cors/).

## window and document object in an imported HTML
Earlier, I mentioned JavaScript will be executed when an HTML file is imported. But this doesn't mean the markup in the imported HTML file will also be rendered inside the browser. You need to write some JavaScript to help here.

One caveat to using JavaScript with HTML Imports is that the `document` object in an imported HTML file actually points to the one in the original page.

Taking the previous code as an example, the `document` in `index.html` and `component.html` both refers to the `document` object in `index.html`.

So, how can you refer to the `document` object of the imported HTML file?

In order to obtain `component.html`'s `document` object from within the `index.html` page, refer to the `link` element's `import` property.

*index.html*
```js
var link = document.querySelector('link[rel="import"]');
link.addEventListener('load', function(e) {
  var importedDoc = link.import;
  // importedDoc points to the document under component.html
});
```

To obtain the `document` object from within `component.html` itself, refer to `document.currentScript.ownerDocument`.

*component.html*
```js
var mainDoc = document.currentScript.ownerDocument;
// mainDoc points to the document under component.html
```

If you are using `webcomponents.js`, use `document._currentScript` instead of `document.currentScript`. The underscore is used to polyfill the `currentScript` property which is not available in all browsers.

*component.html*
```js
var mainDoc = document._currentScript.ownerDocument;
// mainDoc points to the document under component.html
```

By writing the following code at the beginning of your script, you can easily access `component.html`'s `document` object regardless of if the browser supports HTML Imports or not.

```js
document._currentScript = document._currentScript || document.currentScript;
```

## Performance consideration
One of the benefits of using HTML Imports is to be able to organize resources. But this also means more overhead when loading those resources because of additional HTML file. There are couple of points to consider:

### Resolving dependencies
What if multiple imported documents all depend on, and try to load the same library? For example:

Say you are loading jQuery in two imported HTML files. If each import contains a `script` tag to load jQuery, it will be loaded and executed twice.

*index.html*
```html
<link rel="import" href="component1.html">
<link rel="import" href="component2.html">
```

*component1.html*
```html
<script src="js/jquery.js"></script>
```

*component2.html*
```html
<script src="js/jquery.js"></script>
```

This is a problem imports solve for free.

Unlike `script` tags, HTML Imports skip loading and executing HTML files that are previously loaded. Taking the previous code as an example, by wrapping the `script` tag that loads jQuery with an HTML Import, it will be loaded and executed only once.

![Dependency resolution](/img/stories/htmlimports-dependency.png)

But here's another problem: we have added one more file to load. What can we do with this bloating number of files?

Luckily, we have a tool called "vulcanize" for the solution.

### Aggregating network requests
[Vulcanize](https://github.com/polymer/vulcanize) is a tool to aggregate multiple HTML files into one, in order to reduce the number of network connections. You can install it via npm, and use it from the command line. There are [grunt](https://github.com/Polymer/grunt-vulcanize) and [gulp](https://github.com/sindresorhus/gulp-vulcanize) tasks as well so you can make vulcanize part of your build process.

To resolve dependencies and aggregate files in `index.html`:

```bash
$ vulcanize -o vulcanized.html index.html
```

By executing this command, dependencies in `index.html` will be resolved and will generate an aggregated HTML file called `vulcanized.html`.

Learn more about vulcanize [here](https://www.polymer-project.org/1.0/docs/tools/optimize-for-production).

Note: http2's server push abilities are considered to eliminate needs for concatenating and vulcanizing files in the future.

## Combining HTML Imports with Template, Shadow DOM and Custom Elements
Let's utilize HTML Imports with [the code we've been working through this article series](http://webcomponents.org/articles/introduction-to-custom-elements/).

In case you haven't read the previous articles:  With [templates](http://webcomponents.org/articles/introduction-to-template-element/), defining the content of your custom element can be declarative. With [Shadow DOM](http://webcomponents.org/articles/introduction-to-shadow-dom/), styles, IDs and classes of an element can be scoped to itself. With [Custom Elements](http://webcomponents.org/articles/introduction-to-custom-elements/), you can define your own custom HTML tags.

By combining these with HTML Imports, your custom web component will gain modularity and reusability. Anyone will be able to use it just by adding a `link` tag.

*x-component.html*
```html
<template id="template">
  <style>
    ...
  </style>
  <div id="container">
    <img class="webcomponents" src="http://webcomponents.org/img/logo.svg">
    <content select="h1"></content>
  </div>
</template>
<script>
  // This element will be registered to index.html
  // Because `document` here means the one in index.html
  var XComponent = document.registerElement('x-component', {
    prototype: Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function() {
          var root = this.createShadowRoot();
          var template = document.querySelector('#template');
          var clone = document.importNode(template.content, true);
          root.appendChild(clone);
        }
      }
    })
  });
</script>
```

*index.html*
```html
  ...
  <link rel="import" href="x-component.html">
</head>
<body>
  <x-component>
    <h1>This is Custom Element</h1>
  </x-component>
  ...
```

Notice that because the `document` object in `x-component.html` is the same one in `index.html`, you don't have to write anything tricky. It registers itself for you.

## Supported browsers
HTML Imports are supported by Chrome and Opera. Firefox supports it behind a flag as of December 2014 (Update: [Mozilla has said](https://hacks.mozilla.org/2014/12/mozilla-and-web-components/) they are not currently planning to ship Imports, citing the need to first see how ES6 modules play out).

To check availability, go to [chromestatus.com](https://www.chromestatus.com/features/4642138092470272) or [caniuse.com](http://caniuse.com/#feat=custom-elements). For polyfilling other browsers, you can use [webcomponents.js](https://github.com/Polymer/webcomponentsjs) (renamed from [platform.js](https://github.com/Polymer/platform)).

## Resources
So that's the HTML Imports. If you are interested in learning more about the HTML Imports, head over to:

* [HTML Imports: #include for the web - HTML5Rocks](http://goo.gl/EqeOBI)
* [HTML Imports spec](http://w3c.github.io/webcomponents/spec/imports/)
