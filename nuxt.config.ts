// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  css: [
    '~/assets/css/main.scss' // scss main dosyası
  ],
  modules: ['nuxt-swiper', '@vueuse/motion/nuxt'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr',
      },
      title: 'Renato Yönetim - Site Yönetim Hizmetleri',
      meta: [
        // Meta Tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kaliteli yaşam sunmayı ilke edinmiş, kişiye özel hizmetler sunan, üst sınıf bir tesis yönetim şirketiyiz. Kişiye özel hizmetlerin öneminin bilincinde, güvenlik öncelikli ve memnuniyet odaklı yaklaşımlarımız ile sektörde öncü konumdayız.' },
        { name: 'keywords', content: 'ryonetim, renato, renatoyonetim, renatoyönetim, site, siteyönetimi, siteyonetim' },
        { name: 'distribution', content: 'global' },
        { name: 'copyright', content: 'Copyright © 2024 Renato Yönetim tescillenmiş markadır, Tüm Hakları Saklıdır.' },
        { name: 'content-language', content: 'tr' },
        { name: 'author', content: 'ismailKeskin - metoyazilim - metoyazilim.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Renato Yönetim' },

        // For Robots
        { name: 'robots', content: 'index,follow' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.ryonetim.com/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
          integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer'
        },
        { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.min.css' },
      ],
      script: [
        { src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" },
        { src: 'https://unpkg.com/swiper/swiper-bundle.min.js', body: true },
      ]
    }
  },
})
