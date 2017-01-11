import React from 'react'
import {
  TextInput
} from 'react-native'
import styles from './styles'

export default function InputText(props) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  )
}
