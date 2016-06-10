
import React from 'react'
import {ui, SetThemeHOC} from 'stijl'

const theme = {
  base: {
    flexBasisText: 600,
  },
}

export class Header extends React.Component {
  render() {
    return <ui.Row
      p
      justifyContent='space-between'
      alignContent='flex-start'
    >
      <ui.H2 fontWeight='bold'>
        <ui.Link to='/'>Project</ui.Link>
      </ui.H2>
      <ui.Row justifyContent='flex-end' alignItems='center'>
        <ui.H4>
          <ui.Link to='/'>pages</ui.Link>
        </ui.H4>
      </ui.Row>
    </ui.Row>
  }
}

export class AppInner extends React.Component {
  render() {
    const {props} = this
    return <ui.Window>
      <ui.Row justifyContent='center'>
        <ui.ColText>
          <Header {...props}/>
        </ui.ColText>
      </ui.Row>
      <ui.Row justifyContent='center'>
        {props.children}
      </ui.Row>
    </ui.Window>
  }
}

export class App extends React.Component {
  render() {
    const {props} = this
    return <SetThemeHOC theme={theme}>
      <AppInner {...props}/>
    </SetThemeHOC>
  }
}
