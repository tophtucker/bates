
import React from 'react'
import _ from 'lodash/fp'

import pageData from './pageData'

export default class PageWraper extends React.Component {
  render() {
    const data = _.find(
      {path: this.props.params.path},
      pageData,
    )
    if (!data) return null
    const Component = data.default
    return <Component/>
  }
}
