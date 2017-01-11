import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet
} from 'react-native'
import NavigationBar from 'react-native-navbar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class HomeScreen extends Component {
  render() {
    const titleConfig = {
      title: 'Home',
      tintColor: 'black'
    }
    return (
      <View style={styles.container}>
        <NavigationBar title={titleConfig} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state
  return {
    user
  }
}

export default connect(mapStateToProps)(HomeScreen)
