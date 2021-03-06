export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'google-login',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      google: {
        clientId: process.env.GOOGLE_SOCIAL_LOGIN_CLIENT_ID,
        codeChallengeMethod: "",
        responseType: 'code',
        endpoints: {
          token: `${process.env.API_SERVER_URL}/social-login/google/`,
          userInfo: `${process.env.API_SERVER_URL}/auth/user/`,
        },
      },
    },
    cookie: {
      options: {
        secure: process.env.NODE_ENV === "production", // Enable in Prod only!
        sameSite: 'lax',
      }
    },
    localStorage: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
