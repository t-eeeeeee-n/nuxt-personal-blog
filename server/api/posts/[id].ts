import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: {
      author: true,
      comments: true,
    },
  })
  return post
})