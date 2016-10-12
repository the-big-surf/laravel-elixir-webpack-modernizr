# laravel-elixir-webpack-modernizr-loader

> Webpack Modernizr Loader for Laravel Elixir

Laravel Elixir mix to enable [modernizr-loader for webpack](https://github.com/peerigon/modernizr-loader)

This package allows you to write a custom `.modernizrrc` configuration file to pull in the Modernizr options your app requires.

It ships with a base `.modernizrrc` configuration file which is overridden by placing a custom `.modernizrrc` file within your laravel projects root directory, i.e `/your-laravel-project/.modernizrrc`

To see all available config options check out the [modernizr-loader config-all sample](https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json)

## Step 1: Install

```
npm install laravel-elixir-webpack-modernizr-loader --save-dev
```

## Step 2: Gulpfile.js

Require the package:

```
/*** start of file ***/
var elixir = require('laravel-elixir') // grab elixir

require('laravel-elixir-webpack-modernizr-loader') // enable custom modernizr builds
```

## Step 3: app.js (or whatever your app's root js file is called)

You don't have to import the package into your base `app.js` but generally this makes sense. Once imported we find it useful to set `Modernizr` as a webpack global, i.e.

```
// app.js (or whatever project js root file you use)

import ModernizrPackage from 'modernizr'

global.Modernizr = ModernizrPackage
```

Now you'll have access to your custom Modernizr build via a `Modernizr` object anywhere in your app.
