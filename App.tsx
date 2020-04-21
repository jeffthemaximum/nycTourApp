import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createStore, applyMiddleware } from 'redux'
import * as Font from 'expo-font'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import constants from './constants'
import navigationService from './services/navigationService'
import Home from './containers/Home'
import Login from './containers/users/Login'
import reducers from './ducks/reducers'
import rootSaga from './ducks/sagas'
import Splash from './containers/Splash'

// SAGAS
const sagaMiddleware = createSagaMiddleware()

// REDUX
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

// MORE SAGAS
sagaMiddleware.run(rootSaga)

// NAVIGATION
const MainNavigator = createStackNavigator({
  [constants.NAVIGATION_NAMES.home]: {
    screen: Home
  },
  [constants.NAVIGATION_NAMES.login]: {
    screen: Login
  }
})

const Navigation = createAppContainer(MainNavigator)

export default class App extends Component<{}, {fontLoaded: boolean}> {
  state = {
    fontLoaded: false
  }

  // FONTS
  async componentDidMount() {
    await Font.loadAsync({
      [constants.FONTS.bold]: require('./assets/fonts/ProximaNova-Bold.ttf'),
      [constants.FONTS.regular]: require('./assets/fonts/ProximaNova-Regular.ttf'),
      [constants.FONTS.semiBold]: require('./assets/fonts/ProximaNova-Semibold.ttf'),
    })

    this.setState({ fontLoaded: true })
  }

  render () {
    if (!this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <Splash />
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <Navigation
            ref={navigatorRef => {
              navigationService.setTopLevelNavigator(navigatorRef)
            }}
          />
        </Provider>
      )
    }
  }
}
