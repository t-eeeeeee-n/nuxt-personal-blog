<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
    <img src="/profile-picture.jpg" alt="Your Name" class="w-64 h-64 rounded-full mx-auto mb-6 object-cover" loading="lazy">
    <p class="text-gray-600 dark:text-gray-300 mb-6">
      Hello! I'm [Your Name], a passionate [Your Profession/Interest] based in [Your Location]. 
      I have [X] years of experience in [Your Field], specializing in [Your Specialties].
    </p>
    <p class="text-gray-600 dark:text-gray-300 mb-6">
      When I'm not [Working/Coding/etc.], you can find me [Your Hobbies/Interests]. 
      I'm always eager to learn new technologies and share my knowledge with others.
    </p>
    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills</h3>
    <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
      <li>Skill 1</li>
      <li>Skill 2</li>
      <li>Skill 3</li>
      <li>Skill 4</li>
    </ul>
    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact</h3>
    <p class="text-gray-600 dark:text-gray-300">
      Feel free to reach out to me at [Your Email] or connect with me on 
      <a href="[Your LinkedIn Profile]" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">LinkedIn</a>.
    </p>
  </div>
</template>

<script setup>
useHead({
  title: 'About Me | My Personal Blog',
  meta: [
    { name: 'description', content: 'Learn more about [Your Name], a [Your Profession/Interest] based in [Your Location].' },
    { property: 'og:title', content: 'About Me | My Personal Blog' },
    { property: 'og:description', content: 'Learn more about [Your Name], a [Your Profession/Interest] based in [Your Location].' },
    { property: 'og:image', content: '/profile-picture.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]
})
</script>