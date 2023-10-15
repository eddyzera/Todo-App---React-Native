import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { CheckBox } from '../CheckBox'
import { TaskProps } from '../../provider/ProviderState'
import { useAppContext } from '../../hooks/useAppContext'

export const Task: React.FunctionComponent<TaskProps> = ({ id, title, checked }) => {
  const isChecked = checked ? styles.textChecked : styles.text
  const { removeTask } = useAppContext()

  return (
    <View style={styles.container}>
      <CheckBox id={id} />
      <Text style={isChecked}>{title}</Text>
      <TouchableOpacity onPress={() => removeTask(id)}>
        <Feather name="trash-2" size={17} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}