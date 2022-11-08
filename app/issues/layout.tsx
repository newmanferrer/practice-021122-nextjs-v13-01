import { PrismaClient } from '@prisma/client'
import { IssuesList } from './IssuesList'
import styles from './layout.module.css'

interface IIssuesLayoutProps {
  children: React.ReactNode
}

export default async function IssuesLayout({ children }: IIssuesLayoutProps) {
  const prisma = new PrismaClient()
  const issues = await prisma.issue.findMany()

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <IssuesList issues={issues} />
      </aside>
      {children}
    </div>
  )
}
