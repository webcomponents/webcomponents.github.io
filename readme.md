# WebComponents.org [![Build Status](https://secure.travis-ci.org/WebComponentsOrg/webcomponents.org.png?branch=master)](https://travis-ci.org/WebComponentsOrg/webcomponents.org) [![Dependency Status](https://david-dm.org/WebComponentsOrg/webcomponents.org.png)](https://david-dm.org/WebComponentsOrg/webcomponents.org)

![WebComponents.org Logo](http://f.cl.ly/items/253L1A2x1F3c3Y1b3R2P/logo.png)

## Install

This site is made with [DocPad](https://github.com/bevry/docpad), a static generator in [Node](http://nodejs.org/), and the best way to install it is via [NPM](npmjs.org/).

First, you need to clone the project:

```sh
$ git clone git@github.com:WebComponentsOrg/webcomponents.org.git
```

Then go to the folder and install all dependencies:

```sh
$ cd webcomponents.org
$ npm install
```

Now you're good to go!

## Usage

DocPad has three basic options used in this project:

To regenerate the site as you edit and save files, which can be viewed at `http://localhost:9778`, run:

```sh
$ npm run-script watch
```

To generate a static version of the site, that is ready to upload to a server (it will create a folder called `out`), run:

```sh
$ npm run-script generate
```

To generate and send the output to `gh-pages` branch, run:

```sh
$ npm run-script deploy
```

## Tasks

We use [Grunt](http://gruntjs.com/), a task-runner in [Node](http://nodejs.org/), to automate things.

To install it and all the other dependencies, run:

```sh
$ npm install -g grunt-cli
```

To install [Bower](http://bower.io/) dependencies, run:

```sh
$ grunt bower
```

To check performance regressions, run:

```sh
$ grunt pagespeed
```

> P.S.: You'll need to [generate a PageSpeed API key](https://developers.google.com/speed/docs/insights/v1/getting_started#auth) and defined it as an environment variable.

## Browser Support

We do care about it.

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |


## Team

WebComponents.org is maintained by these people and a bunch of awesome [contributors](https://github.com/WebComponentsOrg/webcomponents.org/graphs/contributors).

[![John Doe](https://2.gravatar.com/avatar/b72a336d704fa47a87910fa4a08705ef)](https://github.com/lolcat) | [![John Doe](https://2.gravatar.com/avatar/b72a336d704fa47a87910fa4a08705ef)](https://github.com/lolcat) | [![John Doe](https://2.gravatar.com/avatar/b72a336d704fa47a87910fa4a08705ef)](https://github.com/lolcat) | [![John Doe](https://2.gravatar.com/avatar/b72a336d704fa47a87910fa4a08705ef)](https://github.com/lolcat) | [![John Doe](https://2.gravatar.com/avatar/b72a336d704fa47a87910fa4a08705ef)](https://github.com/lolcat) | [![John Doe](https://2.gravatar.com/avatar/b72a336d704fa47a87910fa4a08705ef)](https://github.com/lolcat)
--- | --- | --- | --- | --- | --- | ---
[John Doe](https://github.com/lolcat) | [John Doe](https://github.com/lolcat) | [John Doe](https://github.com/lolcat) | [John Doe](https://github.com/lolcat) | [John Doe](https://github.com/lolcat) | [John Doe](https://github.com/lolcat)

## Contributing

See the [Contributing guide](https://github.com/WebComponentsOrg/webcomponents.org/blob/master/contributing.md).

## License

Source code is available under [MIT](http://opensource.org/licenses/MIT) license and content is under [Creative Commons BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/deed.en_US).
