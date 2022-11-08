import { IIssue } from '../../../models'
import styles from './IssueDetails.module.css'

interface IIssueDetailsProps {
  issue: IIssue
}

export default function IssueDetails({ issue }: IIssueDetailsProps) {
  return (
    <article className={styles.details}>
      <header>
        <h1>{issue.title}</h1>
        <p>{issue.summary}</p>
      </header>
      <p>{issue.description}</p>
    </article>
  )
}
