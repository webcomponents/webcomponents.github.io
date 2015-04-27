---
title: Why Web Components?
authors: [zeno_rocha, addy_osmani]
date: 2015-04-27
original_date: 2015-04-27
image: why-web-components.jpg
category: articles
layout: single
tags: ['Introduction']
---

By now, you may have heard a lot of things about Web Components. Some people say it's the promise land, others say it has been oversold.

Although they're not going to solve all your life's problems, they do provide a paradigm shift from the traditional approach of web development.

If you still aren't sure about what exactly is Web Components or even why you should care about it, this article is for you.

<!-- Excerpt -->

### Why?

At the start of the web we had a small set of tags. We had `<form>`, we had `<select>` - you would build your pages out of these tags and they had meaning. They had encapsulation, they had default UI, they would emit events when something interesting happened. Most of the time you just worked in markup.

The way we build pages on the web these days is a little different. We either copy & paste chunks of HTML from CSS libraries like Bootstrap or litter our pages with all sorts of JavaScript frameworks and plugins. On top of that, reusing components from different frameworks in the same page isn't always possible. This means our pages end up with bloated CSS, bloated JavaScript or both.

What if HTML was expressive enough to allow us to extend HTML so we can fill in the gaps in functionality with our own tags? Well, Web Components enable that.

### How?

Specifically, Web Components are an umbrella term for four different W3C specifications:

* [Custom Elements](/articles/introduction-to-custom-elements/) lets you define your own HTML tags;
* [HTML Templates](/articles/introduction-to-template-element/) enables you to define blocks of markup with the ability to inject dynamic content into;
* [Shadow DOM](/articles/introduction-to-shadow-dom/) gives you the ability to scope markup and styles in a separate DOM tree;
* [HTML Imports](/articles/introduction-to-html-imports/) provides a way to include and reuse HTML documents in other HTML documents.

Each of these pieces is useful individually. But when combined, this whole package gives you:

* **Composability** (being able to create whole sites and apps by putting different elements together);
* **Encapsulation** (isolating markup, style, and behavior logic so they don’t leak into the rest of the page);
* **Reusability** (extending existing elements to create new elements, allowing you to stop reinventing the wheel).

That means we can finally fill any gaps in the platform in a meaningful way. Which also opens an opportunity for a less fragmented ecosystem, where components can truly interoperate with each other.

### More?

We hope this brief guide inspires you to learn more about Web Components and forth experimenting with your own custom elements.

If you want learn more you're in the right place, start taking a deep dive into our [introductory articles](/tags/introduction) or check it out this [overview video](https://www.youtube.com/watch?v=T5y_lmLngAk).

&lt;have-fun&gt; :)
