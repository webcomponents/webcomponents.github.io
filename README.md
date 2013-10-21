# Web Components Strawman

Home to the Web Components strawman site.

## Getting started

The site is made with [Jekyll](https://github.com/mojombo/jekyll/), a static generator in Ruby. It also uses [redcarpet](https://github.com/vmg/redcarpet) to process the markdown in the site.

The best way to install Jekyll and Redcarpet is via RubyGems:

```
gem install jekyll redcarpet
```

Once Jekyll is installed, you just need to clone the project:

```
git clone --recursive git@github.com:WebComponentsOrg/webcomponents.org.git
```

Then go to the project's folder:

```
cd webcomponents.org
```

If you are using Git 1.6.4 or earlier, you will manually need to initialize the submodules:

```
git submodule update --init
```

You should now have a copy of the source files for the site that are ready for editing.

## Jekyll commands

Jekyll has three basic options used in this project:

To generate the site and run it in a server, which can be viewed at `http://localhost:4000`, run:

```
jekyll server
```

To regenerate the site as you edit and save files, run:

```
jekyll server --watch
```

To generate a static version of the site that is ready to upload to a server (it will create a folder called _site), run:

```
jekyll build
```
