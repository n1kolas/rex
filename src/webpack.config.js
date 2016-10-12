var bourbon = require('node-bourbon').includePaths;
var neat = require('node-neat').includePaths[1];
var refills = require('node-refills').includePath;

module.exports = {
  entry: './src/client/routes/routes.js',
  output: {
    filename: './public/js/bundle.js'
  },
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
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: { 
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  sassLoader: {
    includePaths: [bourbon, neat, refills]
  }
}
