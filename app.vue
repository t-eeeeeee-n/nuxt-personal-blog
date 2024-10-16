<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-800 dark:text-white">My Blog</NuxtLink>
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
      <div class="container mx-auto px-6 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Left Section -->
          <div class="mb-6 md:mb-0 text-center md:text-left">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">My Personal Blog</h3>
            <p class="text-gray-600 dark:text-gray-400">Sharing knowledge and experiences</p>
          </div>
          <!-- Right Section -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <!-- Navigation Links -->
            <div class="text-center">
              <NuxtLink to="/" class="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 mr-4">Home</NuxtLink>
              <NuxtLink to="/about" class="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">About</NuxtLink>
            </div>
            <!-- Social Links -->
            <div class="flex justify-center space-x-4">
              <a href="https://github.com/t-eeeeeee-n" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" alt="GitHub" />
              </a>
              <a href="https://twitter.com/dev_teeeen" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" class="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 dark:border-gray-700" />
        <div class="flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; {{ new Date().getFullYear() }} My Personal Blog</p>
          <p>Designed by Tensho Arai</p>
        </div>
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
@import '/assets/css/main.css';
</style>