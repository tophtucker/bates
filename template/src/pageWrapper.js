
import React from 'react'
import {ui} from 'stijl'

export class PageHeader extends React.Component {
  render() {
    return <ui.Row
      justifyContent='space-between'
      alignContent='flex-start'
    >
      <ui.H4 fontWeight='bold'>
        <ui.Link to='/'>←return</ui.Link>
      </ui.H4>
    </ui.Row>
  }
}

export default class PageWraper extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    const {props} = this
    return <ui.Col mV>
      <ui.Row justifyContent='center'>
        <ui.Col p flexBasis={1400}>
          <PageHeader {...props}/>
        </ui.Col>
      </ui.Row>
      <ui.Row justifyContent='center'>
        {props.children}
      </ui.Row>
    </ui.Col>
  }
}
