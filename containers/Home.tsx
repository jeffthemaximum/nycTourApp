import { compose } from 'redux'
import { connect } from 'react-redux'
import { withNavigationFocus } from 'react-navigation'
import React, { Component } from 'react'

import Feed from './feed/Feed'
import Registration from './users/Registration'
import Splash from './Splash'
import users from '../ducks/users'

const {
  actions: { fetchUser },
  selectors: {
    error: userErrorSelector,
    loading: userLoadingSelector,
    user: userSelector
  }
} = users

type HomeProps = {
  fetchUser: Function
  isFocused: Boolean
  loading: Boolean
  user: object
}

type HomeState = {
  didFetch: Boolean
}

class Home extends Component<HomeProps, HomeState> {
  static navigationOptions = {
    headerShown: false
  }

  constructor (props) {
    super(props)

    this.state = {
      didFetch: false
    }
  }

  componentDidMount () {
    this.handleFetchUser()
  }

  componentDidUpdate (prevProps) {
    const { isFocused } = this.props
    const didFocus = !prevProps.isFocused && isFocused

    if (didFocus) {
      this.handleFetchUser()
    }
  }

  handleFetchUser = () => {
    const { fetchUser, user } = this.props
    const { didFetch } = this.state

    if (!user && !didFetch) {
      fetchUser()
      this.setState({ didFetch: true })
    }
  }

  render() {
    const { loading, user } = this.props

    if (loading) {
      return <Splash />
    } else if (!user) {
      return <Registration />
    } else {
      return <Feed />
    }
  }
}

const mapStateToProps = state => {
  const error = userErrorSelector(state)
  const loading = userLoadingSelector(state)
  const user = userSelector(state)

  return {
    error,
    loading,
    user
  }
}

const mapDispatchToProps = { fetchUser }

let enhance: Function
enhance = compose(
  withNavigationFocus,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(Home)
