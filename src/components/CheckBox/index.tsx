import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { styles } from './styles'

export const CheckBox: React.FunctionComponent = () => {
  const [ isChecked, setIsChecked ] = useState<boolean>(false)
  const handleChecked = () => {
    setIsChecked(state => !state)
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