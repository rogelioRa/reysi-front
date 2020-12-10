
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
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      },
      { src: 'https://www.googletagmanager.com/gtag/js?id=AW-616006218' },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        type: 'text/javascript'
      }
    ]
  },
  loading: { color: '#044484' },
  css: [
    '~/assets/css/skel.css',
    '~/assets/css/style.css',
    '~/assets/css/style-xlarge.css'
  ],
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/v-viewer.js',
    '~/plugins/tippy.js',
    '~/plugins/i18n.js',
    '~/plugins/axios.js',
    '~/plugins/lazy-load.js',
    { src: '~/plugins/jquery.js', ssr: false },
    { src: '~/plugins/stripe.js', ssr: false },
    { src: '~/plugins/tidio.js', ssr: false },
    { src: '~/plugins/paypal.js', ssr: false },
    { src: '~/plugins/vue-agile', ssr: false },
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-owl-carousel.js', ssr: false },
    { src: '~/plugins/vue-phone-input.js', ssr: false },
    { src: '~/plugins/vcalendar', ssr: false }
  ],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/dotenv', '@nuxtjs/moment', ['@nuxtjs/google-analytics', {
    id: 'UA-96276663-6'
  }]],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/device',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/google-gtag',
    '@bazzite/nuxt-optimized-images',
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
  'google-gtag': {
    id: 'AW-616006218'
  },
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
    // port: 3023
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}