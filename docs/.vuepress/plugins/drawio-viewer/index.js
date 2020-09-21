const { path } = require('@vuepress/shared-utils')

module.exports = (options) => {
  return {
    define: {
      VIEWER_OPTIONS: options
    },
    chainMarkdown (config) {
      config
        .plugin('drawio-viewer')
        .use(require('./markdownItDrawioPlugin'))
    },
    enhanceAppFiles: path.resolve(__dirname, 'drawio-viewer.js')
  }
}