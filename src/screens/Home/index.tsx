import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { AddTask } from '../../components/AddTask'
import { HighLight } from '../../components/HighLight'
import { EmptyContainer } from '../../components/EmptyContainer'
import { Task } from '../../components/Task'

export const Home: React.FunctionComponent = () => {
  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <AddTask />
        <HighLight />
        <Task />
      </View>
    </View>
  )
}