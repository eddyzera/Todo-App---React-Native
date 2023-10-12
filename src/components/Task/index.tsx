import React from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { CheckBox } from '../CheckBox'
import { TaskProps } from '../../provider/ProviderState'

export const Task: React.FunctionComponent<TaskProps> = ({ checked, id, title }) => {
  return (
    <View style={styles.container}>
      <CheckBox />
      <Text style={styles.text}>{title}</Text>
      <Feather name="trash-2" size={17} color="#808080" />
    </View>
  )
}