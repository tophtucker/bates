
import React from 'react'
import {ui} from 'stijl'

import pkg from '../package.json'
import pageData from './pageData'

export class Header extends React.Component {
  render() {
    return <ui.Col>
      <ui.Row css={{
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}>
        <ui.Link H1 to='/'>
          {pkg.name}
          <ui.Span paddingHorizontalHalf H4 css={{
            verticalAlign: 'super',
            opacity: 0.75,
          }}>{pkg.version}</ui.Span>
        </ui.Link>
        <ui.Row>
          {pageData.filter(d => !d.hide).map((d, i) =>
            <ui.A key={i} href={`page/${d.path}`}>{d.title}</ui.A>
          )}
        </ui.Row>
      </ui.Row>
      <ui.SpaceDouble/>
    </ui.Col>
  }
}

export class Footer extends React.Component {
  render() {
    return <ui.Col>
      <ui.SpaceDouble/>
      <ui.H6>Copyright © {(new Date().getFullYear())} {pkg.author}</ui.H6>
    </ui.Col>
  }
}

export default class Window extends React.Component {
  render() {
    return <ui.Window>
      <ui.Row margin flexGrow>
        <ui.Col marginAuto flexShrink css={{
          flexBasis: 650,
        }}>
          <Header/>
          {this.props.children}
          <Footer/>
        </ui.Col>
      </ui.Row>
    </ui.Window>
  }
}
