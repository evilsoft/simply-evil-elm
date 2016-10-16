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

After everything is installed, may take a while depending on what you have cached/built through `npm`, you can start the development server by running:

```
$ npm start
```

This will compile everything (html, js, elm and css) and start a browser-sync instance available at:

```
http://localhost:1337
```

The start command will also set up watches on the source files for: html, css elm and javascript. What that means is that when you edit a file in the `src/` directory, the appropriate asset (html, css or js) will be recompiled and because of [browser-sync](http://www.browsersync.io/) the browser you are developing in will reload with the new changes.
