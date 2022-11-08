import { PrismaClient } from '@prisma/client'

interface IIsueHeadProps {
  params: {
    issueId: string
  }
}

export default async function IsueHead({ params }: IIsueHeadProps) {
  const prisma = new PrismaClient()
  const issue = await prisma.issue.findFirst({ where: { id: +params.issueId } })

  if (!issue) throw new Error('Issue not found!')

  return (
    <>
      <title>{`${issue.title} | Details Page`}</title>
      <meta name='description' content={`${issue.title} | Details Page`} />
    </>
  )
}
