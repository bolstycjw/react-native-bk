import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import Background from '../components/Background'
import Button from '../components/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  bannerView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#EC7920'
  },
  buttonView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  footerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  banner: {
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  footerText: {
    color: '#FFFFFF',
    textAlign: 'center'
  }
})

export default class LandingScreen extends Component {
  render() {
    return (
      <Background source={require('../images/Bg-Texture.jpg')}>
        <View style={styles.container}>
          <View style={styles.bannerView}>
            <Image
              source={require('../images/BK-logo.png')}
              style={styles.banner}
            />
          </View>
          <View style={styles.buttonView}>
            <Button onPress={Actions.register} source={require('../images/Button-CreateAccount.png')} />
            <Button onPress={Actions.login} source={require('../images/Button-Login.png')} />
            <Button onPress={Actions.login} source={require('../images/Button-Facebook.png')} />
          </View>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              TM & © 2016 Burger King Corporation. Used under license. All rights reserved.
            </Text>
          </View>
        </View>
      </Background>
    )
  }
}
