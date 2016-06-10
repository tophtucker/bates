
export const title = 'Page0'
export const description = 'Initial page'
export const hide = false
export const date = new Date('Wed Jun  8 22:34:59 EDT 2016')

import React from 'react'
import {ui} from 'stijl'

export class Component extends React.Component {
  render() {
    return <ui.ColText p pV>
      <ui.H1>Title</ui.H1>
      <ui.P>Initial Text</ui.P>
    </ui.ColText>
  }
}
