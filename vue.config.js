const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/darija-learner/'
    : '/',

  // Output built files to ./docs instead of ./dist
  outputDir: 'docs',

  // Transpile dependencies if needed (e.g., for IE11 support)
  transpileDependencies: ['vuetify'],

  // Enable source maps in production for debugging
  productionSourceMap: true,

  // Configure webpack-dev-server behavior
  devServer: {
    allowedHosts: "all",
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // Configure Webpack
  configureWebpack: {
    // Add any webpack configurations here
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },

  // Configure how files are processed with chainWebpack
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Darija Learner'
      return args
    })
  },

  // Configure PWA settings if you're using @vue/cli-plugin-pwa
  pwa: {
    name: 'Darija Learner',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      skipWaiting: true
    }
  },

  // Configure how CSS is processed
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },

  // Plugin configurations
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
})