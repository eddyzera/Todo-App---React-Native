import React from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { styles } from './styles'

export const AddTask: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor="#808080"
        style={styles.input}
      />
      <TouchableOpacity style={styles.buttonAddMore}>
        <Text>
          <Icon name="pluscircleo" size={16} color={"#F2F2F2"} />
        </Text>
      </TouchableOpacity>
    </View>
  )
}