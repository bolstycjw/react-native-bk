import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../actions/loginActions'

import Background from '../components/Background'
import Button from '../components/Button'
import InputText from '../components/InputText'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    justifyContent: 'space-between'
  }
});

class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {
      email: 'user@gmail.com',
      password: 'password'
    }
  }

  handleLogin = () => {
    const { email, password } = this.state
    this.props.actions.loginRequest(email, password)
  }

  render() {
    const { email, password } = this.state
    const emailChanged = email => this.setState({email})
    const passwordChanged = password => this.setState({password})

    return (
      <Background source={require('../images/Bg-Texture.jpg')}>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <InputText
              placeholder="email"
              onChangeText={emailChanged}
              value={email}
            />
            <InputText
              placeholder="password"
              onChangeText={passwordChanged}
              value={password}
            />
            <Button
              source={require('../images/Button-Login.png')}
              onPress={this.handleLogin}
            />
          </View>
        </View>
      </Background>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state
  return {
    user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
