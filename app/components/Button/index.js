import React from 'react'
import {
  TouchableHighlight,
  Image
} from 'react-native'
import styles from './styles'

export default function Button(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.highlight}>
      <Image
        source={props.source}
        style={styles.button}
      />
    </TouchableHighlight>
  )
}
