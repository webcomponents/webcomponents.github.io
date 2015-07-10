---
title: 'Resources'
description: The WebComponents.org Resources is a place to introduce useful tools and boilerplates to easily start hacking on your own custom elements.
layout: resources
---

The WebComponents.org Resources is a place to introduce useful tools and boilerplates to easily start hacking on your own custom elements.

## 1. Learn

Web Components is a set of specs that introduce a lot of new stuff. So, before creating anything, first you need to understand what is this all about. That's why we selected the best [Articles](/articles/) and [Presentations](/articles/) for you. More than that, we recommend you to read:

* [Component Kitchen's interactive tutorial](http://component.kitchen/tutorial);
* [Eric's article on how to create Custom Elements using VanillaJS](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/);
* [Polymer's documentation](http://www.polymer-project.org/docs/polymer/polymer.html);
* [X-Tag's documentation](http://x-tags.org/docs).

These will give you an idea on how these different solutions work and what's better for you.

## 2. Create

Once you learned what the heck is Web Components, it's time to create your own element! And to make your life even easier we put together some boilerplates:

* [Polymer Boilerplate](https://github.com/webcomponents/polymer-boilerplate);
* [X-Tag Boilerplate](https://github.com/webcomponents/x-tag-boilerplate);
* [VanillaJS Boilerplate](https://github.com/webcomponents/element-boilerplate).

In these boilerplates, we solve the same problem using different libraries (Polymer/X-Tag) or no library at all (VanillaJS). Always using the same tools and following the same directory structure.

We encourage a series of best practices like setting up a live demo, documenting your API, maintaining a changelog for release purposes, and sharing it on [Bower](http://bower.io/). It's basically an opinionated starter-kit with all you need included, from polyfills to automated tasks.

The only problem is that you still need to make some changes manually after forking it like changing an element's name in different files. So, in order to automate this process, we created a [Yeoman Generator](http://yeoman.io/) and a [Slush Generator](http://slushjs.github.io/#/) that can scaffold a Web Components project in seconds using the command-line:

* [Element Generator for Yeoman](https://github.com/webcomponents/element-boilerplate).
* [Element Generator for Slush](https://github.com/webcomponents/slush-element).

There are a bunch of cool stuff in this [NodeJS](http://nodejs.org/) tool that weren't able to be included in the boilerplate, things like validating your element's name according to [W3C's spec rules](http://www.w3.org/TR/custom-elements/#concepts) and check if there's a similar project on Bower.

## 3. Share

Now that you finished your element it's time to spread the word about it! You might not believe me but there are other people in the world that could benefit from it, so why not share it with them?

Nowadays, [Bower](http://bower.io/) is the most popular package manager for front-end code, that's why we recommend you to use it.

If you're not so sure about this whole Bower thing. Have no fear! [There's a screencast](https://www.youtube.com/watch?v=1rz334A8U7o) where Rob Dodson walks you through installing Bower, creating a project with the `bower init` command, and building your first element using Polymer.

Finally, don't forget to add the `web-components` keyword in your `bower.json` file. By doing this your awesome element will automagically appear on [CustomElements.io](http://customelements.io/).
