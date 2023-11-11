
import { TaskDetailsContainer } from "@/app/containers/details"
import styles from './index.module.scss'

export default function TaskDetailsPage({ params }: { params: { taskId: string } }){
    
    return <main className={styles.taskDetailsPage}>
        <TaskDetailsContainer id={params.taskId} />
    </main>
}