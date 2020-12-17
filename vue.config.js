module.exports = {
  configureWebpack: {
     resolve: {
        // 路径别名
        alias: {
           'assets': 'src/assets',
           'common': 'src/common',
           'components': 'src/components',
           'network': 'src/network',
           'views': 'src/views',
        }
     }
  }
}
