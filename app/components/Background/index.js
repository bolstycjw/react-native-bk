import React from 'react'
import {
  Image
} from 'react-native'
import styles from './styles'

export default function Background({children, ...props}) {
  return (
      <Image source={props.source} style={styles.backgroundImage}>
        {children}
      </Image>
  )
}
