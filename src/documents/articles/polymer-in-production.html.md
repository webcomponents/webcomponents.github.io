---
title: Polymer in Production
authors: [mark_wheeler]
date: 2016-01-26
original_date: 2016-01-26
image: polymer-in-production.jpg
category: articles
layout: single
tags: ['Custom Elements','Polymer','Production']
---

Lessons learnt from deploying Polymer in a production environment.

<!-- Excerpt -->

# Bower bingo

At the time of writing, Polymer was dependent on [Bower](http://bower.io/) to maintain and install itself and other components. One of the problems is when using large element bases like Google's [Paper Elements](https://elements.polymer-project.org) is that you have a large Bower file to maintain, and on top of that even if you explicitly pin a specific version of a component, it can still itself pull in other dependent elements.

Three solutions are:

## Manually pin all elements and their dependencies

Pros: Complete control over all elements<br/>
Cons: Laborious to maintain

## Commit Bower components to a repository

Pros: You can simplify your Bower file, and have confidence in the code going into production<br/>
Cons: Large and messy repository

## Commit Bower components to a separate location

Pros: Confidence in code going from testing into production<br/>
Cons: Extra build step required to pull this into codebase

NPM has a useful [shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap) ability that would alleviate the problems above.

Polymer NPM support issues:

* https://github.com/Polymer/polymer/issues/2578#issuecomment-151580862
* https://github.com/Polymer/polymer/issues/2525#issuecomment-145355985


# Gulp build

Polymer has a vulcanization step that combines all the web components needed into one dependent file (rather than lots of smaller files). This step can be added to gulp:

```
var polybuild = require('polybuild');

function vulc(name,output){
  return function(){
    return gulp.src(name)
    .pipe(polybuild({maximumCrush: true}))
    .pipe(gulp.dest(output));
  }
}

gulp.task('vulcanize_homepage',vulc('src/homepage.html','dist/'));
```

[Polybuild](https://github.com/PolymerLabs/polybuild) is a tool that lives on top of vulcanize and makes it super easy to vulcanise a file and split the output into two files (one JS and one HTML). The example above combines all the imports for the homepage and saves the output in the <em>dist</em> directory.

When developing your site, vulcanization is not necessary, so you can simplify your pipeline by having two gulp tasks, one for dev that runs and CSS tasks etc and one for production that has the vulcanization step afterwards.

```
{{#if vulcanized}}
  <link rel="import" href="/dist/page-home.build.html" />
{{else}}
  <link rel="import" href="/bower_components/polymer/polymer.html" />
  <link rel="import" href="/src/page-home.html" />
{{/if}}
```

The example above is a templated HTML file that can serve both development purposes, and QA/production purposes depending on whether an environment variable is set.


## Polylint

[Polylint](https://github.com/PolymerLabs/polylint) does a very basic sanity check of your elements (and follows the dependency chain) giving you some piece of mind in the build process.

```
var polylint = require('polylint');
var colors = require('colors/safe');

gulp.task('polylint', function (cb) {
  var errors = polylint('src/elements.html');

  errors.then(function(errors){
    for(var i = 0;i < errors.length;i++) {
      var warning = errors[i];
      warning = colors.red(warning.filename) + ":" +
        warning.location.line + ":" + warning.location.column +
        "\n    " + colors.gray(warning.message);
      console.log(warning);
    }
    cb();
  });
});
```

The example above starts at the file <em>src/elements.html</em> and lints and follows the dependency tree and prints its output.

# Docker

Once you have a build pipeline (and a way to control external dependencies), one deployment option is Docker. You can deploy your code, and get Docker to build the distribution environment.

```
RUN node_modules/.bin/gulp polymer_dist
```

The above example calls ``gulp polymer_dist`` assuming that everything needed to deploy is contained inside the gulp task.

Docker's image environment lends itself to a Polymer build system due to the dependencies required. A project can contain many web components made by other people, and a Docker image (when built) will contain a working point in time fixing all dependencies to the version at the point of creation (making rollback easy).

## Serving Polymer content

Once you have built your site, you need a way of serving the content. If your site is purely static you can simply serve the HTML/JS/CSS statically.

If however you want to modify the HTML output you can use any templating solution with a server such as <em>express</em>:

```
//Docker
CMD [ "node", "index" ]
```

```
//index.js

var express = require('express');
var app = express();

//Setup routes

app.get('/profile', function(req, res) {
  //Cache for 5 seconds
  res.header('Cache-Control', 'max-age=5');

  //Render page
  res.render('profile',{
      //Template parameters
  });
});

//Serve static files, + send cache time
app.use(express.static(__dirname + '/dist/',{maxAge : '60s'}));

```

The first code snippet runs <em>node</em> at the end of the Docker build steps.

The second, is the <em>express</em> server with one route (the gets a profile and allows you to modify data if required), and serves other content statically (the compiled JS for example).

## Global variables

The advantage of templating is that you can keep the same code for the website and using environment variables switch between a staging environment (QA) and the live environment.

```
<script>
  window.MyGlobals = window.MyGlobals || {};
  window.MyGlobals.APIURL = '{{APIADDRESS}}';
</script>
```

Using the above code, your Polymer project can reference ``window.MyGlobals.APIURL`` when it needs to make a network request and not have any knowledge of the environment it's in.

# Caching and versioning

As Polymer files are static in nature, once they are built they can be cached indefinitely. Versioning your HTML / JS output from a Polybuild and serving from a CDN will reduce costs and increase performance of your application.

The files that have templated information can also be cached by using the appropriate headers from your server (<em>express</em> example above).

Fixed template variables (such as API endpoints) can be merged into the build step and cached indefinitely in the output.

# Preloading images and data

Polymer projects can build single page web apps, and all data can be loaded asynchronously using AJAX. The problem is that none of these calls will be made until Polymer has finished loading and upgrading the elements.

If you have any data which you know in advance, you can build it into your pipeline so that when Polymer requests the data the browser already has it in its cache.

For example if you have some dynamic images loading above-the-fold (and you can compute what they will be ahead of time) you can inject JavaScript into your page to fetch these as soon as the page starts to load so they are warm in the cache when Polymer requests them (when using [iron-image](https://github.com/PolymerElements/iron-image) for example).

As browser performance increases (and HTTP 2.0 is introduced) these optimisations will not be necessary.


# Google Analytics

Using Google Analytics, you can view your rendering times across your user base which gives a good indicator of your Polymer performance (from server response time to browser render time). You can create custom dashboards to monitor the stats you need the most (browser usage, popular pages render time etc).

# Full Polymer website examples

* [YouTube Gaming](http://gaming.youtube.com)
* [Polymer Catalog](https://elements.polymer-project.org)
* [Wakelet](https://wakelet.com)
