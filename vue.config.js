const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  runtimeCompiler: true,
  parallel: false,
  outputDir: 'docs'
})
