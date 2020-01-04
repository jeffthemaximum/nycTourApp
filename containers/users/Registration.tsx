import { compose } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import RegistrationComponent from '../../components/users/Registration'

class Registration extends Component {
  render () {
    return (
      <RegistrationComponent />
    )
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

export default enhance(Registration)
