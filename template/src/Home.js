
import React from 'react'
import _ from 'lodash/fp'
import {withRouter} from 'react-router'
import {ui} from 'stijl'
import PageCard from './PageCard'
import pageData from './pageData'

class Pages extends React.Component {
  render() {
    return <ui.Col>
      {_.map(
        (d, i) => <PageCard
          key={i}
          {...d}
        />,
        pageData,
      )}
    </ui.Col>
  }
}

class Home extends React.Component {
  render() {
    const {props} = this
    return <ui.Row p justifyContent='center'>
      <ui.Col flexBasis={1400}>
        <Pages router={props.router}/>
      </ui.Col>
    </ui.Row>
  }
}

export default withRouter(Home)
