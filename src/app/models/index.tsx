import { Dayjs } from "dayjs"

export interface TaskItem {
    id: string
    title: string
    description: string
    date: string | Dayjs
    completed?: boolean
}