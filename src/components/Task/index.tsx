import React from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { CheckBox } from '../CheckBox'

export const Task: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <CheckBox />
      <Text style={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      <Feather name="trash-2" size={32} color="#808080" />
    </View>
  )
}