import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { AddTask } from '../../components/AddTask'

export const Home: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AddTask />
    </View>
  )
}