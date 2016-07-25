var precss = require('precss');
var autoprefixer = require ('autoprefixer');
var fontMagician = require('postcss-font-magician');

module.exports = {
  entry: './src/app.js',
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
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer, fontMagician];
  },
}
