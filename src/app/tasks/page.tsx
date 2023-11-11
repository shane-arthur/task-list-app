import styles from './index.module.scss'
import TaskListContainer from '../containers/list'

export default function TasksListPage() {

    return <main className={styles.tasksPage}>
        <TaskListContainer />
    </main>
}