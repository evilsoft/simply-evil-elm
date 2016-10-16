const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

const target = process.env.npm_lifecycle_event

const paths = {
  dist: path.join(__dirname, 'dist'),
  dev: path.join(__dirname, 'dev'),
  src: path.join(__dirname, 'src')
}

const common = {
  context: paths.src,

  entry: './js',

  output: {
    filename: 'app.js',
  },

  resolve: {
    extensions: [ '', '.js', '.elm' ]
  },

  module: {
    loaders: [
      {
        test: /\.elm$/,
        exclude: [
          /elm-stuff/,
          /node_modules/
        ],
        loader: 'elm-webpack'
      },
    ],

    noParse: /\.elm$/
  }
}

if(target === 'bundle') {
  module.exports = merge(common, {
    watch:    true,
    debug:    true,
    devtool:  'inline-source-map',
    output:   { path: paths.dev }
  })
}

if(target === 'build') {
  module.exports = merge(common, {
    output: { path: paths.dist },
  })
}
