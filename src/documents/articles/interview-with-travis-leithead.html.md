---
title: Web Components and Microsoft Edge
authors: [travis_leithead, erik_isaksen]
date: 2015-07-13
original_date: 2015-07-13
image: interview-with-travis-leithead.jpg
category: articles
layout: single
tags: ['Interview', 'Browser Support']
---

Our [interview series](/tags/interview) continues with Microsoft Software Engineer & Internet Maker
[Travis Leithead](https://www.twitter.com/TravisLeithead), who is currently focused on DOM architecture
improvements and paving the path for Web Components in Microsoft's [Edge Browser](https://www.microsoft.com/en-us/windows/microsoft-edge).

<!-- Excerpt -->

Listen to the full 38 minute audio interview.

<audio controls>
      <source src="/media/interviews/interview-session-1_travis-leithead-07082015.mp3" type="audio/mpeg">
      <source src="/media/interviews/interview-session-1_travis-leithead-07082015.ogg" type="audio/ogg">
      <a href="/media/interviews/interview-session-1_travis-leithead-07082015.mp3">download audio</a>
</audio>

### What is your background & what is the work you do at Microsoft?

I guess I'll start on my background. I got started in web development as a kid. This was back when I got a book that told
how to do web programming in Netscape versus Internet Explorer 4. I would tinker, learn, play, and copy code from
the limited number of websites that were out there and that's kinda how I got my start.

Then I fell in love with C++ and went off to school and did a bunch of graduate work in the realms of Computer Security.
I figured I'd go and work for the NSA after college but a friend told me I should put in my application to Microsoft. I
already had done that but sure enough I got an interview. I was hired onto this team called "Internet Explorer" that I'd
heard about before; I was a pretty staunch Firefox user back then.

### How did you get involved with Web Components and what does it mean at Microsoft to be involved with Web Components?

I think it all started back in 2008 or 2009. A former co-worker of mine named [Tony Ross](https://www.linkedin.com/pub/tony-ross/8b/882/51) and I were invited to a call with
Google. I think [Raphael Weinstein](https://plus.google.com/111386188573471152118/) and maybe [Dimitri Glazkov](https://plus.google.com/+DimitriGlazkov/) were involved at that point but I can't recall. They wanted to talk
to us about data binding. They knew we had a data binding system with HTML tables and they wanted to pick our brains
on what a good system would be. We sat down and talked about it and our point of view was "Oh my goodness! Don't go there right now!".
This is fraught with dragons. You're going to pick an approach and it's going to be wrong. Maybe think about decomposing
that problem a little bit.

The next time we heard from them (maybe it was a year or two later), they had started down
[the current direction](http://www.w3.org/wiki/WebComponents/) of separate specs and this vision sort of the way you start to see it formed now with Shadow DOM,
Custom Elements, templates and all that. And so I've been involved from the periphery since those early days and then got
more involved as we helped Raphael with the template spec. Tony Ross was one of the editors before Templates got integrated
with HTML.

As for Microsoft being involved in Web Components, it means you get a lot a questions from the community. :-) Seriously though, it's been a
challenge because we haven't been able to really commit development resources to playing in the space. That's really
where the good quality feedback comes from. For me, being involved is usually grabbing time here or there between projects
with developers, coordinating on testing approaches, and figuring out what sounds sensible.

I also try to stay on the top of the flood of email from the different mailing lists on the different specs in the working group.
It's a pretty big time commitment but it is kind of fun and really interesting to see what's being developed with Web Components.
At times it can be frustrating that I can't say that "we have support for it" or anything like that yet.

### Microsoft has done a great deal of collaboration and interactive work with other browser vendors. Can you talk to us about the W3C Web Apps face-to-face meetings you've been having to finalize the specs? How have they gone? How can developers keep updated on the outcomes of these meetings?

Dimitri had been championing Web Components at various meetings of the Web Apps working group faces-to-face meetings for some time now.
He'd schedule some time at the meetings to talk about Web Components and in the early meetings he'd hear from Mozilla
& Apple "Eh", "Interesting", or "I don't like that approach" and I think it was very frustrating for him. When originally planning the 2015 Spring
meeting scheduled for the entire Web Apps working group, the organizers didn't have enough material to get everyone together for a
couple of days. That's when they decided to do specific topical break out sessions. The first one was meant to solely focus on Web Components.
Then Dimitri organized and said "listen...the spec with the most disagreement on various issues is Shadow DOM". Then he
wrote [a document summarizing the contentious bits of Shadow DOM](https://github.com/w3c/webcomponents/wiki/Shadow-DOM:-Contentious-Bits). In the document, he talked about multiple Shadow Roots & Hosts.
He talked about the Shadow Root Piercing Combinator, and a bunch of other issues in Shadow DOM that were disputed. He got us all
together; we didn't just have browser vendors in there, but we had library & framework representatives from
Polymer, React, and Angular who contributed to the conversations. My take away: the experience was fantastic. I
think having that focused effort on Web Components really accelerated the pace at which we were able to resolve
a lot of issues. In many cases, there wasn't that much disagreement. It was great to get
everyone on the same page. Once we got everyone to understand, the hang-ups and disagreements were really trivial to
resolve. In the first half-hour (or hour) at the last Shadow DOM meeting we had resolved 4 of the 5 major
issues. After dinner we came back with a tentative resolution for the remaining issue. It was just phenomenal. Everyone
was feeling really good about it.

The next meeting is on July 21st, 2015 in Mountain View California at Google's Headquarters. It's the same venue as the last
meeting except this time we are going in and looking at Custom Elements. The big topics, at least in my point of view,
are the timing issue of when you do upgrades to a Custom Element, the "is" syntax, and subclassing.

### We talked a little about Shadow DOM & Custom Elements but what about Templates & HTML Imports. HTML Imports are pretty contentious. Is that saved for last?

I think that's a safe bet for HTML Imports. Most of the issues have been resolved for Templates. In fact I don't know that anyone has any
beef with what's been integrated into the spec so far - including us. We're good. We are trying to find a way to get that
implemented. As for imports, I'm undecided on whether I like it or not. Part of me says it doesn't add enough unique value
aside from this dependency resolution model that's built into it. It's really easy to polyfill otherwise. There is also
the deal with the EcmaScript Harmony proposal for Module Loader and trying to rationalize what the difference is between
the module Loader and HTML Imports: what I think is that HTML Imports should rely on the Module Loader's algorithms for
doing dependency resolution and since Imports were implemented first before the Module Loader I think Mozilla & Microsoft are a little hesitant
to jump on board with that until some of the details of that Module Loader algorithms are worked out.

### With all of the major specs in the top 10 of Edge’s User Voice poll, what are your feelings on when any of them will make it into the Edge Browser?

Yeah...It's actually the top 5. :-) Numbers two through five are the Web Component specs and the first one is about updating our browser so
that everyone is using the most modern version. I can't really say exactly when these will be implemented, but Template is our first
priority from a polyfill standpoint. Template is one of the more challenging to polyfill and one of the more core pieces of Web Components.
Then after that will be Shadow DOM. That's probably the second hardest to polyfill. Then we'll likely do Custom Elements at the same
time or shortly thereafter. Then finally Imports after that. That's my plan for at least those four specs and CSS Variables (a.k.a., Custom Properties) will
likely get implemented somewhere in between as well.

If we are talking goals and not hard dates, I think I would be comfortable saying that we may have full Web Component support
in Edge by the end of next year. By the time we get them in Edge you'll likely see Web Components everywhere. :-)

## Credits

* Questions by [Erik Isaksen](https://twitter.com/eisaksen) and [Raphaël Rougeron](https://twitter.com/goldoraf).
* Image & audio by [Erik Isaksen](https://twitter.com/eisaksen)
