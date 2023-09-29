import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 12,
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    width: 235,
    fontSize: 14,
    color: '#F2F2F2'
  },
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