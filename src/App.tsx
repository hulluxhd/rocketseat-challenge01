import './global.css'
import { Header } from './components/Header/Header'
import styles from './App.module.css'
import { TaskBox } from './components/TaskBox/TaskBox'
import { TaskContainer } from './components/TaskContainer/TaskContainer'
import { useState } from 'react'


export interface TasksProps {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: Date
}

function App() {

  const [tasks, setTasks] = useState<TasksProps[]>([])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <TaskBox newTask={setTasks} tasks={tasks} />
        <TaskContainer setTasks={setTasks} tasks={tasks} />
      </div>
    </>
  )
}

export default App
