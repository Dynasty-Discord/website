// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxt/ui"],
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },
    content: {
        highlight: {
            theme: "dracula"
        }
    }
})