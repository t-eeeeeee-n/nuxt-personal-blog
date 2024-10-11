<template>
  <div v-if="post" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <img :src="post.image" :alt="post.title" class="w-full h-64 object-cover" loading="lazy">
    <div class="p-6">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">{{ post.title }}</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">{{ post.content }}</p>
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Comments</h3>
        <ul v-if="post.comments.length" class="space-y-4">
          <li v-for="comment in post.comments" :key="comment.id" class="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <p class="text-gray-800 dark:text-gray-200">{{ comment.content }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">By {{ comment.author }} on {{ new Date(comment.createdAt).toLocaleDateString() }}</p>
          </li>
        </ul>
        <p v-else class="text-gray-500 dark:text-gray-400">No comments yet.</p>
      </div>
      <form @submit.prevent="addComment" class="mb-6">
        <textarea v-model="newComment.content" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" placeholder="Add a comment..."></textarea>
        <input v-model="newComment.author" class="w-full mt-2 p-2 border rounded dark:bg-gray-700 dark:text-white" placeholder="Your name">
        <button type="submit" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Comment</button>
      </form>
      <div class="flex space-x-4 mb-6">
        <a :href="'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(post.title)" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500">
          Share on Twitter
        </a>
        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl)" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-700">
          Share on Facebook
        </a>
      </div>
      <NuxtLink to="/" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">← Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useFetch(`/api/posts/${route.params.id}`)

const newComment = ref({ content: '', author: '' })

const currentUrl = computed(() => window.location.href)

const addComment = async () => {
  if (newComment.value.content && newComment.value.author) {
    await $fetch('/api/comments', {
      method: 'POST',
      body: {
        content: newComment.value.content,
        author: newComment.value.author,
        postId: post.value.id,
      },
    })
    newComment.value = { content: '', author: '' }
    await refreshNuxtData()
  }
}

useHead({
  title: computed(() => post.value ? `${post.value.title} | My Personal Blog` : 'Post Not Found'),
  meta: [
    { name: 'description', content: computed(() => post.value ? post.value.content.substring(0, 160) : 'Post not found') },
    { property: 'og:title', content: computed(() => post.value ? post.value.title : 'Post Not Found') },
    { property: 'og:description', content: computed(() => post.value ? post.value.content.substring(0, 160) : 'Post not found') },
    { property: 'og:image', content: computed(() => post.value ? post.value.image : '') },
    { property: 'og:url', content: computed(() => currentUrl.value) },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]
})
</script>