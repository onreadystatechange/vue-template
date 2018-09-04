var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

const webpack = require('webpack')
const minimist = require('minimist')

const knownOptions = {}
const args = minimist(process.argv.slice(2), knownOptions)
const env = process.env.NODE_ENV || 'dev'

const name = process.env.npm_package_name
const version = process.env.npm_package_version
const versionCode = process.env.npm_package_versionCode
const build = process.env.npm_package_build

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'FMT_VERSION_CODE': versionCode,
      'FMT_BUILD': build,
      'FMT_ENV': `'${env}'`,
      'FMT_NAME': `'${name}'`,
      'FMT_VERSION': `'${version}'`
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 15000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          publicPath: function(url) {
            const puthUrl = process.env.NODE_ENV === 'production' ? url.replace(/static/, '..') : url
            return puthUrl
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
