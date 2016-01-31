
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'

document.title = 'Project'
const Root = React.createClass({
  render: () => <div>App</div>,
})

ReactDOM.render(<Root/>, document.getElementById('root'))
