import React from 'react'
import { View } from 'react-native'
import { Image } from 'expo-image'
import { styles } from './styles'

export const Header: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/logo.svg')} />
    </View>
  )
}