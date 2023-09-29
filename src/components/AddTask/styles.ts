import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 4,
    marginTop: -25
  },
  input: {
    backgroundColor: '#262626',
    height: 54,
    padding: 16,
    flex: 1,
    borderRadius: 6,
    color: '#F2F2F2'
  },
  buttonAddMore: {
    height: 54,
    width: 54,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
})