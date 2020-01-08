const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      merge = require('webpack-merge'),
      pug = require('./webpack/pug'),
      devserver = require('./webpack/devserver'),
      scss = require('./webpack/scss'),
      css = require('./webpack/css'),
      extractCSS = require('./webpack/css.extract'),
      uglifyJS = require('./webpack/js.uglify'),
      images = require('./webpack/images'),
      spriteSVG = require('./webpack/svg.sprite'),
      favicon = require('./webpack/favicon'),
      fonts = require('./webpack/fonts'),
      lintJS = require('./webpack/js.lint'),
      lintCSS = require('./webpack/scss.lint'),
      babel = require('./webpack/babel'),
      clean = require('./webpack/clean');

const NODE_ENV = process.env.NODE_ENV || 'development';

const PATHS = {
  src: path.resolve(__dirname, './src/'),
  build: path.resolve(__dirname, './build/'),
};

const webpackConfig = merge(
  {
    mode: NODE_ENV,
    devtool: NODE_ENV == 'development' ? 'eval-sourcemap' : 'source-map',
    context: PATHS.src,
    entry: {}, // will add below through forEach
    output: {
      path: PATHS.build,
      filename: './js/[name].js',
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            minChunks: 2,
            chunks: 'all',
            name: 'common',
            priority: 10,
            enforce: true,
          },
        },
      },
    },
  },
  pug(),
  images(),
  spriteSVG(),
  fonts(),
  lintJS(),
  lintCSS(),
  babel(),
);

['index', 'about'].forEach(file => {
  webpackConfig.entry[file] = `./pages/${file}/${file}.js`;

  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${file}.html`,
      template: `./pages/${file}/${file}.pug`,
      chunks: [file.replace(/-(\w)/g, (match, c) => c.toUpperCase()), 'common'],
    }),
  );
});

module.exports = () => {
  if (NODE_ENV == 'production') {
    return merge([webpackConfig, clean(), extractCSS(), uglifyJS(), favicon()]);
  }

  return merge([webpackConfig, devserver(), scss(), css()]);
};
