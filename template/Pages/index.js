
import React from 'react'
import _ from 'lodash/fp'
import {ui} from 'stijl'

const context = require.context('./', true, /^\.\/.*\/\index.js$/)
export const pagesData = _.pipe(
  _.map(
    key => ({
      ...context(key),
      path: _.get(1, key.split('/')),
    }),
  ),
  _.sortBy('date'),
  _.reverse,
)(context.keys())

const getCard = (d, i) =>
  <ui.Col key={i}>
    <ui.H3 marginBottom={0}>
      <ui.Link to={`/page/${d.path}`}>
        {d.title}
      </ui.Link>
    </ui.H3>
    <ui.P>
      {d.description}
    </ui.P>
    <ui.S/>
  </ui.Col>

export class Pages extends React.Component {
  render() {
    return <ui.ColText p pV>
      {_.map(
        getCard,
        pagesData,
      )}
    </ui.ColText>
  }
}
