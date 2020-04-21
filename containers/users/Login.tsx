import React, { Component } from 'react'

import { compose } from 'redux'
import { connect } from 'react-redux'

import constants from '../../constants'
import LoginComponent from '../../components/users/Login'
import navigationService from '../../services/navigationService'
import users from '../../ducks/users'

const {
  actions: { login },
  selectors: {
    loginError: errorSelector,
    loginLoading: loadingSelector,
    user: userSelector
  }
} = users

type LoginProps = {
  createUser: Function
  error: Object
  loading: boolean
  login: Function
  user: Object
}

class Login extends Component<LoginProps, {}> {
  state = {
    email: '',
    password: '',
    errors: {
      email: null,
      password: null
    }
  }

  static navigationOptions = {
    headerShown: false
  }

  componentDidUpdate (prevProps) {
    const didLogIn = !prevProps.user && this.props.user
    const newServerError = !prevProps.error && !!this.props.error
    if (newServerError) {
      this.handleServerError()
    } else if (didLogIn) {
      navigationService.navigate(constants.NAVIGATION_NAMES.home, {})
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
    const { login } = this.props

    const errors = this.validateInputs()

    this.setState({ errors }, () => {
      const { email, errors, password } = this.state

      for (let key of Object.keys(errors)) {
        if (typeof errors[key] === 'string') {
          return false
        }
      }

      login({ email, password })
    })
  }

  setContainerState = (data = {}) => {
    this.setState(data)
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

  render () {
    const { email, errors, password } = this.state
    const { loading } = this.props

    return (
      <LoginComponent
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
  const user = userSelector(state)

  return {
    error,
    loading,
    user
  }
}

const mapDispatchToProps = { login }

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Login)
