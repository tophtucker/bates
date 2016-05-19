var path = require('path')
var fs = require('fs')

var schemaPath = path.join(process.cwd(), 'schema.json')

if (fs.existsSync(schemaPath)) {
  var getbabelRelayPlugin = require('babel-relay-plugin')
  var schema = require(schemaPath)
  module.exports = getbabelRelayPlugin(schema.data)
}
