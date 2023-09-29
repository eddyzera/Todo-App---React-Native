import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { styles } from './styles'

export const Task: React.FunctionComponent = () => {
  const [ isChecked, setIsChecked ] = useState<boolean>(false)
  const handleChecked = () => {
    setIsChecked(state => !state)
  }
  return (
    <View style={styles.container}>
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
      <Text style={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      <Feather name="trash-2" size={32} color="#808080" />
    </View>
  )
}