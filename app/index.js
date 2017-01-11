import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Main from './Main'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      store: configureStore()
    }
  }

  componentDidMount() {
    AsyncStorage.setItem(
      'users',
      JSON.stringify([
        {
          name: 'feitico',
          email: 'user@gmail.com',
          password: 'password'
        }
      ])
    )
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Main />
      </Provider>
    )
  }
}
