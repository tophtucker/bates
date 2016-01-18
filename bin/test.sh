#!/bin/bash

NODE_ENV=test
mocha --require $LOCAL/src/babelhook/index.js -R dot "src/**/*.test.js" && eslint src -c $LOCAL/.eslintrc
