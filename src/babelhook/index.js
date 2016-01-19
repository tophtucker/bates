
var path = require('path')
require('babel-register')({
  only: /bates\/src/,
  extends: path.join(__dirname, '../../.babelrc'),
})
