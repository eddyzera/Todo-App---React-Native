import React, { createContext, useState, ReactNode, useEffect } from 'react'

export type TaskProps = {
  id: string,
  title: string,
  checked: boolean
}

interface ProviderStateContextProps {
  tasks: Array<TaskProps>,
  createdTask: number,
  completedTasks: number,
  addNewTask: (task: TaskProps) => void,
  updateTasks: (tasks: Array<TaskProps>) => void
}

interface ProviderStateProps {
  children: ReactNode
}

export const ProviderStateContext = createContext<ProviderStateContextProps>({ 
  tasks: [],
  completedTasks: 0,
  createdTask: 0,
  addNewTask: () => {},
  updateTasks: () => {}
})

export const ProviderState: React.FunctionComponent<ProviderStateProps> = ({
  children
}) => {
  const [tasks, setTasks] = useState<Array<TaskProps>>([])
  const [createdTask, setCreatedTasks] = useState<number>(0)
  const [completedTasks, setCompletedTasks] = useState<number>(0)

  const addNewTask = (task: TaskProps) => {
    setTasks(state => [...state, task])
  }

  const updateTasks = (tasks: Array<TaskProps>) => {
    setTasks([...tasks])
  }

  const calculateTotalTasksCreated = () => {
    const total = tasks.length
    setCreatedTasks(total)
  }

  const calculateTotalTasksCompleted = () => {
    const total = tasks.filter(task => task.checked).length
    setCompletedTasks(total)
  }

  useEffect(() => {
    calculateTotalTasksCreated()
    calculateTotalTasksCompleted()
  }, [tasks])

  return (
    <ProviderStateContext.Provider value={{
      tasks,
      createdTask,
      completedTasks,
      addNewTask,
      updateTasks
    }}>
      {children}
    </ProviderStateContext.Provider>
  )
}