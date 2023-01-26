const path = require("path")
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        'assets': path.join(__dirname, 'src/assets'),
        '~buefy': path.join(__dirname, 'src/buefy'),
        'buefy': path.join(__dirname, 'src/buefy'),
        'components': path.join(__dirname, 'src/components'),
        'data': path.join(__dirname, 'src/data'),
        'docs': path.join(__dirname, 'src/docs'),
        'pages': path.join(__dirname, 'src/pages'),
        'router': path.join(__dirname, 'src/router'),
        'templates': path.join(__dirname, 'src/templates'),
      }
    }
  }
})
