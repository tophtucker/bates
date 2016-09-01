
export const title = 'Page 0'
export const hide = false

import React from 'react'
import {ui} from 'stijl'

export default class Page0 extends React.Component {
  render() {
    return <ui.Row padding>
      <ui.Col marginAuto flexShrink css={{
        flexBasis: 600,
      }}>
        <ui.H1>{title}</ui.H1>
      </ui.Col>
    </ui.Row>
  }
}
