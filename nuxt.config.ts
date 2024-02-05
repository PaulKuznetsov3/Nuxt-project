// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "assets/styles/main.module.scss", 
  ],
  modules: [
    // Using package name (recommended usage)
    '@nuxtjs/modules',
    "nuxt-security",
  ],
})
