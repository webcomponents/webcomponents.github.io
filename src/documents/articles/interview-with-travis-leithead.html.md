---
title: Web Components and Microsoft Edge
authors: [travis_leithead, erik_isaksen]
date: 2015-07-08
original_date: 2015-07-08
image: interview-with-travis-leithead.jpg
category: articles
layout: single
tags: ['Interview', 'Edge Browser']
---

Our [interview series](/tags/interview) continues with Microsoft Software Engineer & Internet Maker
[Travis Leithead](https://www.twitter.com/TravisLeithead), who is currently focused on DOM rendering
performance and paving the path for Web Components in Microsoft's [Edge Browser](https://www.microsoft.com/en-us/windows/microsoft-edge).

<!-- Excerpt -->

Here is the full 38 minute audio interview.

<div>
    <audio controls>
          <source src="/media/interviews/interview-session-1_travis-leithead-07082015.mp3" type="audio/mpeg">
          <source src="/media/interviews/interview-session-1_travis-leithead-07082015.ogg" type="audio/ogg">
          <!-- fallback for non supporting browsers goes here -->
          <a href="/media/interviews/interview-session-1_travis-leithead-07082015.mp3">download audio</a>
    </audio>
</div>

If you care to get a glance into the content of the interview first, here is the first 5 minutes of transcript.

## Partial Transcript <span class="transcript-length">(5 minutes of 38 total minutes)</span>

### Erik
This is webcomponents.org and you're listening to the interview sessions .I'm your host Erik Isaksen and we also have
a guest today, Travis Leithead. He's from the Microsoft teams and he's going to be talking about what Microsoft has done
on the web platform and specifically dealing with Web Components so welcome Travis.

### Travis
Thank you Erik. It's good to be on your program

*(laughing)*

### Travis
What's your background like? What do you do for Microsoft because I see you a lot of the face-to-face's for Web Components.
I guess I'll start on my background. I've...I got started in web development like as a kid. This is back when I got the
book and it was telling you how to do web programming in Netscape versus Internet Explorer 4. And so I would tinker, learn,
play, and copy code from the limited number of websites that were out there and that's kinda how I got my start. And then
I fell in love with C++...and...school...and went off and did a bunch of graduate work in the realms of Computer Security.
And, I figured I'd go and work for the NSA or something after...after college but a friend said "No, you should...you
should put in your application to Microsoft" I'm like "yeah I already did...but you know, whatever...I'll work through
the site channel" and sure enough I got an interview and hired onto this team called "Internet Explorer" I had heard about.
I was a pretty staunch Firefox user back then.

### Erik
yeah

### Travis
I think everyone was pretty much fed up with IE6.

*(laughing)*

### Erik
Well when it came out though, it was probably like the biggest technical improvement...right? IE6 had a lot of things
that the other browsers didn't have and it was a pioneer for AJAX I remember.

### Travis
No question. It, also surprisingly and relevant to this conversation, had a bunch of "web componenty" stuff in it too.

### Erik
In the form of like HTC files? Or...

### Travis
Yeah. Which that stands for HTML Components

*(laughing)*

### Erik
Nice. I never actually knew what it stood for.

### Travis
So...yeah...it was another declarative model like XBL was but kinda predated that

### Erik
ok

### Travis
So we've been happy to slowly, over the course of the last years, eradicate most of that code from our product. It was
not terribly well implemented I guess I could say...but it was a great feature for the time.

### Erik
So how did you get Involved in Web Components?

### Travis
I think it all started...I'm gunna say...like back in two thousand and eight or nine. I was working...a former coworker
of mine named Tony Ross and I were invited to a call with Google and I think Raphael Weinstein...and maybe Dimitri was
involved at that point...I can't recall. But they wanted to talk to us about data binding because they knew we had a
data binding system with HTML tables and they wanted to pick our brains on like what a good data binding system would be
and I think we sat down and talked about it and our point of view was "Oh my goodness! Don't go there right now!". Like
this is fraught with dragons and you're going to pick an approach...and it's going to be wrong. And...you know...maybe
think about decomposing that problem a little bit...and so then the next time we heard from them, maybe it was a year or
two later, and they had started down this direction of these separate specs and this vision...sort of the way you start
to see it formed now with Shadow DOM and Custom Elements, and templates and all that. And so I've been involved from the
periphery from those early days and then got more involved as we helped Raphael with the template spec. Tony Ross was one
of the editors before it got integrated with HTML. And...

### Erik
What does it mean at Microsoft to be involved with Web Components?

### Travis
It means you get a lot a questions from the community

*(laughing)*

### Erik
Yeah, It's kind of a...It's been a challenge because we haven't been able to really commit development resources to playing
with the space. And that's really where the good quality feedback comes from. And so...to be involved is usually to grab
time here or there between projects with developers to coordinate on...you know...does this approach that they're talking
about sound sensible...and to try to stay on the top of the flood of email from the different mailing lists on the different
specs in the working group. So...it's a pretty big time commitment I'd say but also kind of fun and really interesting to
see what's being developed with it...though frustrating that I can't say that we've got support for it or anything like
that yet.

## Credits

* Questions by [Erik Isaksen](https://twitter.com/eisaksen) & [Raphaël Rougeron](https://twitter.com/goldoraf).
* image, transcription, & audio by [Erik Isaksen](https://twitter.com/eisaksen)
