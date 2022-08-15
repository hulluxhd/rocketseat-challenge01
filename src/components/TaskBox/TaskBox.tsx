import { useState } from 'react'
import plus from '../../assets/plus.svg'
import styles from './TaskBox.module.css'
import { TaskBoxProps } from './Taskbox.props'



export function TaskBox({ newTask, tasks }: TaskBoxProps) {

    const [inputTask, setInputTask] = useState('')

    function handleNewTask() {
        newTask(prev => {
            return (
                [
                    ...prev,
                    {
                        id: prev.length ? prev.slice(-1)[0].id + 1 : 1,
                        title: inputTask,
                        isCompleted: false,
                        createdAt: new Date()
                    }
                ]
            )
        })

        setInputTask('')
    }

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        setInputTask(event.currentTarget.value)
    }

    return (
        <div className={styles.taskbox_container}>
            <input onChange={handleChange} value={inputTask} className={styles.taskbox_input} placeholder="Adicione uma nova tarefa" />
            <button disabled={inputTask ? false : true} onClick={handleNewTask} className={styles.taskbox_button}>
                <strong>Criar</strong>
                <img src={plus} />
            </button>
        </div>
    )
}