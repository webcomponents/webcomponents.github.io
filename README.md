# [webcomponents.github.io](http://webcomponents.github.io/)

[![Build Status](http://img.shields.io/travis/webcomponents/webcomponents.github.io/site.svg?style=flat)](https://travis-ci.org/webcomponents/webcomponents.github.io)
[![Dependency Status](http://img.shields.io/david/webcomponents/webcomponents.github.io.svg?style=flat)](https://david-dm.org/webcomponents/webcomponents.github.io)
[![DevDependencies Status](http://img.shields.io/david/dev/webcomponents/webcomponents.github.io.svg?style=flat)](https://david-dm.org/webcomponents/webcomponents.github.io#info=devDependencies)

> Deprecated. Please see [webcomponents/webcomponents.org](https://github.com/webcomponents/webcomponents.org).

> WebComponents.org is a place for web component authors to discuss and share best practices, patterns and learning resources.

## Setup

This site is made with [DocPad](https://github.com/bevry/docpad), a static generator in [Node](http://nodejs.org/), and the best way to install it is via [npm](http://npmjs.org/).

First, you need to clone the project:

```sh
$ git clone https://github.com/webcomponents/webcomponents.github.io
```

Then go to the folder and install all dependencies:

```sh
$ cd webcomponents.github.io
$ npm install
```

Now you're good to go!

## Usage

DocPad has three basic options used in this project:

To regenerate the site as you edit and save files, which can be viewed at `http://localhost:9778`, run:

```sh
$ npm run watch
```

To generate a static version of the site, that is ready to upload to a server (it will create a folder called `out`), run:

```sh
$ npm run build
```

To generate and send the output to `gh-pages` branch, run:

```sh
$ npm run deploy
```

## Tasks

We use [Grunt](http://gruntjs.com/), a task-runner in [Node](http://nodejs.org/), to automate things.

To install it and all the other dependencies, run:

```sh
$ npm install -g grunt-cli
```

To check performance regressions, run:

```sh
$ grunt pagespeed
```

> P.S.: You'll need to [generate a PageSpeed API key](https://developers.google.com/speed/docs/insights/v1/getting_started#auth) and defined it as an environment variable.

## Browser Support

We do care about it.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_64x64.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/edge/edge_64x64.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_64x64.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_64x64.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_64x64.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_64x64.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Latest ✔ | Latest ✔ | Latest ✔ | IE 9+ ✔ | Latest ✔ | Latest ✔ |

## Team

WebComponents.org is maintained by these people and a bunch of awesome [contributors](https://github.com/webcomponents/webcomponents.github.io/graphs/contributors).

[![Zeno](https://2.gravatar.com/avatar/e190023b66e2b8aa73a842b106920c93)](https://github.com/zenorocha) | [![Addy](https://2.gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275)](https://github.com/addyosmani) | [![Eric](https://2.gravatar.com/avatar/e7948aac7c52b26470be80311873a398)](https://github.com/ebidel) | [![Briza](https://2.gravatar.com/avatar/c272a0a8972473fdf231f2b2d897c242)](https://github.com/brizabueno) | [![Alex](https://2.gravatar.com/avatar/6b6e18cfbf7f90a6848d85db7348b0e9)](https://github.com/jkomoros)
--- | --- | --- | --- | ---
[Zeno Rocha](https://github.com/zenorocha) | [Addy Osmani](https://github.com/addyosmani) | [Eric Bidelman](https://github.com/ebidel) | [Briza Bueno](https://github.com/brizabueno) | [Alex Komoroske](https://github.com/jkomoros)

[![Eduardo](https://2.gravatar.com/avatar/42327de520e674a6d1686845b30778d0)](https://github.com/eduardolundgren) | [![Pascal](https://2.gravatar.com/avatar/b32bdb1fc9fdadeb45d7a1267fdd2fc4)](https://github.com/PascalPrecht) | [![Bernard](https://2.gravatar.com/avatar/bc16c9be1e05e65395487b78b1cc72c0)](https://github.com/bernarddeluna) | [![Sindre](https://2.gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9)](https://github.com/sindresorhus) | [![Rob](https://2.gravatar.com/avatar/95c3a3b33ea51545229c625bef42e343)](https://github.com/robdodson)
--- | --- | --- | --- | ---
[Eduardo L.](https://github.com/eduardolundgren) | [Pascal Precht](https://github.com/PascalPrecht) | [Bernard De L.](https://github.com/bernarddeluna) | [Sindre Sorhus](https://github.com/sindresorhus) | [Rob Dodson](https://github.com/robdodson)

## Contributing

See the [Contributing guide](https://github.com/webcomponents/webcomponents.github.io/blob/site/CONTRIBUTING.md).

## License

Source code is available under [MIT](http://webcomponentsorg.mit-license.org) license and content is under [Creative Commons BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/deed.en_US).
