import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const searchTerm = query.q as string

  return prisma.post.findMany({
    where: {
      OR: [
        {title: {contains: searchTerm}},
        {content: {contains: searchTerm}},
      ],
    },
    include: {
      author: true,
    },
  });


  // =====================================
  // import { posts } from '../data/posts';
  // // 検索条件に一致するポストをフィルタリング
  // return posts.filter((post) => {
  //   return (
  //       post.title.includes(searchTerm) || post.content.includes(searchTerm)
  //   );
  // });
})