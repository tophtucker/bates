
export const title = 'Page 0'
export const description = ''
export const hide = false

import React from 'react'
import {ui} from 'stijl'

export default class Page0 extends React.Component {
  render() {
    return <ui.Col p pV flexBasis={1400}>
      <ui.H1 marginBottom={0}>{title}</ui.H1>
    </ui.Col>
  }
}