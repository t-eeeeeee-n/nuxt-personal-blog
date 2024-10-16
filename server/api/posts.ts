import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  return prisma.post.findMany({
    include: {
      author: true,
    },
  });

  // =================================
  // import { posts } from '../data/posts';
  //
  // return posts;
})