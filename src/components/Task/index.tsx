import React from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { CheckBox } from '../CheckBox'
import { TaskProps } from '../../provider/ProviderState'

export const Task: React.FunctionComponent<TaskProps> = ({ id, title, checked }) => {
  const isChecked = checked ? styles.textChecked : styles.text
  return (
    <View style={styles.container}>
      <CheckBox id={id} />
      <Text style={isChecked}>{title}</Text>
      <Feather name="trash-2" size={17} color="#808080" />
    </View>
  )
}