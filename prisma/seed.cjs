// prisma/seed.js

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    // ユーザーを作成
    const user = await prisma.user.create({
        data: {
            email: 'testuser@example.com',
            name: 'Test User',
            password: 'securepassword',
        },
    })

    // 複数の投稿を作成
    const postsData = [
        // { title: 'My First Blog Post', content: 'This is the content of my first blog post.', published: true },
        { title: 'Exploring JavaScript', content: 'This post is about JavaScript basics.', published: true },
        { title: 'Understanding Async/Await', content: 'Async and await in JavaScript can be tricky...', published: true },
        { title: 'Frontend vs Backend', content: 'What is the difference between frontend and backend development?', published: true },
        { title: 'CSS Tips and Tricks', content: 'Some handy tips for better CSS development.', published: true },
        { title: 'Nuxt.js for Beginners', content: 'Nuxt.js is a great framework for building Vue apps.', published: true },
        { title: 'Deploying with Vercel', content: 'How to deploy your app with Vercel.', published: true },
        { title: 'What is Prisma?', content: 'A guide to using Prisma with Node.js and databases.', published: true },
        { title: 'Using Tailwind CSS', content: 'Tailwind CSS is a utility-first CSS framework.', published: true },
        { title: 'Debugging in VSCode', content: 'How to effectively debug your Node.js apps in VSCode.', published: true }
    ];

    for (const postData of postsData) {
        const post = await prisma.post.create({
            data: {
                ...postData,
                author: {
                    // connect: { id: user.id },
                    connect: { id: 1 },// ユーザーに紐付け
                },
            },
        })
        console.log('Created post:', post.title)
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
