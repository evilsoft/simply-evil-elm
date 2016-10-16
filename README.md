# simplyEvil (Elm)

***simplyEvil*** is a starter project template using a simple npm script based build system.
There are times when setting up a build system like [gulp](http://gulpjs.com/)
or [grunt](http://gruntjs.com/) is a bit heavy. That is where
***simplyEvil*** comes in. It gives you all the goodies you need to get started, and is pretty light.

## Getting started
***Note:*** *npm verion >= 2.0 is required to use this build system, chances are good you may not have that requirement met. That is okay, just run the following:*

```
$ npm install -g npm
```

*you may need to `sudo` this command. If you do, i recommend you look into using something like the fabulous [nodenv](https://github.com/nodenv/nodenv).*

After pulling down this repo, you just need to run the following in the directory where this repo is cloned:

```
$ npm install
```

Part of the post-install process is to install all `elm` packages, please make sure (for now) to use npm install to ensure the post-install hook runs as expected. Be advised that this will install `elm` as a dev dependency, if you do not want it, just remove it (and only it) from the `package.json`. After everything is installed, may take a while depending on what you have cached/built through `npm`, you can start the development server by running:

```
$ npm start
```

This will compile everything (html, js, elm and css) and start a browser-sync instance available at:

```
http://localhost:1337
```

The start command will also set up watches on the source files for: html, css elm and javascript. What that means is that when you edit a file in the `src/` directory, the appropriate asset (html, css or js) will be recompiled and because of [browser-sync](http://www.browsersync.io/) the browser you are developing in will reload with the new changes.

## What you get
This build system will compile the following with one of two flavors (development and distribution):

* **HTML** - Using [pug](http://pug-lang.com/) it compiles every pug file in `src/pages/`.
* **CSS** - Opted to use [less](http://lesscss.org/) to keep everything javascript. The build system points to the entry file: `src/less/main.less` so make sure to import your application specific `*.less` files there. Vendor prefixing is provided through [less-plugin-autoprefix](https://github.com/less/less-plugin-autoprefix) that is setup to provide vendor prefixes for the latest two versions of all the major browsers. Just write your CSS as it would be expected without prefixing and you will be good(`display: flex;`). Also I have included some of the helpers and vars I use in my projects for quick and easy layout, colors typography. Not much to get in the way, and it is easy to wipe if you don't want to use them.  ***DO NOT remove the entry point file.***
* **Javascript** - The entry point for the app is the file `src/js/index.js`. As a side note, your development code will be eval'ed and an inline source map is created, so you can see where exceptions have occurred in your original source (in the browser under sources, available in the webpack tree item). ***DO NOT remove the entry point file.***
* **Elm Compilation** - If you are like me and run multiple versions of node and find it super annoying to have people tell you to install something globally with `npm i some-thing-global -g` and have to do it for EVERY instance, I provide `elm` as a development dependency so you do not have to manage it. If you would prefer to manage `elm` yourself, then just remove it from the `package.json`. Also if you manage `elm`, make sure it is available on your `$PATH` for use with the `elm-loader`.
* **Development Server** - In development all built files are served from `dev/` using [browser-sync](http://www.browsersync.io/). Once you make changes to any of your source files, a build will be triggered and the new assets update in the `dev/` folder. Once those files are changed, your open web browser will refresh itself with the changes.

## Useful build commands
In this simple build system, we are using npm to synchronize the build process (as opposed to using a grunt or gulp system). That means all commands you would use to interact with the build system will be run through npm. Some commands are against baked in scripts in npm and other are not. That is why you will see some commands that use the command `run` in the command. Also you **MUST USE npm -v >= 2.0**.

### `$ npm start`
This is the main command used in development. This command does the following:

* Clean out any old bits inside of the `dev/` folder.
* Ensure that the `dev/` folder exists.
* Build all assets and deposit the results in their respective folders in `dev/`.
* Set up watches on your source directory and trigger rebuilds with changes.
* Start up the development web server.

This command can be stopped in the terminal with a simple `Ctrl+c`. There is a `browser-sync` web interface for tweaking the synchronization between browsers and other :ice_cream: goodies. It is available at `http://localhost:3030`. Read up on the `browser-sync` docs for all the fun you can have with it.

### `$ npm run build`
This is the command to run when you are releasing your awesome into the universe. It provides production ready assets for tagging on the githubs. It does a lot like the `npm start` command but in different ways, and it does not start a development server. It goes like this:

* Clean out any old, nasty bits inside of the `dist/` folder.
* Ensure that the `dist/` folder exists.
* Build all assets and deposit the results in `dist/`. These assets will be stripped of any dead code paths, uglified and minified.

### `$ npm run elm-install [package-name]`
This is the command to run when you want to install a package from the elm repository. This is needed to allow including `elm` as a development dependency. It keeps you from having to write something like `$ ./node_modules/.bin/elm-package install elm-lang/dom`. By default this will add the dependency to your `elm-package.json` file and approve any plans.
