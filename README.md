# http://tmd45.jp/

http://tmd45.jp/ to http://tmd45.github.io/

[![Circle CI](https://circleci.com/gh/tmd45/tmd45.github.io/tree/source.svg?style=svg)](https://circleci.com/gh/tmd45/tmd45.github.io/tree/source)

## Setup

```
$ git clone git@github.com:tmd45/tmd45.github.io.git
$ cd tmd45.github.io
$ git checkout source
$ ./script/bootstrap
```

When use direnv, do `direnv allow` in there.

## Editing

```
$ cd tmd45.github.io
$ git checkout source
# ex. editing source/index.html
```

## Preview

Launch middleman server and live-reloading.

```
$ middleman {server}
```

## Deploy

:dart: trigger merge/commit to `source` branch for deploying by CircleCI.

from local:

```
$ cd tmd45.github.io
$ git checkout source
$ bundle exec middleman build
$ bundle exec middleman deploy
```
