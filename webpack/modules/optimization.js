const ImageminPlugin = require('imagemin-webpack');
const TerserPlugin = require('terser-webpack-plugin');

exports.optimizeBuild = () => ({
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: true,
  },
});

exports.optimizeImages = () => ({
  plugins: [
    new ImageminPlugin({
      cache: true,
      exclude: /(\/icons)/,
      imageminOptions: {
        plugins: [
          ['mozjpeg', {
            progressive: true,
            quality: 85,
          }],
          ['pngquant', {
            quality: [0.7, 0.9],
            speed: 2,
          }],
          ['svgo', {
            plugins: [
              { removeViewBox: false },
              { cleanupIDs: false },
              { removeAttrs: { attrs: ['version'] } },
              { removeUselessStrokeAndFill: false },
              { convertPathData: false },
            ],
          }],
        ],
      },
    }),
  ],
});
