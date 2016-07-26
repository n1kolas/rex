module.exports = {
  entry: './app/client/routes.js',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
