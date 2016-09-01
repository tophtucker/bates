
import React from 'react'
import {ui, theme} from 'stijl'

import pageData from './pageData'

class Item extends React.Component {
  render() {
    return <ui.Link to={`page/${this.props.path}`}>
      <ui.Col margin padding css={{
        background: theme.backgroundCard,
        ':hover': {
          opacity: 0.6,
        }
      }}>
        <ui.H4>{this.props.title}</ui.H4>
      </ui.Col>
    </ui.Link>
  }
}

export default class Home extends React.Component {
  render() {
    return <ui.Window>
      <ui.Row margin flexGrow>
        <ui.Col marginAuto flexShrink css={{
          flexBasis: 600,
        }}>
          {pageData.filter(d => !d.hide).map((d, i) =>
            <Item key={i} {...d}/>
          )}
        </ui.Col>
      </ui.Row>
    </ui.Window>
  }
}
