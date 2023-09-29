import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const HighLight: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHighlight}>
        <Text style={styles.textCreated}>Criadas</Text>
        <View style={styles.count}>
          <Text style={styles.textCount}>0</Text>
        </View>
      </View>
      <View style={styles.containerHighlight}>
        <Text style={styles.textCompleted}>Concluídas</Text>
        <View style={styles.count}>
          <Text style={styles.textCount}>0</Text>
        </View>
      </View>
    </View>
  )
}