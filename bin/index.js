#!/bin/bash

export LOCAL=node_modules/bates
export PATH=$PATH:$(pwd)/node_modules/.bin:$(pwd)/node_modules/bates/node_modules/.bin

if [ $1 = "start" ]; then
  { node $LOCAL/src/devServer/index.js & onchange src -- $LOCAL/bin/test.sh; }
fi
if [ $1 = "test" ]; then
  $LOCAL/bin/test.sh
fi
