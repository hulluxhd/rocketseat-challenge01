import styles from './TaskContainer.module.css'
import clipboard from '../../assets/Clipboard.svg'
import { useState } from 'react'
import { Task } from '../Task/Task';
import { TaskBox } from '../TaskBox/TaskBox';
import { TaskList } from '../TaskList/TaskList';
import { TasksProps } from '../../App';
import { TaskContainerProps } from './TaskContainer.props';



export function TaskContainer({ tasks, setTasks }: TaskContainerProps) {

    function handleDeleteTask(id: number) {
        const tasksWithoutDeleted = tasks.filter(task => task.id !== id)
        setTasks(tasksWithoutDeleted)
    }

    return (
        <>
            <TaskList tasks={tasks} />
            {tasks.length === 0 ? (
                <div className={styles.TaskContainer}>
                    <img src={clipboard} alt="clipboard" />
                    <div>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            ) : tasks.map(task => {
                return (
                    <Task tasks={tasks} setTasks={setTasks} onDelete={handleDeleteTask} key={task.id} task={task} />
                )

            })}
        </>
    )
}