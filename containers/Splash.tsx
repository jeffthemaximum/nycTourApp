import { compose } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import SplashComponent from '../components/Splash'

class Splash extends Component {
  render () {
    return <SplashComponent />
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

export default enhance(Splash)
