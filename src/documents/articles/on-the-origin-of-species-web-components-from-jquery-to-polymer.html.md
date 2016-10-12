---
title: On the Origin of Species: Web Components from jQuery to Polymer
authors: [jason_strimpel]
date: 2015-05-29
original_date: 2015-05-29
image: web-components-from-jquery-polymer.png
category: articles
layout: single
link: http://webcomponents.org/articles/on-the-origin-of-species-web-components-from-jquery-to-polymer/
tags: ['Custom Elements', 'Documentation', 'Best Practices', 'Interview']
---

I recently co-authored [*Web Components from jQuery to Polymer*](http://shop.oreilly.com/product/0636920032922.do)
with [Jarrod Overson](https://twitter.com/jsoverson). This was the first book I had co-written.
The process was challenging and interesting especially with respect to the topic,
web components. This is not only because the specifications are somewhat moving targets, but also because
the initial book proposal did not even include web components! However, I believe the end result was much
better than it could have been if the goal had been a web components book from the start.

<!-- Excerpt -->

## Editors are Awesome
When I pitched my idea to O’Reilly the topic was "widgets". The gist of the book was going to be looking
beneath the hood of common widget libraries and examining how they implemented common features such as
making an element draggable. Naturally I thought my proposal was solid because I could not find a book
that covered this topic in great detail. However, my opinion was based on my limited perspective of the
industry and heavily influenced by my own ego. This is where O’Reilly stepped in and provided some
constructive feedback. They suggested that it would be a good idea to be more forward thinking and
include web components. That single piece of advice changed the book from a basic, informative piece of
work to a choose-your-own adventure style, transformative guide that takes the reader seamlessly from
widget patterns to web components to [Polymer](https://www.polymer-project.org).

## Staying True to the Mission
Web components, in particular custom elements, are a powerful interface for making the web platform
truly extensible. However, without a solid understanding of the DOM you will have a difficult time
fully leveraging custom elements. You will inevitably run for the cover of a DOM abstraction layer, i.e.,
[jQuery](https://jquery.com/) and jQuery plugins/widgets when things begin to get complicated.
This isn’t necessarily a bad approach in all cases, but in most cases the overhead isn’t necessary.
In order to help you bridge this abstraction gap and prepare for the future of web development, the
first part of the book is dedicated dissecting and implementing patterns such as dragging and resizing
elements. jQuery is still used to help ease the pain, while still allowing you to get your hands dirty,
so you can understand what the Great Oz is doing behind the curtain. The end result is a fully functioning
dialog widget.

## A Natural Transition
The third part of the book is my favorite part because it introduces web components in the context of the
web with which we are all familiar. It takes the dialog widget created in the first and second parts and
shows how to adapt it to be a web component covering each of the different technologies – templates, shadow DOM, custom
elements, and imports. It also doubles as a migration plan for when you are ready to make the web components jump!

## Take 'em to the Bridge
When I began this book I had minimal experience with Polymer. It was evident that an expert was needed in order
to do the topic justice. This is where I brought in Jarrod Overson. After few IPAs and some really slick persuasion
on my part Jarrod agreed to join me on my authoring journey. Jarrod did an amazing job transitioning the reader
from native web components to Polymer. He was also an excellent collaborator in general. He helped to further
define the book's mission and shape it into what it is today.

## The Days of Future Passed
The unfortunate part of writing a book about bleeding edge technology is that the information can quickly
become somewhat dated. For example, Polymer 1.0 was recently released, but at the time of writing 0.3 was the
latest and greatest. That is not to say that there is still not a great value in the book reading, but rather
that there will eventually be more editions.

## Closure
Writing a book was a massive undertaking, but it was a great learning experience. When I started the project
I had no idea that end result would be a resource on web components. However, I am extremely pleased with the
outcome and grateful for the guidance and collaboration from O'Reilly and Jarrod. If you are in need of a
practical resource on web components then I recommend giving it a
[read](http://shop.oreilly.com/product/0636920032922.do). Although, my recommendation is a tad bit biased. :)

