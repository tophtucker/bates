// site entry point

import React from 'react'
import ReactDOM from 'react-dom'

document.title = 'Project'
const Main = React.createClass({
  render: () => <div>App</div>,
})

ReactDOM.render(<Main/>, document.getElementById('root'))
