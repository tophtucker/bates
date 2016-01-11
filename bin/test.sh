#!/bin/bash

NODE_ENV=test node_modules/.bin/mocha --require node_modules/bates/src/babelhook/index.js -R dot "src/**/*.test.js" && node_modules/.bin/eslint src -c node_modules/bates/.eslintrc
