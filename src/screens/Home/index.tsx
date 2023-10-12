import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { AddTask } from '../../components/AddTask'
import { HighLight } from '../../components/HighLight'
import { EmptyContainer } from '../../components/EmptyContainer'
import { Task } from '../../components/Task'
import { useAppContext } from '../../hooks/useAppContext'

export const Home: React.FunctionComponent = () => {
  const { tasks } = useAppContext()
  console.log(`task =>`, tasks)
  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <AddTask />
        <HighLight />
        { tasks.length === 0 ? (
          <EmptyContainer />
        ) : (
          <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task checked={item.checked} id={item.id} title={item.title} />
          )}
        />
        ) }
      </View>
    </View>
  )
}