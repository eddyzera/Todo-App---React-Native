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
  updateTasks: (tasks: Array<TaskProps>) => void,
  removeTask: (id: string) => void
}

interface ProviderStateProps {
  children: ReactNode
}

export const ProviderStateContext = createContext<ProviderStateContextProps>({ 
  tasks: [],
  completedTasks: 0,
  createdTask: 0,
  addNewTask: () => {},
  updateTasks: () => {},
  removeTask: (id) => {}
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

  const removeTask = (id: string) => {
    const updatedTask = tasks.filter(task => task.id !== id)
    setTasks([...updatedTask])
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
      updateTasks,
      removeTask
    }}>
      {children}
    </ProviderStateContext.Provider>
  )
}