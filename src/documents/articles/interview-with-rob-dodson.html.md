---
title: The Journey to Web Components
authors: [rob_dodson]
date: 2014-10-31
original_date: 2014-10-31
image: interview-with-rob-dodson.jpg
category: articles
layout: single
tags: ['Interview', 'Polymer']
---

Continuing our [interview series](/tags/interview) with Web Components' early adopters, this week we speak with [Rob Dodson](http://robdodson.me/), a developer advocate at Google focused on [Polymer](https://www.polymer-project.org/) and Web Components.

<!-- Excerpt -->

### Your first blog posts related to Web Components were published before joining Google, do you think it somehow influenced your current position?

Absolutely! Prior to working at Google I was working as a contractor building UI libraries. It felt like everyone I worked for had a similar need: Build a UI system so they could get their mobile web presence squared away. When I discovered Web Components I was like "Woah! This is it!" and I started trying to learn as much as I could.

For me, the best way to deeply understand something is to write about it. There are two benefits to publishing as you explore a topic: It forces you to put in the extra effort to really understand the subject, and it gets your name out there. I found that my blog posts were getting picked up by the various front end newsletters and I was also spending more and more time in the (now defunct) Polymer IRC channel.

Eventually [Eric Bidelman](https://twitter.com/ebidel) got in touch with me and asked if I'd be interested in applying to join the DevRel team.

### You've been working along with the Polymer team for 9 months already. What have been your biggest challenges and what have you been working on lately?

As far as Polymer is concerned, probably the biggest challenge is managing all of the inbound support requests. We have a few hundred components, and we're trying to support the last two versions of each browser with a set of technologies and polyfills that are pretty bleeding edge. Some things break, some things are not as polished as we would like, but we're a very small team (less than 10 people) and we have to try to prioritize as best we can — tackle the really gnarly problems, and keep making progress.

Personally, I just launched [a new YouTube series called Polycasts](https://www.youtube.com/watch?v=jrt7sMq9lO0) to help developers learn Polymer. I'm super excited to be doing these shows so I hope folks tune in and let me know what kinds of episodes they would like to see.

### How are Web Components being adopted internally in other Google products?

Many Google products are used by millions of users so any kind of big paradigm shift can take a while. I've personally found a ton of success working with internal prototypers who are more free to experiment with new technologies in a relatively safe environment.

There are a number of Google products which are now experimenting in Polymer, and then that work gets converted over to whatever stack the engineering team for the product uses (Closure or GWT, for example). There are also a handful of internal tools which are being built entirely in Polymer because they don't have to worry about supporting really old legacy browsers like IE8. I think prototyping and internal tools is a great place for any organization to start playing around with Web Components.

### Lots of people are starting to use Polymer in many different projects. Do you consider it ready for production?

The answer to that question is a bit nuanced :)

Polymer is a future facing project, and we only aim to support the last two versions of each browser. This means you can still use Polymer in production, but if you need to support older browsers like IE8 you may need to do some UA sniffing and serve them a different experience.

It's easy to conflate Polymer and Web Components (I probably don't help this situation with the way I evangelize both at the same time), but a point I'd like to get across is that each of the Web Component technologies can be used standalone and each has a different level of production readiness. Custom Elements have a very small polyfill and big sites like Github are already using them in production. If you don't feel like Polymer is right for you, then I'd encourage you to download the Custom Elements polyfill and just give that a shot. Start small and use the bits that make sense.

### What's next for Polymer?

There are a handful of things the Polymer engineers are focusing on at the moment, mainly performance, testing, and accessibility. Performance is always tough because our goal is to get browser makers to actually implement the Web Component standards, not to just build fast polyfills. So there's a tension there. We recognize that to succeed we will need to make improvements, especially on Mobile Safari, so that's become a big focus for us as of late. For testing, we're working on getting all of our repos running on SauceLabs so we can verify that things are consistent cross-browser. We have over 100 repos so this takes some time but we're making good progress. And we recently released core-a11y-keys to help with accessibility keybindings but we still have a lot more to do in that respect.

We're also working to really polish the elements that are already available. Just looking at Github, our closed ticket count is at 843, and much of that came after our big public announcement at Google I/O. Within Developer Relations we're also working to improve the docs and to build more sample apps and boilerplates that developers can leverage.

Overall I feel really good about where things are headed and am looking forward to what the next few months will bring!

---

## Credits

* Questions by [Zeno Rocha](https://twitter.com/zenorocha).
* Image from [Halloween Experiment](http://www.itsamessage.com/halloween2014/#FZyefIp) by [Jaume Sanchez](https://twitter.com/thespite) and [Ricardo Cabello](https://twitter.com/mrdoob).
