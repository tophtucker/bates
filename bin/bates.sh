#!/bin/bash

export BATES_PTH=node_modules/bates
export PATH=$PATH:$(pwd)/node_modules/.bin

DEV_SERVER=$BATES_PTH/src/devServer
TEST=$BATES_PTH/bin/test.sh

if [ $1 = "template" ]; then
  $BATES_PTH/bin/template.sh
fi
if [ $1 = "start" ]; then
  npm prune
  npm update
  parallelshell \
  "node $DEV_SERVER" \
  "onchange src -- $TEST" \
  "npm outdated --depth 1" \
  "node $BATES_PTH/src/release/lastPublishInfo"
fi
if [ $1 = "test" ]; then
  $TEST
fi
if [ $1 = "testWatch" ]; then
  onchange src -- $TEST
fi
if [ $1 = "server" ]; then
  node $DEV_SERVER
fi
if [ $1 = "clean" ]; then
  rimraf lib coverage dist/**.js
fi
if [ $1 = "lib" ]; then
  export NODE_ENV=production
  babel src \
  --presets react,es2015,stage-0 \
  --ignore *.test.js \
  --out-dir lib
fi
if [ $1 = "bundle" ]; then
  export NODE_ENV=production
  webpack \
  --config $BATES_PTH/src/webpackBundle
fi
if [ $1 = "bundleSize" ]; then
  export NODE_ENV=production
  webpack \
  --config $BATES_PTH/src/webpackBundle \
  --json | analyze-bundle-size
fi
if [ $1 = "dist" ]; then
  export NODE_ENV=production
  webpack \
  --config $BATES_PTH/src/webpackDist
fi
if [ $1 = "deploy" ]; then
  export NODE_ENV=production
  webpack \
  --config $BATES_PTH/src/webpackBundle
  surge --project ./dist
fi
if [ $1 = "release" ]; then
  node $BATES_PTH/src/release
fi
if [ $1 = "lastRelease" ]; then
  node $BATES_PTH/src/release/lastPublishInfo
fi
if [ $1 = "githubRelease" ]; then
  node $BATES_PTH/src/release/githubRelease
fi
if [ $1 = "cov" ]; then
  if [ ! -e .babelrc ]; then
    HAS_BABELRC=false
    echo '{"presets":["react","es2015","stage-0"]}' > .babelrc
  fi
  export NODE_ENV=test
  node_modules/.bin/isparta cover \
  --report text --report lcovonly --report html \
  --include 'src/**/!(*-test).js' \
  node_modules/.bin/_mocha \
  -- -R dot 'src/**/*.test.js'
  open coverage/index.html
  if [ $HAS_BABELRC = "false" ]; then
    rm -rf .babelrc
  fi
fi
