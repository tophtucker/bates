#!/bin/bash

export LOCAL=node_modules/bates
export PATH=$PATH:$(pwd)/node_modules/.bin

DEV_SERVER=$LOCAL/src/devServer
TEST=$LOCAL/bin/test.sh

if [ $1 = "start" ]; then
  echo "npm prune, npm start"
  parallelshell \
  "node $DEV_SERVER" \
  "onchange src -- $TEST" \
  "npm outdated"
fi
if [ $1 = "test" ]; then
  $TEST
fi
if [ $1 = "server" ]; then
  node $DEV_SERVER
fi
if [ $1 = "clean" ]; then
  rimraf lib dist/**.js
fi
if [ $1 = "lib" ]; then
  NODE_ENV=production
  babel src \
  --presets react,es2015,stage-0 \
  --ignore *.test.js \
  --out-dir lib
fi
if [ $1 = "main" ]; then
  NODE_ENV=production
  webpack \
  --config $LOCAL/src/webpackProd
fi
