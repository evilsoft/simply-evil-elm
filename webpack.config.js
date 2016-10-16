const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const LessPluginAutoPrefix = require('less-plugin-autoprefix')

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
    extensions: [ '', '.js', '.elm', '.less' ]
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
  },

  lessLoader: {
    lessPlugins: [
      new LessPluginAutoPrefix({ browsers: [ 'last 2 versions' ] })
    ]
  }
}

if(target === 'bundle') {
  module.exports = merge(common, {
    watch: true,
    debug: true,
    devtool: 'inline-source-map',
    output: { path: paths.dev },
    module: {
      loaders: [
        { test: /.less$/, include: paths.src, loader: 'style!css!less' }
      ]
    }
  })
}

if(target === 'build') {
  module.exports = merge(common, {
    output: { path: paths.dist },

    plugins: [
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ],

    module: {
      loaders: [
        { test: /.less$/, include: paths.src, loader: ExtractTextPlugin.extract("css!less") }
      ]
    }
  })
}
