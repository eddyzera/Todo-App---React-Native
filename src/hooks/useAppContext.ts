import { useContext } from 'react'
import { ProviderStateContext } from '../provider/ProviderState'

export const useAppContext = () => {
  const context = useContext(ProviderStateContext)

  if(!context){
    throw new Error('useAppContext should be used inside of a ProviderStateContext')
  }

  return context
}