import { compose } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import RegistrationComponent from '../../components/users/Registration'
import users from '../../ducks/users'

const {
  actions: { createUser }
} = users

type RegistrationProps = {
  createUser: Function
}

class Registration extends Component<RegistrationProps, {}> {
  render () {
    const { createUser } = this.props

    return (
      <RegistrationComponent createUser={createUser} />
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = { createUser }

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Registration)
