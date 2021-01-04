
export default {
  mode: 'spa',
  head: {
    title: 'Proveedora Reysi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://reysi.com' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:title', property: 'og:title', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://reysi.uprevenue.mx/css/skel.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://reysi.uprevenue.mx/css/style.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://reysi.uprevenue.mx/css/style-xlarge.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=DM+Sans|Montserrat&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ],
    script: [
      {
        src:
          'https://reysi.uprevenue.mx/js/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://reysi.uprevenue.mx/js/skel.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://reysi.uprevenue.mx/js/skel-layers.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://reysi.uprevenue.mx/js/init2.js',
        type: 'text/javascript'
      }
    ]
  },
  loading: { color: '#044484' },
  css: ['element-ui/lib/theme-chalk/index.css', 'viewerjs/dist/viewer.css', '~/assets/css/animate.css'],
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/v-viewer.js',
    '~/plugins/tippy.js',
    '~/plugins/i18n.js',
    '~/plugins/axios.js',
    '~/plugins/lazy-load.js',
    '~/plugins/reysi.js',
    { src: '~/plugins/vue-agile', ssr: false },
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vcalendar', ssr: false }
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/dotenv', '@nuxtjs/moment', ['@nuxtjs/google-analytics', {
    id: 'UA-96276663-6'
  }]],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/google-gtag',
    '@bazzite/nuxt-optimized-images',
    'bootstrap-vue/nuxt',
    ['nuxt-facebook-pixel-module', {
      pista: '',
      pixelId: '2967684143281562',
      deshabilitado: false
    }],
    ['nuxt-hotjar', {
      id: 1861940,
      sv: 6
    }],
    [
      'nuxt-fontawesome',
      {
        component: 'font-awesome-icon',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  optimizedImages: {
    optimizeImages: true
  },
  moment: {
    defaultLocale: 'es',
    locales: ['es']
  },
  axios: {
    browserBaseURL: process.env.API,
    baseURL: process.env.API,
    progress: true,
    proxyHeaders: false,
    credentials: false,
    https: true
  },
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  router: {
    middleware: 'i18n'
  },
  server: {
    port: 3026
    // port: 8000, // default: 3000
    // host: '0.0.0.0' // default: localhost
  }
}
