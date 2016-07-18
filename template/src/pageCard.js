
import React from 'react'
import {ui} from 'stijl'
import {withRouter} from 'react-router'

class PageCard extends React.Component {
  render() {
    const {props} = this
    return <ui.Card
      m mV
      p pV
      onClick={() => props.router.push(`/page/${props.path}`)}
      cursor='pointer'
      style={{
        ':hover': {
          opacity: '0.7',
        },
      }}
    >
      <ui.H4>
        <ui.Link
          fontStyle='bold'
          to={`/page/${props.path}`}
        >
          {props.title}
        </ui.Link>
      </ui.H4>
      {props.description && <ui.H5>
        {props.description}
      </ui.H5>}
    </ui.Card>
  }
}

export default withRouter(PageCard)
