'use client'

interface IIssueErrorPageProps {
  error: Error
}

export default function IssueErrorPage({ error }: IIssueErrorPageProps) {
  console.error(error)

  return <p>An error occurred: {error.message}</p>
}
