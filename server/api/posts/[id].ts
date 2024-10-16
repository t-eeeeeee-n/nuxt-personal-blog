import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  return prisma.post.findUnique({
    where: {id: parseInt(id)},
    include: {
      author: true,
      comments: true,
    },
  });

  // ==============================
  // import { posts } from '../../data/posts';
  //
  // // id に一致するポストを検索
  // const post = posts.find((post) => post.id === id);
  //
  // // ポストが見つかれば返却し、見つからなければエラーメッセージを返す
  // if (post) {
  //   return post;
  // } else {
  //   return { error: 'Post not found' };
  // }
})