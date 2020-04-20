import { compose } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import constants from '../../constants'
import RegistrationComponent from '../../components/users/Registration'
import users from '../../ducks/users'

const {
  actions: { createUser },
  selectors: { createError: errorSelector, createLoading: loadingSelector }
} = users


type RegistrationProps = {
  createUser: Function
  error: Object,
  loading: boolean
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

  componentDidUpdate (prevProps) {
    const newServerError = !prevProps.error && !!this.props.error
    if (newServerError) {
      this.handleServerError()
    }
  }

  handleServerError = () => {
    const { error } = this.props

    const errors = {}
    if (error.hasOwnProperty('email')) {
      errors['email'] = `Email ${error['email'][0]}.`
    }

    if (error.hasOwnProperty('password')) {
      errors['password'] = `Password ${error['password'][0]}.`
    }

    if (error.hasOwnProperty('default')) {
      errors['email'] = error['default'][0]
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors })
    }
  }

  handleSubmit = () => {
    const { createUser } = this.props

    const errors = this.validateInputs()

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
    const { email, errors, password } = this.state
    const { loading } = this.props

    return (
      <RegistrationComponent
        email={email}
        errors={errors}
        handleSubmit={this.handleSubmit}
        loading={loading}
        password={password}
        setContainerState={this.setContainerState}
      />
    )
  }
}

const mapStateToProps = state => {
  const error = errorSelector(state)
  const loading = loadingSelector(state)

  return {
    error,
    loading
  }
}

const mapDispatchToProps = { createUser }

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Registration)
