import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 999,
    marginRight: 10,
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    backgroundColor: '#5E60CE', // Cor quando marcado
    borderRadius: 999,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxLabel: {
    fontSize: 16,
  },
})