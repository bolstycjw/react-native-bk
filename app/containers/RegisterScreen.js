import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as registerActions from '../actions/registerActions'
import Background from '../components/Background'
import Button from '../components/Button'
import InputText from '../components/InputText'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  inputView: {
    flex: 4,
    justifyContent: 'space-around'
  },
  buttonView: {
    flex: 1
  },
  headerText: {
    fontFamily: 'changa one',
    padding: 20,
    alignSelf: 'center',
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold'
  }
})

class RegisterScreen extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleRegister = () => {
    const { name, email, password } = this.state
    this.props.actions.registerRequest(name, email, password)
  }

  render() {
    const { name, email, password } = this.state
    const nameChanged = name => this.setState({name})
    const emailChanged = email => this.setState({email})
    const passwordChanged = password => this.setState({password})
    return (
      <Background source={require('../images/Bg-Texture.jpg')}>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>CREATE ACCOUNT</Text>
          </View>
          <View style={styles.inputView}>
            <InputText
              placeholder="NAME"
              onChangeText={nameChanged}
              value={name}
            />
            <InputText
              placeholder="EMAIL"
              onChangeText={emailChanged}
              value={email}
            />
            <InputText
              placeholder="PASSWORD"
              onChangeText={passwordChanged}
              value={password}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              onPress={this.handleRegister}
              source={require('../images/Button-CreateAccount.png')}
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
    actions: bindActionCreators(registerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
