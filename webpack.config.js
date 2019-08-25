const path = require('path')

module.exports = {
  module: {
    loaders: [{ exclude: ['node_modules'], loader: 'babel', test: /\.js?$/ }]
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
    alias: {
      '@': path.resolve('./tests')
    },
    extensions: ['.json', '.js', '.css']
  }
}
