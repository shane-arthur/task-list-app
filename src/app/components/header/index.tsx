
import styles from './index.module.scss'
import { Layout } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Header } = Layout

export default function TopHeader() {
    const pathname: string = usePathname()
    const router = useRouter();
    const isListPage: boolean = pathname === '/tasks'

    return <Header className={styles.header}>
        <Button style={{ visibility: isListPage ? 'hidden' : 'visible' }} type="text" icon={<ArrowLeftOutlined />} onClick={() => router.back()} />
        <h1> {isListPage ? 'To-Do List' : 'Task Details'} </h1>
    </Header>
}