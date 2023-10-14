import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { useAppContext } from '../../hooks/useAppContext'

export const HighLight: React.FunctionComponent = () => {
  const { createdTask, completedTasks } = useAppContext()
  return (
    <View style={styles.container}>
      <View style={styles.containerHighlight}>
        <Text style={styles.textCreated}>Criadas</Text>
        <View style={styles.count}>
          <Text style={styles.textCount}>{createdTask}</Text>
        </View>
      </View>
      <View style={styles.containerHighlight}>
        <Text style={styles.textCompleted}>Concluídas</Text>
        <View style={styles.count}>
          <Text style={styles.textCount}>{completedTasks}</Text>
        </View>
      </View>
    </View>
  )
}