'use client'

import ListActions from "@/app/components/actions"
import Task from "@/app/components/task"
import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from "@/app/state"
import { FILTER_TYPES, addTask, deleteTask, markTaskAsComplete, setFilterType } from "@/app/state/features/tasksSlice"
import { TaskItem } from "@/app/models"
import { Typography } from "antd"
import { useRouter } from 'next/navigation'
import dayjs from "dayjs"
import { DEFAULT_DATE_FORMAT } from "@/app/constants"

const { Title } = Typography

export default function ListContainer() {

    const tasks: TaskItem[] = useSelector((state: RootState) => state.tasks)
    const filterType: number = useSelector((state: RootState) => state.filterType)
    const router = useRouter()

    const dispatch = useDispatch()

    const onAddTaskHandler = (taskItem: TaskItem) => {
        dispatch(addTask({...taskItem, date: dayjs(taskItem.date).format(DEFAULT_DATE_FORMAT) }))
    }

    const onDeleteTaskHandler = (uuid: string) => {
        dispatch(deleteTask(uuid))
    }

    const onCompleteTaskHandler = (uuid: string) => {
        dispatch(markTaskAsComplete(uuid))
    }

    const onSetFilterTypeHandler = (filterType: number) => {
        dispatch(setFilterType(filterType))
    }

    const tasksForDisplay = filterType === FILTER_TYPES.DONE ? tasks.filter((task: TaskItem) => !!task.completed) : filterType === FILTER_TYPES.TODO ?
        tasks.filter((taskItem: TaskItem) => !taskItem.completed) : tasks

    return <section className={styles.tasks} >
        <ListActions onSetFilterType={onSetFilterTypeHandler} filterType={filterType} onAddTask={onAddTaskHandler} />
        <div role="list" className={styles.taskItemsContainer}>
            {tasksForDisplay.map((task: TaskItem) => {
                return <Task onClick={() => router.push(`/tasks/${task.id}`)} onMarkAsComplete={() => onCompleteTaskHandler(task.id)} onDelete={() => onDeleteTaskHandler(task.id)} key={task.id} {...task} />
            })}
            {!tasksForDisplay.length && <Title className={styles.noTasks}> No tasks added yet for this criteria !</Title>}
        </div>
    </section>
}