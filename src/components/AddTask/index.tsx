import React, { useState } from 'react'
import { v4  } from 'uuid'
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useAppContext } from '../../hooks/useAppContext'
import { TaskProps } from '../../provider/ProviderState'
import { createUUID } from './utils/generate'
import { styles } from './styles'

export const AddTask: React.FunctionComponent = () => {
  const [ task, setTask ] = useState<string>('')
  const { addNewTask } = useAppContext()

  const handleCreateNewTask = () => {
    const taskObj = {
      id: createUUID(),
      title: task,
      checked: false
    } as TaskProps

    if(!task) {
      Alert.alert('Algo de errado', 'por favor ensira uma task')
      return;
    }
    addNewTask(taskObj)
    setTask('')    
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor="#808080"
        style={styles.input}
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity style={styles.buttonAddMore} onPress={handleCreateNewTask}>
        <Text>
          <Icon name="pluscircleo" size={16} color={"#F2F2F2"} />
        </Text>
      </TouchableOpacity>
    </View>
  )
}