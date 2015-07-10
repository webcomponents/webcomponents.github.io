---
title: How GitHub is using Web Components in production
authors: [joshua_peek]
date: 2014-09-30
original_date: 2014-09-30
image: interview-with-joshua-peek.jpg
category: articles
layout: single
tags: ['Interview']
---

More and more people have been using Web Components. Some just want to play with
it, while others have been using it in really big projects.

In order to keep pushing this community forward we decided to start a series of
interviews with some early adopters.

Today, we'll start by asking some questions to [Joshua Peek](https://twitter.com/joshpeek/),
a programmer who has been working on [GitHub](https://github.com/) for the past
three years.

<!-- Excerpt -->

### Even with your high-traffic volume of visitors worldwide, GitHub.com is using Web Components in production. How hard was it to convince them to adopt a brand new technology like that?

We've actually been really cautious about jumping onto the latest client side
MVC library of the month. jQuery is pretty much the only framework we're still
using. When it comes to standardized web technologies, we're usually on the
bleeding edge.

The [initial <time> element extension](https://github.com/github/time-elements)
we wrote were a pretty minimal impact to start testing the Custom Element APIs.
If for some reason it didn't work out, we could easily roll back to our original
relative time rewriting script.

![GitHub.com's Custom Element](/img/stories/github-custom-element.jpg)

### The `<time>` element extensions you created are using only Custom Elements. What do you think about other specs such as HTML Imports, Templates, and Shadow DOM?

Template looks really wonderful and I'd love to use it today but the polyfills
can't quite handle all the edge cases. Just little things like inert scripts,
table element fragments and duplicate ids are all the pain points we have with
just using a dummy `<div>` element today. But if we can't trust the polyfill to
be consistent with the native template element then its just going to cause more
headaches.

Shadow DOM is definitely interesting but it seems to be the least well defined
spec-wise. I'm a little cautious to even use the polyfills since they need to
hijack almost every DOM query API to define the custom Shadow DOM behavior.
There could be some performance issues there.

HTML Imports polyfills rely on eval() to run embed scripts which we block for
security reasons and just require more undeveloped tooling to inline and rewrite
URLs. It's just a lot of work and complexity for not much benefit right now.
We're fine just importing both a script and style resource for a component we
want to use on a page.

I think we'll be sticking with just Custom Elements for now. The polyfills work
and the plain old JS apis work nicely with all our existing infrastructure.

### Is there any particular fallback strategy that you had to implement for users with old browsers?

Luckily the Custom Elements polyfill goes back to IE 9 which is the oldest
browser we support. We do still care about the degraded no-js experience beyond
that. For `<time>` elements its simple, if you don't run any JS you just get a
static date which is acceptable in those cases. I think we'll try to continue
the pattern of putting "noscript" content inside the Custom Element tag. Say you
wanted a custom element version of `<select>`. You could include a native
control inside the custom element then upgrade it when the JS actually runs. So
if the browser is too old or blocks JS, you still have some functioning control.

### Besides extending that particular tag, does GitHub have plans for using any other Custom Element?

Yeah, I think we're going to be moving forward in this direction. Next up
probably some simple controls like menus and modals. I'm really hopeful for a
simple XHR async submission pattern around forms. I've been experimenting on a
project called [async-form-element](https://github.com/josh/async-form-element).
Not quite production ready yet. But this is the kind of thing I hope gets pushed
down the HTML spec itself one day.

I don't ever see us going all in on Custom Elements for every possible
thing. We're not planning on boiling everything down to a single magic
`<github-app></github-app>`. Use native elements and controls when
possible and supplement with custom elements.

---

## Credits

* Questions written by [Zeno Rocha](https://twitter.com/zenorocha) and [Rob Dodson](https://twitter.com/rob_dodson).
* Illustration crafted by [Cameron McEfee](https://twitter.com/cameronmcefee) and
mixed by [Vitor Fernandes](https://twitter.com/vitoroff).
