import type { Metadata } from 'next'
import { ConfigProvider } from 'antd'
import theme from './themeConfig'
import './globals.scss'
import ContentContainer from './containers/content'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Task List App',
  description: 'Demo task list application built with next.js',
}


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
            <ContentContainer>
              {children}
            </ContentContainer>
        </ConfigProvider>
      </body>
    </html>
  )
}
