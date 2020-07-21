const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const {
  STATIC,
  CHUNK_NAME_ASSET,
} = require('../constants');

exports.setupTemplate = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      template: `${STATIC}/index.html`,
      favicon: `${STATIC}/favicon.ico`,
    }),
  ],
});

exports.copyAssets = () => ({
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/css/preloader.css',
          to: './css/[name].[ext]',
        },
      ],
    }),
  ],
});

exports.loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /(\/icons)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `images/${CHUNK_NAME_ASSET}`,
            },
          },
        ],
      },
    ],
  },
});

exports.loadSvgSprite = () => ({
  module: {
    rules: [
      {
        test: /assets\/icons\/.*\.svg$/i,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'images/sprite-svg.[hash:5].svg',
              symbolId: 'sprite-[name]',
              runtimeCompat: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
});

exports.loadFonts = () => ({
  module: {
    rules: [
      {
        // test: /\.(otf|eot|svg|ttf|woff|woff2)$/i,
        test: /\.(woff2?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `fonts/${CHUNK_NAME_ASSET}`,
              // esModule: false,
            },
          },
        ],
      },
    ],
  },
});
