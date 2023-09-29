import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { AddTask } from '../../components/AddTask'
import { HighLight } from '../../components/HighLight'
import { EmptyContainer } from '../../components/EmptyContainer'

export const Home: React.FunctionComponent = () => {
  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <AddTask />
        <HighLight />
        <EmptyContainer />
      </View>
    </View>
  )
}