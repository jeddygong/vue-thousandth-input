// let path = require('path');
// const NODE_ENV = process.env.NODE_ENV

// console.info(process.env.outputDir, 'node-env');

module.exports = {
  // 选项...
  publicPath: '/',

  // eslint-loader
  lintOnSave: true,

  // output
  // outputDir: ""
  // filenameHashing: false,

  pages: {
    index: {
      entry: 'src/examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // chunks: ['chunk-vendors', 'chunk-common', 'vue-thousandth-input']
    }
  },

	productionSourceMap: false,

	pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
}
