This is a repo to reproduce closure-webpack-plugin [bug](https://github.com/webpack-contrib/closure-webpack-plugin/issues/93).

It is based on webpack guides, and serves only for purpose of demonstration.

Run:
* `npm i` to install dependencies
* `./node_modules/.bin/webpack --progress` to build project

Expected result: two files generated, dist/main.js and dist/1.main.js, both of them minified.

Actual result: two files generated, dist/main.js and dist/1.main.js, but only first of them minified.
