import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { styles } from './styles'
import { useAppContext } from '../../hooks/useAppContext'

export const CheckBox: React.FunctionComponent<{ id: string }> = ({ id }) => {
  const { tasks } = useAppContext()
  const [ isChecked, setIsChecked ] = useState<boolean>(false)
  const handleChecked = () => {
    setIsChecked(state => !state)
    const taskChecked = tasks.map((task) => {
      if(task.id === id) {
        return { ...task, checked: !isChecked }
      } else {
        return task
      }
    })

    console.log(`taskChecked =>`, taskChecked)
  }
  return (
    <TouchableWithoutFeedback onPress={handleChecked}>
      <View style={styles.checkboxContainer}>
        {isChecked ? (
          <View style={styles.checkboxChecked}>
            <MaterialIcons name="done" size={10} color="#FFF" />
          </View>
        ) : (
          <View style={styles.checkbox} />
        )}
      </View>
  </TouchableWithoutFeedback>
  )
}