# http://tmd45.jp/

[![Build Status](https://travis-ci.org/tmd45/tmd45.github.io.png?branch=source)](https://travis-ci.org/tmd45/tmd45.github.io)

http://tmd45.jp/ to http://tmd45.github.io/

## Setup

```
git clone git@github.com:tmd45/tmd45.github.io.git
cd tmd45.github.io
git checkout source
bundle install --path vendor/bundle --binstubs vendor/bundle/bin
```

When use direnv, do `direnv allow` in there.

## Editing

```
cd tmd45.github.io
git checkout source
# ex. editing source/index.html
middleman {server}
# launch middleman server and livereloading
```

## Deploy

:dart: trigger `git push origin source` deploying by Travis CI.

in local:

```
cd tmd45.github.io
git checkout source
middleman build
```
