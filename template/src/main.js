
// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash/fp'
import {StyleRoot} from 'radium'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import {SetThemeHOC} from 'stijl'

import Home from './Home'
import PageWrapper from './PageWrapper'
import pageData from './pageData'

_.map = _.map.convert({cap: false})

document.body.bgColor = 'white'

const theme = {
  base: {
    fontSize: 15,
    // H0, H1, H2, H3, H4, H5, H6
    scale: [48, 32, 24, 20, 16, 14, 12],
    gutter: 15 / 2,
    fontFamily: 'Open Sans',
    color: '#242426',
    background: '#eee',
    hover: 'hsl(0, 60%, 52%)',
    focus: 'hsl(32, 78%, 55%)',
    borderWidth: 2,
    borderRadius: 0,
    backgroundCard: 'hsl(195, 3%, 78%)',
    lineHeight: 1.4,
    flexBasisText: 800,
  },
}

class App extends React.Component {
  render() {
    return <StyleRoot>
      <SetThemeHOC theme={theme}>
        {this.props.children}
      </SetThemeHOC>
    </StyleRoot>
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route component={PageWrapper}>
        {_.map((d, i) =>
          <Route path={`page/${d.path}`} component={d.default} key={i}/>,
          pageData,
        )}
      </Route>
      <IndexRoute component={Home}/>
    </Route>
    <Redirect from='*' to='/'/>
  </Router>
  , document.getElementById('root')
)
