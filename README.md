# http://tmd45.jp/

http://tmd45.jp/ to http://tmd45.github.io/

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

in local:

```
$ cd tmd45.github.io
$ git checkout source
$ bundle exec middleman build
$ bundle exec middleman deploy
```
