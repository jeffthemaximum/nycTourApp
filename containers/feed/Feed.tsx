import { compose } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import FeedComponent from '../../components/feed/Feed'

class Feed extends Component {
  render () {
    return <FeedComponent />
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Feed)
