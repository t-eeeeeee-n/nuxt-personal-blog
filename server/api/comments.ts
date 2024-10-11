import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const comment = await prisma.comment.create({
    data: {
      content: body.content,
      author: body.author,
      postId: body.postId,
    },
  })
  return comment
})