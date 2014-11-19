---
title: 'HTML Imports'
layout: polyfills
---

## Learn the tech

### Why HTML Imports?

This webcomponents.js repository contains a JavaScript polyfill for the [HTML Imports](http://w3c.github.io/webcomponents/spec/imports/) specification.

HTML Imports are a way to include and reuse HTML documents in other HTML documents. As `<script>` tags let authors include external JavaScript in their pages, imports let authors load full HTML resources.  In particular, imports let authors include [Custom Element](/polyfills/custom-elements.html) definitions from external URLs.

### Basic usage

For HTML imports use the `import` relation on a standard `<link>` tag, for example:

    <link rel="import" href="import-file.html">

## Polyfill details

### Getting Started

Include the `HTMLImports.js` or `HTMLImports.min.js` (minified) file in your project.

    <script src="webcomponentsjs/HTMLImports.js"></script>

Alternatively, you can directly use `webcomponents.js` (or the minified `webcomponents.min.js` file) in your project.

### Polyfill Notes

In imported documents, `href` and `src` attributes in HTML, and `url` properties in CSS files, are relative to the location of the imported document, not the main document.

The HTML Imports polyfill begins processing link tags when the `DOMContentLoaded` event fires. To know when loading is complete, listen for the `HTMLImportsLoaded` event on `document` or `window`.

Example:

    <script>
    window.addEventListener('HTMLImportsLoaded', function(e) {
      // all imports loaded
    });
    </script>

The polyfill loads linked stylesheets, external scripts, and nested HTML imports, but does not parse any data in the loaded resources. For parsing imports, combine HTML Imports with  [Custom Elements](/polyfills/custom-elements.html). As long as the HTML Imports is loaded first, the Custom Elements polyfill will detect it, and process all imports when `HTMLImportsLoaded` event fires.

#### The WebComponentsReady event

Under native imports, `<script>` tags in the main document block the loading of imports. This is to ensure the imports have loaded and any registered elements in them have been upgraded. This native behavior is difficult to polyfill so the HTML Imports polyfill doesn't try. Instead the `WebComponentsReady` event is a stand in for this behavior:

    <script>
      window.addEventListener('WebComponentsReady', function(e) {
        // imports are loaded and elements have been registered
      });
    </script>

#### Other notes

- In a native HTML Imports, `document.currentScript.ownerDocument` references the import document itself. In the polyfill use `document._currentScript.ownerDocument` (note the underscore).

## Tools & Testing

For running tests or building minified files, consult the [Manual Builds](https://github.com/WebComponents/webcomponentsjs#manually-building) guide.