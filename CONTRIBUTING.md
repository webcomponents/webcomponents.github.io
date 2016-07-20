# Contributing

There are many ways to contribute to this project like:

* Writing articles;
* Submiting presentations;
* Updating browser implementation status;
* Improving the site source code;

## Contributing articles

If you would like to submit an article or link to an article to the site, please follow these steps:

* Create a new markdown (.html.md) file in `src/documents/articles` with the name of your article. Your filename should be lowercase and use dashes (-) to separate words, for example: `shadow-dom-the-basics.html.md`.

* At the top of the file, add a template block containing information about the article or post:

```
---
title: Web Components: Why You're Already an Expert
authors: [mark_dalgleish]
date: 2013-11-19
link: http://markdalgleish.com/2013/11/web-components-why-youre-already-an-expert/
category: articles
layout: single
tags: ['Web Components']
---
```

Please make sure to fill in the block with the `title`, `authors`, `date` and so on. If you are only submitting a link to the article, please fill in `link` with the URL to your post.

If you are submitting a complete article for consideration, you don't need to include `link`. Instead, fill out the rest of the metadata and then below the closing `---` you can add in the content for your article.

* Add your details (name, avatar, twitter handle etc) to `authors.js`. This will be used by our templates to show your name and links to your profiles.

* Use `npm run-script watch` and `npm run-script build` to preview the output of your article. Please double-check that all formatting is as expected.

* You can now follow the development steps below to submit a pull request for review :)

## Contributing presentations

If you would like to submit a presentation to the site, please follow these steps:

* Create a new markdown (.html.md) file in `src/documents/presentations` with the name of your talk and the event which was presented. Your filename should be lowercase, use dashes (-) to separate words, for example: `accessibility-of-web-components-at-jsconf-us.html.md`.

* At the top of the file, add a template block containing information about the talk:

```
---
title: Accessibility of Web Components
authors: [marcy_sutton]
event: JSConf US
date: 2014-05-30
image: accessibility-of-web-components-at-jsconf-us.jpg
category: presentations
layout: single
---
```

Please make sure to fill in the block with the `title`, `authors`, `date` and so on.

* For the `image` attribute, make sure to use the same name as the markdown filename. Image file dimension should be `620x240` and located under `src/files/img/stories` folder.

* Add your details (name, avatar, twitter handle etc) to `authors.js`. This will be used by our templates to show your name and links to your profiles.

* Use `npm run-script watch` and `npm run-script build` to preview the output of your article. Please double-check that all formatting is as expected.

* You can now follow the development steps below to submit a pull request for review :)

## Submiting a pull request

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request to `site` branch :D

> **Note:** Since this is a [GitHub Page](https://pages.github.com/) for an organization, the `master` branch contains the static generated code. Which means that you shouldn't send your PR to that branch, always send to the `site` branch instead.
