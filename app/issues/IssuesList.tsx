import Link from 'next/link'
import { IIssue } from '../../models'

interface IIssuesListProps {
  issues: IIssue[]
}

export function IssuesList({ issues }: IIssuesListProps) {
  return (
    <ul>
      {issues.map(issue => (
        <li key={issue.id}>
          <article>
            <h2>{issue.title}</h2>
            <p>{issue.summary}</p>
            <p>
              <Link href={`/issues/${issue.id}`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}
