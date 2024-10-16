export const posts = [
    {
        id: 1,
        title: 'Exploring JavaScript',
        content: 'This post is about JavaScript basics.',
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        author: {
            id: 1,
            email: 'testuser@example.com',
            name: 'Test User',
        },
        comments: [
            {
                id: 1,
                content: 'Great post!',
                author: 'Alice',
                createdAt: new Date(),
            },
            {
                id: 2,
                content: 'Thanks for the insights.',
                author: 'Bob',
                createdAt: new Date(),
            },
        ],
    },
    {
        id: 2,
        title: 'Understanding Async/Await',
        content: 'Async and await in JavaScript can be tricky...',
        published: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        author: {
            id: 1,
            email: 'testuser@example.com',
            name: 'Test User',
        },
        comments: [
            {
                id: 3,
                content: 'Very informative!',
                author: 'Charlie',
                createdAt: new Date(),
            },
        ],
    },
    // 他のポストも追加可能
];