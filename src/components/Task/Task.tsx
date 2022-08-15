import styles from './Task.module.css'
import notChecked from '../../assets/not-checked.svg'
import checked from '../../assets/checked.svg'
import { TasksProps } from '../../App'
import { Trash } from 'phosphor-react'
import { TaskProps } from './Task.props'



export function Task({ task, tasks, onDelete, setTasks }: TaskProps) {

    const handleTaskCheck = (taskToCheck: TasksProps) => {
        const taskToUpdate = tasks.find(task => task.id === taskToCheck.id)

        if (taskToUpdate) {


            const updatingTask = {
                ...taskToUpdate,
                isCompleted: !taskToUpdate.isCompleted
            }


            setTasks(prev => {

                const changedArray = prev.map(task => {
                    if (task.id === taskToCheck.id) {
                        return updatingTask
                    }

                    return task

                })

                return changedArray
            })
        }



    }

    return (
        <div className={styles.taskContainer}>
            <div className={styles.taskDescription}>
                <img onClick={() => handleTaskCheck(task)} src={task.isCompleted ? checked : notChecked} />
                <p className={task.isCompleted ? styles.taskTextWithLine : styles.taskTextWithoutLine}>{task.title}</p>
            </div>
            <button onClick={() => onDelete(task.id)} >
                <Trash size={24} />
            </button>
        </div>
    )

}