import React from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { CheckBox } from '../CheckBox'
import { TaskProps } from '../../provider/ProviderState'

type Task = Omit<TaskProps, "checked">

export const Task: React.FunctionComponent<Task> = ({ id, title }) => {
  return (
    <View style={styles.container}>
      <CheckBox id={id} />
      <Text style={styles.text}>{title}</Text>
      <Feather name="trash-2" size={17} color="#808080" />
    </View>
  )
}