import { useEffect, useState } from 'react'
import { TasksProps } from '../../App'
import styles from './TaskList.module.css'
import { TaskListProps } from './TaskList.props'

export function TaskList({ tasks }: TaskListProps) {

    const [completedTasks, setCompletedTasks] = useState(0)

    function calculatingFinishedTasks(tasks: TasksProps[]) {
        let counter = 0

        tasks?.forEach(task => {
            if (task.isCompleted) {
                counter++
            }
        })

        return counter

    }

    useEffect(() => {
        const finishedTasks = calculatingFinishedTasks(tasks)
        setCompletedTasks(finishedTasks)
    }, [tasks])


    return (
        <div className={styles.taskList}>
            <div className={styles.tasks}>
                <span className={styles.taskList_created}>Tarefas criadas</span>
                <span className={styles.tasks_numbers}>{tasks.length.toString()}</span>
            </div>
            <div className={styles.tasks}>
                <span className={styles.taskList_finished}>Concluídas</span>
                <span className={styles.tasks_numbers}>{completedTasks > 0 ? `${completedTasks} de ${tasks.length}` : completedTasks}</span>
            </div>
        </div>
    )
}