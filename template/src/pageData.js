
import _ from 'lodash/fp'

const context = require.context('./pageFiles', false, /^\.\/.*\.js/)

export default _.pipe(
  _.map(
    key => ({
      ...context(key),
      path: _.get(0, _.get(1, key.split('/')).split('.')),
    }),
  ),
)(context.keys())
