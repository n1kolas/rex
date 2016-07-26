module.exports = {
  entry: './src/routes',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: { extensions: ['', '.js', '.jsx', '.css'] },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return [
      require('precss'),
      require('postcss-cssnext'),
      require('postcss-font-magician'),
      require('lost')
    ];
  },
}
