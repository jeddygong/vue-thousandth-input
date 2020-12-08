module.exports = {
  // 选项...
  publicPath: '/',

  // eslint-loader
  lintOnSave: true,

  pages: {
    index: {
      entry: 'src/examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

	productionSourceMap: false,

	pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
}
