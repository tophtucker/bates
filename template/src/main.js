// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

document.title = 'Project'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute, Redirect, applyRouterMiddleware} from 'react-router'
import {useScroll} from 'react-router-scroll'
import {insertCssObject, start} from 'stijl'

import Home from './Home'
import PageView from './PageView'

insertCssObject({
  'html, body': {background: 'white', height: '100%', margin: 0},
  '#root': {height: '100%'},
})
const myTheme = {}
start([myTheme])

export class HotReloadHack extends React.Component {
  render() {return this.props.children}
}

ReactDOM.render(
  <Router history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path='/' component={HotReloadHack}>
      <IndexRoute component={Home}/>
      <Route path={'page/:path'} component={PageView}/>
    </Route>
    <Redirect from='*' to='/'/>
  </Router>,
  document.getElementById('root')
)
