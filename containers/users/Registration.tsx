import { compose } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import constants from '../../constants'
import RegistrationComponent from '../../components/users/Registration'
import users from '../../ducks/users'

const {
  actions: { createUser }
} = users

type RegistrationProps = {
  createUser: Function
}

class Registration extends Component<RegistrationProps, {}> {
  state = {
    email: '',
    password: '',
    errors: {
      email: null,
      password: null
    }
  }

  handleSubmit = () => {
    const { createUser } = this.props

    const errors = this.validateInputs()

    console.log({ errors })

    this.setState({ errors }, () => {
      const { email, errors, password } = this.state

      for (let key of Object.keys(errors)) {
        if (typeof errors[key] === 'string') {
          return false
        }
      }

      createUser({ email, password })
    })
  }

  validateInputs = () => {
    const { email, errors, password } = this.state

    const emailRegex = constants.VALID_EMAIL_REGEX
    if (!emailRegex.test(email)) {
      errors.email = 'Email is not valid. Please enter a valid email address.'
    } else {
      errors.email = null
    }

    const passwordMinLength = 6
    if (password.length < passwordMinLength) {
      errors.password = 'Please enter at least 6 characters.'
    } else {
      errors.password = null
    }

    return errors
  }

  setContainerState = (data = {}) => {
    this.setState(data)
  }

  render () {
    const { email, password } = this.state

    return (
      <RegistrationComponent
        email={email}
        handleSubmit={this.handleSubmit}
        password={password}
        setContainerState={this.setContainerState}
      />
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
