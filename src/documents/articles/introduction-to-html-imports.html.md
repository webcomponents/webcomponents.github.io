---
title: Introduction to HTML Imports
authors: [agektmr]
date: 2014-12-19
image: devbytes-htmlimports.png
category: articles
layout: single
tags: ['HTML Imports', 'Custom Elements', 'Shadow DOM', 'Template']
---
[Template](/articles/introduction-to-template-element), [Shadow DOM](/articles/introduction-to-shadow-dom), and [Custom Elements](/articles/introduction-to-custom-elements) enable you to build UI components easier than before. But it's not efficient to load each resources such as HTML, CSS and JavaScript separately.

Deduping dependencies isn't easy either. To load a library like jQuery UI or Bootstrap today requires using separate tags for JavaScript, CSS, Web Fonts. Things get even more complex if you deal with Web Components with multiple dependencies.

HTML Imports allow you to load those resources as an aggregated HTML file.

<!-- Excerpt -->

<div class="video-wrap">
  <iframe src="//www.youtube.com/embed/JhpOw8mq1jo"></iframe>
</div>

---

## Using HTML Imports
In order to load an HTML file, add a `link` tag with `import` in `rel` attribute along with the URL of a resource in `href` attribute. For example, if you want to load an HTML file called component.html into index.html:

index.html
```html
<link rel="import" href="component.html" >
```

You can load any resources including scripts, stylesheets, web fonts, into the imported HTML just like you do to regular HTML files:

component.html
```html
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
```

`doctype`, `html`, `head`, `body` aren't required. HTML Imports will immediately load the imported document, resolve subresources and execute JavaScripts, if any.

## Execution order
It's important to understand the order of script execution when importing an HTML. If you don't, it could bring an unexpected behavior depending on relationship between scripts.

HTML Imports behaves just like `script` tag with a `defer` attribute. In the example code below, index.html will execute script1.js and script2.js inside component.html before executing script3.js.

index.html
```html
<link rel="import" href="component.html"> // 1.
<title>Import Example</title>
<script src="script3.js"></script>        // 4.
```

component.html
```html
<script src="js/script1.js"></script>     // 2.
<script src="js/script2.js"></script>     // 3.
```


1. Loads component.html from index.html and wait for execution
1. Execute script1.js in component.html
1. Execute script2.js in component.html after execution of script1.js
1. Execute script3.js in index.html after execution of script2.js


Note that by adding an `async` attribute to `link[rel="import"]`, HTML Import behaves just like [`async` attribute to `script` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script). It won't wait for the execution and load of imported HTML and continue loading original HTML. This can potentially improve performance of your website unless other scripts depends on the execution of the imported HTML.

