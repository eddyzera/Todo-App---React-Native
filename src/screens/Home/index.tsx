import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'

export const Home: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}