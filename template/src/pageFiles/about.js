
export const title = 'About'
export const hide = false

import React from 'react'
import {ui} from 'stijl'

import Window from '../Window'

export default class Page0 extends React.Component {
  render() {
    return <Window>
      <ui.H2>{title}</ui.H2>
      <ui.P>
        Add content here
      </ui.P>
    </Window>
  }
}
