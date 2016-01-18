/* eslint no-console:0 */

var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../webpackDev')

var app = express()
var compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))
app.use(require('webpack-hot-middleware')(compiler))
app.use(express.static(path.join(process.cwd(), 'dist')))
app.get('*', function readFile(req, res) {
  res.send(path.join(process.cwd(), 'dist/200.html'))
})
app.listen(3000, 'localhost', function startServer(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:3000')
})
