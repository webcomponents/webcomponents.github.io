---
title: What's next for X-Tag project
authors: [daniel_buchner]
date: 2014-12-02
original_date: 2014-12-02
image: interview-with-daniel-buchner.jpg
category: articles
layout: single
tags: ['Interview', 'X-Tag']
---

Many things happened since Mozilla first announced its solution to bring Web Components capabilities to all modern browsers.

To continue our [interview series](/tags/interview) we invited [Daniel Buchner](http://www.backalleycoder.com/), creator of the [X-Tag](http://x-tags.org/) library, to explain how everything started and what's coming next.

<!-- Excerpt -->

### Two years ago you made your [first talk presenting X-Tag at Mozilla](https://air.allizom.org/x-tags/). What were your motivations to build it?

My motivation for writing X-Tag was two fold:

**I.** Create a polyfill for the Custom Elements spec. I saw this spec as the real foundation of Web Components - the other specs enhance the guts (Shadow DOM, Templates) and distribution (Imports) of custom elements.

**II.** I saw the Custom Elements API as a raw canvas that provided awesome lifecycle hooks and prototype definition capabilities, but lacked the features and affordances to solve the "80% case" for the development of robust, app-centric elements. I wanted to create a small library that would fill these gaps and make Custom Element development even easier for folks.

### How hard was to create a framework based on a constantly changing set of specs?

It wasn't all that difficult working with a changing spec/implementation, primarily because we quickly came to the conclusion that we would focus on the library, and collaborate with Google on a single, shared polyfill.

This allowed us to run fast while still contributing to the spec development effort. I imagine change tracking of the specs and W3 conversations would have been more difficult if I wasn't directly involved in the Working Group. As I try to imagine the process with the eyes of a developer on the periphery, we could have been a little better at broadcasting changes, but that's more of a general, W3 process point, not a critique of any specific Working Group.

### Are there plans to use Web Components inside of Firefox OS? What do you think is the future for the Brick project?

I know [Firefox OS](https://www.mozilla.org/en-US/firefox/os/) developers were eager to use Web Components, I believe they were waiting for the specs to land in [Gecko](https://developer.mozilla.org/en-US/docs/Mozilla/Gecko) before converting production FxOS code to use them. As far as [Brick](http://brick.mozilla.io/) is concerned, after a few pivots, they are now making decisions about the direction/future of the project.

### A couple of months ago you left Mozilla to join Target. How do you see the future of X-Tag now? Do you have plans to keep maintaining it? Are you planning to bring Web Components to Target?

I left Mozilla in April, and soon after the other major X-Tag developer, [Arron Schaar](https://twitter.com/arronschaar), left Mozilla for a start-up. We both still actively work on X-Tag, and we just published a 1.0 release this November (2014).

We are also in the process of [moving our docs](http://x-tag.readme.io/v1.0/docs) to [Greg Koberger's](https://twitter.com/gkoberger) excellent [ReadMe.io](https://readme.io/), and dramatically expanding code coverage. While working on other projects, I have started assembling a set of app-centric elements we intend to release around the end of the year, in a UI library named X-UI. X-UI will be a set of custom elements that only rely on the Custom Elements API (polyfilled or native).

If you're already using X-Tag or Polymer, you're set - just grab the elements you need and go go go!

---

## Credits

* Questions by [Zeno Rocha](https://twitter.com/zenorocha) and [Rob Dodson](https://twitter.com/rob_dodson).
