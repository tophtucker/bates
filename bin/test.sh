#!/bin/bash

NODE_ENV=test
mocha --require $BATES_PTH/src/babelhook/index.js -R dot "src/**/*.test.js" && eslint src -c $BATES_PTH/.eslintrc