## Going beyond origins
HTML Imports basically can't import resources from other origins. For example, you can't import an HTML file at [http://example.com](http://example.com/) from [http://webcomponents.org/](http://webcomponents.org/).

To avoid this restriction, use CORS (Cross Origin Resource Sharing). To learn about CORS, read [this article](http://www.html5rocks.com/tutorials/cors/).

## window and document object in an imported HTML
Earlier, I mentioned JavaScript will be executed when an HTML is imported. But this doesn't mean the markup in the HTML will also be rendered inside the browser. You need to write some lines of JavaScript to help here.

One caveat to use JavaScript with HTML Imports is that the `document` object in an imported HTML actually points to the one in the original HTML.

Taking the previous code as an example, `document` in index.html and component.html both refers to the `document` object in index.html.

Then, how can you refer to the `document` object of the imported HTML?

In order to obtain the `document` object under component.html from index.html, refer to the `link` element's `import` property.

index.html
```js
var link = document.querySelector('link[rel="import"]');
link.addEventListener('load', function(e) {
  var importedDoc = link.import;
  // importedDoc points to the document under component.html
});
```

To obtain the `document` object under component.html from component.html, refer to `document.currentScript.ownerDocument`.

component.html
```js
var mainDoc = document.currentScript.ownerDocument;
// mainDoc points to the document under component.html
```

If you are using webcomponents.js, use `document._currentScript` instead of `document.currentScript`.

component.html
```js
var mainDoc = document._currentScript.ownerDocument;
// mainDoc points to the document under component.html
```

By writing following code at the beginning of your script, you can transparently access component.html's `document` object regardless of if the browser supports HTML Imports.

```js
document._currentScript = document._currentScript || document.currentScript;
```

## Performance consideration
One of the benefits of using HTML Imports is to be able to organize resources. But this also means more overhead when loading those resources because of additional HTML file. There are couple of notes to take:

### Resolving dependencies
What if a root document loads multiple HTML files that all depends on the same library and loads it independently?

Say you are loading jQuery on two imported HTML files. If you use `script` tag to load one, they will load twice, and execute twice.

index.html
```html
<link rel="import" href="component1.html">
<link rel="import" href="component2.html">
```

component1.html
```html
<script src="js/jquery.js"></script>
```

component2.html
```html
<script src="js/jquery.js"></script>
```

It's not impossible to manage URL and avoid duplicated load and execution, but that is not efficient. HTML Imports solve this for free.

Unlike `script` tag, HTML Imports skip loading and executing HTML files that are previously loaded. Taking the previous code as an example, by wrapping `script` tag that loads jQuery with an HTML, it will be loaded and executed only once.

![Dependency resolution](/img/stories/htmlimports-dependency.png)

But here's another subject: we have added one more file to load. What can we do with this bloating number of files?

Luckily, we have a tool called "vulcanized" for the solution.

### Aggregating network requests
Vulcanize is a tool to aggregate multiple HTML files into one, in order to reduce the number of network connections. You can install it via npm, use it from command line. There are grunt task and gulp task as well so you can make vulcanize as part of your build process.

To resolve dependency and aggregate files in index.html:

```bash
$ vulcanize -o vulcanized.html index.html
```

By executing this command, dependency in index.html will be resolved and will generate an aggregated HTML file called vulcanized.html.

Learn more about vulcanize [here](https://www.polymer-project.org/articles/concatenating-web-components.html).

## Combining HTML Imports with Template, Shadow DOM and Custom Elements
Let's utilize HTML Imports with [the code we've been working through this article series](http://webcomponents.org/articles/introduction-to-custom-elements/).

In case you haven't read previous articles:  With [templates](http://webcomponents.org/articles/introduction-to-template-element/), defining the content of your custom element can be declarative. With [Shadow DOM](http://webcomponents.org/articles/introduction-to-shadow-dom/), styles, ids and classes of the content can be scoped to itself. With [Custom Elements](http://webcomponents.org/articles/introduction-to-custom-elements/), you can define your own custom HTML tag.

By combining these with HTML Imports, your custom web component will gain modularity and reusability. Anyone will be able to use it just by adding a `link` tag.

x-component.html
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

index.html
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

Notice that because the `document` object in x-component.html is the same one in index.html, you don't have to write anything tricky to register the custom element.

## Supported browsers
HTML Imports are supported by Chrome and Opera. Firefox supports it behind a flag (Update: [Mozilla won't ship it](https://hacks.mozilla.org/2014/12/mozilla-and-web-components/)) as of December 2014. To check availability, go to [chromestatus.com](https://www.chromestatus.com/features/4642138092470272) or [caniuse.com](http://caniuse.com/#feat=custom-elements). For polyfilling other browsers, you can use [webcomponents.js](https://github.com/Polymer/webcomponentsjs) (renamed from [platform.js](https://github.com/Polymer/platform)).

## Resources
So that's the HTML Imports. If you are interested in learning more about the HTML Imports, head over to:

* [HTML Imports: #include for the web - HTML5Rocks](http://goo.gl/EqeOBI)
* [HTML Imports spec](http://w3c.github.io/webcomponents/spec/imports/)
