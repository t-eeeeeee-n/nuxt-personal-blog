<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">Latest Posts</h2>
    <div class="mb-6">
      <input v-model="searchTerm" @input="searchPosts" type="text" placeholder="Search posts..." class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="post in posts" :key="post.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <img src="/profile-picture.jpg" :alt="post.title" class="w-full h-48 object-cover" loading="lazy">
        <div class="p-4">
          <h3 class="text-xl text-gray-800 dark:text-white mb-2">{{ post.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ post.content.substring(0, 100) }}...</p>
          <NuxtLink :to="`/post/${post.id}`" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">Read more</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDebounceFn } from '@vueuse/core'

const { data: posts, refresh } = await useFetch('/api/posts')
const searchTerm = ref('')

const searchPosts = useDebounceFn(async () => {
  const { data } = await useFetch(`/api/search?q=${searchTerm.value}`)
  posts.value = data.value
}, 300)

onMounted(() => {
  refresh()
})
</script>