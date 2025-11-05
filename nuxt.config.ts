export default defineNuxtConfig({
    compatibilityDate: '2025-11-01',
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    runtimeConfig: {
        public: {}
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
})
