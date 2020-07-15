# https://tmd45.jp/

[![Circle CI](https://circleci.com/gh/tmd45/tmd45.github.io/tree/source.svg?style=svg)](https://circleci.com/gh/tmd45/tmd45.github.io/tree/source) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/tmd45/tmd45.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Hosted on [AWS Amplify](https://aws.amazon.com/jp/amplify/)

mirror https://tmd45.github.io/

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
$ middleman server
```

## Deploy

:dart: trigger merge/commit to `source` branch for deploying mirror by CircleCI.

from local:

```
$ cd tmd45.github.io
$ git checkout source
$ bundle exec middleman build
$ bundle exec middleman deploy
```
