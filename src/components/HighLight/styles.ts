import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderColor: '#333333',
    borderBottomWidth: 1,
    marginTop: 33
  },
  containerHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  textCreated: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold'
  },
  textCompleted: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold'
  },
  count: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999
  },
  textCount: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: 'bold'
  }
})