import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return prisma.comment.create({
    data: {
      content: body.content,
      author: body.author,
      postId: body.postId,
    },
  });
})