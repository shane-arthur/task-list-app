'use client'

import { useSelector, useDispatch } from 'react-redux'
import { TaskItem } from '@/app/models'
import { RootState } from '@/app/state'
import Task from '@/app/components/task'
import styles from './index.module.scss'
import { useState } from 'react'
import EditTaskModal from '../../components/task/add'
import dayjs from 'dayjs'
import { editTask } from '@/app/state/features/tasksSlice'
import { DEFAULT_DATE_FORMAT } from '@/app/constants'

type TaskDetailsProps = {
    id: string
}

export function TaskDetailsContainer(props: TaskDetailsProps) {
    const { id } = props
    const [showEditTaskModal, setShowEditTaskModal] = useState<boolean>(false)
    const tasks: TaskItem[] = useSelector((state: RootState) => state.tasks)
    const task = tasks.find((task: TaskItem) => task.id === id) ?? { id: '', title: '', description: '', date: '' }
    const dispatch = useDispatch()

    const onEditTaskHandler = (taskItem: TaskItem) => {
        dispatch(editTask({ ...taskItem, id: task.id, date: dayjs(taskItem.date).format(DEFAULT_DATE_FORMAT) }))
    }

    return <>
        <section className={styles.task}>
            <Task onClick={() => setShowEditTaskModal(true)} {...task} />
        </section>
        {showEditTaskModal && <EditTaskModal initialValues={{ ...task, date: dayjs(task.date, DEFAULT_DATE_FORMAT) }} isOpen={showEditTaskModal} onClose={() => setShowEditTaskModal(false)} onOk={onEditTaskHandler} />}
    </>
}