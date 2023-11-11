import styles from './index.module.scss'
import { Button, Radio } from 'antd'
import { Space } from 'antd'
import { useState } from 'react'
import AddTaskModal from '../task/add'
import { TaskItem } from '@/app/models'
import { FILTER_TYPES } from '@/app/state/features/tasksSlice'

type TaskActionsProps = {
    onAddTask: (task: TaskItem) => void
    onSetFilterType: (filterType: number) => void
    filterType: number
}

export default function TaskActions(props: TaskActionsProps) {
    const { onAddTask, filterType, onSetFilterType } = props
    const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false)

    return <><Space className={styles.buttonsContainer}>
        <Button onClick={() => setShowAddTaskModal(isShownValue => !isShownValue)} className={styles.buttonLarge} type="default"> Add a new to-do</Button>
        <Button onClick={() => onSetFilterType(FILTER_TYPES.ALL)} className={styles.buttonSmall} type={filterType === FILTER_TYPES.ALL ? 'primary' : 'default'}> All</Button>
        <Button onClick={() => onSetFilterType(FILTER_TYPES.TODO)} className={styles.buttonSmall} type={filterType === FILTER_TYPES.TODO ? 'primary' : 'default'}> To-do</Button>
        <Button onClick={() => onSetFilterType(FILTER_TYPES.DONE)} className={styles.buttonSmall} type={filterType === FILTER_TYPES.DONE ? 'primary' : 'default'}> Completed</Button>
    </Space>
        <AddTaskModal isOpen={showAddTaskModal} onClose={() => setShowAddTaskModal(false)} onOk={onAddTask} />
    </>
}