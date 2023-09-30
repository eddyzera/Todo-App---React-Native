import React, { createContext, useState, ReactNode } from 'react'

type TaskProps = {
  uuid: string,
  title: string,
  checked: boolean
}

interface ProviderStateContextProps {
  tasks: Array<TaskProps>,
  addNewTask: (task: TaskProps) => void
}

interface ProviderStateProps {
  children: ReactNode
}

const ProviderStateContext = createContext<ProviderStateContextProps>({ 
  tasks: [], 
  addNewTask: ()=> {} 
})

export const ProviderState: React.FunctionComponent<ProviderStateProps> = ({
  children
}) => {
  const [tasks, setTasks] = useState<Array<TaskProps>>([])
  const addNewTask = (task: TaskProps) => {
    setTasks(state => [...state, task])
  }
  return (
    <ProviderStateContext.Provider value={{
      tasks,
      addNewTask
    }}>
      {children}
    </ProviderStateContext.Provider>
  )
}