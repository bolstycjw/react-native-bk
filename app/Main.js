import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'

import LandingScreen from './containers/LandingScreen'
import RegisterScreen from './containers/RegisterScreen'
import LoginScreen from './containers/LoginScreen'
import HomeScreen from './containers/HomeScreen'

class Main extends Component {
  render() {
    const { isAuthenticated } = this.props
    if (!isAuthenticated)
      return (
        <Router>
          <Scene key="root">
            <Scene key="landing"
              component={LandingScreen}
              title="Landing"
              hideNavBar
              initial
            />
            <Scene key="register"
              component={RegisterScreen}
              title="Register"
              hideNavBar
            />
            <Scene key="login" component={LoginScreen} title="Login" />
          </Scene>
        </Router>
      )

    return (
      <HomeScreen />
    )
  }
}

const mapStateToProps = function (state) {
  const { user } = state
  return {
    isAuthenticated: user.isAuthenticated
  }
}

export default connect(mapStateToProps)(Main)
