#!/bin/bash

if [ $1 = "start" ]; then
  { node node_modules/bates/src/devServer/index.js & node_modules/.bin/onchange src -- node_modules/bates/bin/test.sh; }
fi
if [ $1 = "test" ]; then
  node_modules/bates/bin/test.sh
fi
