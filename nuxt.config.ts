// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
        app: {
           head: {
                meta : [{
                        charset:"UTF-8",
                },
                {
                        name:"viewport",
                        content:"width=device-width, initial-scale=1.0"
                }],
                script : [{src:"https://unpkg.com/tippy.js@4"},{src:"https://unpkg.com/popper.js@1/dist/umd/popper.min.js"}],
                link : [{
                        href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css", 
                        rel:"stylesheet"
                }]
           }
        },
        modules: ['@nuxtjs/tailwindcss']
})
