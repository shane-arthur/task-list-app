'use client'

import { Layout } from 'antd'
import { ReactNode } from 'react'
import Header from '../../components/header'
import styles from './index.module.scss'
import { store, persistor } from '../../state'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


type ContentContainerProps = {
    children?: ReactNode
}

export default function ContentContainer(props: ContentContainerProps) {
    const { children } = props

    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Layout className={styles.layout}>
                <div className={styles.app}>
                    <Header />
                    {children}
                </div>
            </Layout>
        </PersistGate>
    </Provider>
}