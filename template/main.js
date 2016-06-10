
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
// import Relay from 'react-relay'
import _ from 'lodash/fp'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import {App} from './App'
import {Pages, pagesData} from './Pages'

_.map = _.map.convert({cap: false})

document.title = 'Project'
document.body.bgColor = 'white'

// Relay.injectNetworkLayer(
//   new Relay.DefaultNetworkLayer('http://localhost:5000/graphql')
// )

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Pages}/>
      {_.map((d, i) =>
        <Route path={`page/${d.path}`} component={d.Component} key={i}/>,
        pagesData,
      )}
      <Route path='*' component={Pages}/>
    </Route>
  </Router>
  , document.getElementById('root')
)
