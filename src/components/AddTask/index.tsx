import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useAppContext } from '../../hooks/useAppContext'
import { styles } from './styles'

export const AddTask: React.FunctionComponent = () => {
  const [ task, setTask ] = useState<string>('')
  const { addNewTask } = useAppContext()

  const handleCreateNewTask = () => {

  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor="#808080"
        style={styles.input}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.buttonAddMore}>
        <Text>
          <Icon name="pluscircleo" size={16} color={"#F2F2F2"} />
        </Text>
      </TouchableOpacity>
    </View>
  )
}