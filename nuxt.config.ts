import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
   modules: [
        '@primevue/nuxt-module'
    ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    }
})
