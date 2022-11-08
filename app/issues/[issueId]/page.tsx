import { PrismaClient } from '@prisma/client'
import { waitSeconds } from '../../../util'
import IssueDetails from './IssueDetails'

interface IIssuesDetailsPageProps {
  params: {
    issueId: string
  }
}

export default async function IssuesDetailsPage({ params }: IIssuesDetailsPageProps) {
  const prisma = new PrismaClient()
  const issue = await prisma.issue.findFirst({ where: { id: +params.issueId } })
  // await waitSeconds(3)

  if (!issue) throw new Error('Issue not found!')

  return <IssueDetails issue={issue} />
}
