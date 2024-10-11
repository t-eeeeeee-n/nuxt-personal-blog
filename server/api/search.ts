import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const searchTerm = query.q as string

  const posts = await prisma.post.findMany({
    where: {
      OR: [
        { title: { contains: searchTerm } },
        { content: { contains: searchTerm } },
      ],
    },
    include: {
      author: true,
    },
  })

  return posts
})