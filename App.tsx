import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import constants from './constants'
import navigationService from './services/navigationService'
import Registration from './components/users/Registration'

// TODO
  // sagas
  // reducers

const MainNavigator = createStackNavigator({
  [constants.NAVIGATION_NAMES.home]: {
    screen: Registration
  }
})

const Navigation = createAppContainer(MainNavigator)

export default class App extends Component<{}> {
  render () {
    return (
      <Navigation
        ref={navigatorRef => {
          navigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}
