import React from 'react'
import { Image } from 'expo-image'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const EmptyContainer: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/clipboard-icon.png')} />
      <View style={styles.containerText}>
        <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}