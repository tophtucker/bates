#!/bin/bash

export NODE_ENV=test
mocha \
--require $BATES_PTH/src/testhook/index.js \
-R dot "src/**/*.test.js"
eslint src -c $BATES_PTH/.eslintrc
