import { createSlice } from '@reduxjs/toolkit'
import { TaskItem } from '../../models'

export enum FILTER_TYPES {
  'ALL' = 0,
  'TODO' = 1,
  'DONE' = 2
}

type TasksState = {
  tasks: TaskItem[]
  filterType: number
}

const initialState: TasksState = {
  tasks: [],
  filterType: FILTER_TYPES.ALL
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state: TasksState, action: { payload: TaskItem, type: string }) => {
      state.tasks = [{ ...action.payload }, ...state.tasks]
    },
    deleteTask: (state: TasksState, action: { payload: string, type: string }) => {
      state.tasks = state.tasks.filter((task: TaskItem) => task.id !== action.payload)
    },
    markTaskAsComplete: (state: TasksState, action: { payload: string, type: string }) => {
      const tasks: TaskItem[] = Array.from(state.tasks)
      const index: number = tasks.findIndex((item: TaskItem) => item.id === action.payload)
      tasks[index].completed = true
      state.tasks = tasks
    },
    editTask: (state: TasksState, action: { payload: TaskItem, type: string }) => {
      const tasks: TaskItem[] = Array.from(state.tasks)
      const index: number = tasks.findIndex((item: TaskItem) => item.id === action.payload.id)
      tasks[index] = action.payload
      state.tasks = tasks
    },
    setFilterType: (state: TasksState, action: { payload: number, type: string }) => {
      state.filterType = action.payload
    }
  },
})

export const { addTask, deleteTask, markTaskAsComplete, setFilterType, editTask } = tasksSlice.actions

export default tasksSlice.reducer