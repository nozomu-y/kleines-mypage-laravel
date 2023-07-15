// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseURL: "http://localhost:8000",
        },
    },
    ssr: false,
    modules: ["@nuxtjs/tailwindcss"],
    css: ["@fortawesome/fontawesome-svg-core/styles.css"],
    plugins: ["@/plugins/fontawesome.ts"],
});
