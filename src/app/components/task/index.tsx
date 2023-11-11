import styles from './index.module.scss'
import { Card, Space, Button, Typography, Badge, Tooltip } from 'antd'
import { TaskItem } from '@/app/models'
import { DeleteOutlined, ClockCircleOutlined, CheckOutlined } from '@ant-design/icons'

const { Text } = Typography

interface TaskProps extends TaskItem {
    onDelete?: () => void
    onMarkAsComplete?: () => void
    onClick: () => void
}

export default function Task(props: TaskProps) {
    const { id, title, description, completed, date, onDelete, onMarkAsComplete, onClick } = props

    const onMarkAsCompleteHandler = ($event: React.MouseEvent<HTMLButtonElement>) => {
        onMarkAsComplete?.();
        $event.stopPropagation()
    }

    const onDeleteHandler = ($event: React.MouseEvent<HTMLButtonElement>) => {
        onDelete?.();
        $event.stopPropagation();
    }

    return <Card onClick={onClick} role="listitem button" className={!!onDelete && !!onMarkAsComplete ? styles.taskItem : `${styles.taskItem} ${styles.details}`}>
        <Space className={styles.taskContainer} direction="vertical" size="small">
            <Space className={styles.itemContainer}>
                <Text className={styles.title}> {title} </Text>
                <Space size="small">
                    {!completed && !!onMarkAsComplete && <Tooltip title="Mark as complete"><Button onClick={onMarkAsCompleteHandler} type="text" icon={<CheckOutlined />} /> </Tooltip>}
                    {!!onDelete && <Tooltip title="Delete Task"><Button onClick={onDeleteHandler} type="text" icon={<DeleteOutlined />} /> </Tooltip>}
                </Space>
            </Space>
            <Text className={styles.description}> {description} </Text>
            <Space className={styles.itemContainer}>
                <Space className={styles.dateContainer} size="small">
                    <ClockCircleOutlined className={styles.timeIcon} />
                    <Text className={styles.date}>{date.toString()}</Text>
                </Space>
                <Badge.Ribbon className={styles.status} color={!!completed ? 'blue' : 'gray'} text={!!completed ? 'Done' : 'To-do'} />
            </Space>
        </Space>
    </Card>
}