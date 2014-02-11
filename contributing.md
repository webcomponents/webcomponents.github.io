# Contributing

There are three main ways to contribute to this project.

## Content

* Write articles
* Submit presentations
* Update browser implementation status

## Development

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request to `site` branch :D

## Contributing articles

If you would like to submit an article or link to an article to the site, please follow these steps:

* Create a new markdown (.html.md) file in `src/documents/articles` with the name of your article. Your filename should be lowercase and use dashes (-) to separate words. 

* At the top of the file, add a template block containing information about the article or post:

```
---
title: Web Components: Why You're Already an Expert
author: mark_dalgleish
date: 2013-11-19
link: http://markdalgleish.com/2013/11/web-components-why-youre-already-an-expert/
category: articles
layout: single
tags: ['Web Components']
---
```

Please make sure to fill in the block with the `title`, `author`, `date` and so on. If you are only submitting a link to the article, please fill in `link` with the URL to your post. 

If you are submitting a complete article for consideration, you don't need to include `link`. Instead, fill out the rest of the metadata and then below the closing `---` you can add in the content for your article.

* Add your details (name, avatar, twitter handle etc) to docpad.js in the section labelled `authors`. This will be used by our templates to show your name and links to your profiles.

* Use `npm run-script watch` and `npm run-script generate` to preview the output of your article. Please double-check that all formatting is as expected. 

* You can now follow the development steps outlined earlier to submit a pull request for review :)
