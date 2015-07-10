---
title:  webcomponents.js 0.6.0 release
authors: [taylor_savage]
date: 2015-03-27
original_date: 2015-03-27
category: articles
layout: single
tags: ['Polyfills']
---

Exciting news - the 0.6.0 version of the `webcomponents.js` polyfills has been [released](https://github.com/webcomponents/webcomponentsjs/tree/v0.6.0). A lot of critical fixes are in this release - highlights are described below.

<!-- Excerpt -->


This also marks about 6 months since the polyfills were moved from the Polymer organization over to WebComponents.org. Here are some stats comparing the Polymer/platform repository activity in the six months prior to the move (the precursor to webcomponents.js), to the WebComponents/webcomponentsjs repository in the six months since its creation:

|                         | platform          |         webcomponentsjs  |
|-------------------------|-----------------------------------------|-----------------------------------------------------|
| Contributors            | 3                                       | 26                                                  |
| Commits                 | 64                                      | 155                                                 |
| Non-Polymer Team Contributors | 0                                       | 19                                                  |
| Non-Polymer Team Commits     | 0                                       | 50                                                  |

A few things you'll note:
- Huge increase in activity overall.
- Large chunk of commits are now coming from outside the Polymer team.
- The Polymer team's activity on the polyfills has picked up significantly as well.


All of these things are great news for the future of the polyfills and the continued growth of Web Components - we couldn't be more excited.

On to the highlights of 0.6.0:

- Relative path resolving in CSS [is fixed](https://github.com/webcomponents/webcomponentsjs/issues/134). Previously if a stylesheet referenced a file with a relative path, under the Shadow DOM, the path would not be resolved correctly.  A major shout-out to [nazar-pc](https://github.com/nazar-pc), who created a PR that fixes this.
- `flags.log.split` [no longer throws an error](https://github.com/webcomponents/webcomponentsjs/pull/223) upon loading webcomponent polyfills.
- `Node.isEqualNode` and `document.createTreeWalker` [are now implemented](https://github.com/webcomponents/webcomponentsjs/pull/227). Thank you to [eeid26](https://github.com/eeid26) for writing the implementations of these such that they work under the polyfill.
* Patched `importNode` to work around IE11 bug. This was a major blocker for IE11 support, and [is now fixed](https://github.com/webcomponents/webcomponentsjs/pull/226).
- Added `nodeValue` to cdata. Under the polyfill, the CharacterData prototype didn't have nodeValue accessors. [Now it does](https://github.com/webcomponents/webcomponentsjs/pull/225).
- Fixed the `makeScopeMatcher` regular expression. Thank you to [vicb](https://github.com/vicb) for pointing this out and [fixing it](https://github.com/webcomponents/webcomponentsjs/pull/205)!
- We're now actively testing against EdgeHTML in IE - as close to you can get to IE's new [Spartan rendering engine](http://blogs.msdn.com/b/ie/archive/2015/03/18/rendering-engine-updates-in-march-for-the-windows-10-technical-preview.aspx) - and are making sure the changes work fine there too.
- [Known Issues](https://github.com/webcomponents/webcomponentsjs#known-issues) section added to the `README`. There is a subset of issues that come up with the Polyfills that are just fundamentally unsolvable - usually due to a bug in a browser version, or just the basic inability to truly and completely polyfill the power that is ShadowDOM. A list of Known Issues has been added to the `README` to document where these sharp edges come up, and how to work around them.


We'll be regularly releasing `webcomponents.js` as fixes come in - keep the PR's and issues coming!
