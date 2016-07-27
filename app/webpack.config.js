module.exports = {
  entry: './app/client/routes/routes.js',
  output: {
    filename: './public/js/bundle.js'
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
