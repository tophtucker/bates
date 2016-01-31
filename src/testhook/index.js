
var path = require('path')

require('whatwg-fetch')
require('babel-regenerator-runtime')

require('babel-register')({
  extends: path.join(__dirname, '../../.babelrc'),
})
