<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">My Blog</h1>
        <div>
          <NuxtLink to="/" class="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 mr-4">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">About</NuxtLink>
        </div>
      </nav>
    </header>
    <main class="container mx-auto px-6 py-8">
      <Transition name="fade" mode="out-in">
        <NuxtPage />
      </Transition>
    </main>
    <footer class="bg-white dark:bg-gray-800 shadow mt-8">
      <div class="container mx-auto px-6 py-3 text-center text-gray-600 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} My Personal Blog
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'My Personal Blog',
  meta: [
    { name: 'description', content: 'A modern personal blog built with Nuxt 3' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
@import '~/assets/css/main.css';
</style>