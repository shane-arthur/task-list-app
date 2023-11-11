import { FC, useRef } from 'react'
import { Modal, Form, Input, FormInstance, DatePicker, Checkbox } from 'antd'
import styles from './index.module.scss'
import { TaskItem } from '@/app/models'
import { v4 as uuidv4 } from 'uuid'
import { Dayjs } from 'dayjs'
import { DEFAULT_DATE_FORMAT } from '@/app/constants'
import { CiOutlined } from '@ant-design/icons'

const { Item } = Form
const { TextArea } = Input

interface InitialTaskItem extends TaskItem {
    date: Dayjs
}

export type AddTaskModalProps = {
    isOpen: boolean
    onClose: () => void
    onOk: (task: TaskItem) => void
    initialValues?: TaskItem
}

type FieldType = {
    title?: string
    description?: string
    date?: string
    completed?: boolean
}

const AddTaskModal: FC<AddTaskModalProps> = ({ isOpen, onClose, onOk, initialValues }) => {
    const formRef = useRef<FormInstance>(null)

    const onCloseHandler = (): void => {
        formRef.current?.resetFields()
        onClose()
    }

    const onOkHandler = (): void => {
        formRef.current?.validateFields().then(({ title, description, date }) => {
            onOk({ id: uuidv4(), title, description, date })
            onCloseHandler()
        })
    }

    return <Modal width={720} title={!!initialValues ? 'Edit task' : 'Add a new task'} open={isOpen} onCancel={onCloseHandler} onOk={onOkHandler} okText={!!initialValues ? 'Edit' : 'Add'}>
        <Form
            ref={formRef}
            className={styles.form}
            name="addTaskForm"
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            initialValues={initialValues}
        >
            <Item<FieldType>
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please input the task name!' }, { min: 4 }, { max: 40 }]}
            >
                <Input />
            </Item>

            <Item<FieldType>
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input the description!' }, { min: 10 }, { max: 200 }]}
            >
                <TextArea rows={4} />
            </Item>

            <Item<FieldType>
                label="Due Date"
                name="date"
                rules={[{ required: true, message: 'Please input the date!' }]}
            >
                <DatePicker className={styles.date} format={DEFAULT_DATE_FORMAT}
                    placeholder={DEFAULT_DATE_FORMAT} />
            </Item>

            {!!initialValues && <Item<FieldType>
                label="Completed"
                name="completed"
                valuePropName="checked"
            >
                <Checkbox />
            </Item>}

        </Form >
    </Modal>
}

export default AddTaskModal