const prodMode = process.env.NODE_ENV == 'production';
module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[path][name].[hash:8].[ext]',
                esModule: false,
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  enabled: prodMode,
                  progressive: true,
                  quality: 85,
                },
                pngquant: {
                  enabled: prodMode,
                  quality: [0.7, 0.9],
                  speed: 2,
                },
                gifsicle: {
                  enabled: prodMode,
                  interlaced: false,
                },
                svgo: {
                  enabled: prodMode,
                  plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false },
                    { removeAttrs: { attrs: ['version'] } },
                    { removeUselessStrokeAndFill: false },
                    { convertPathData: false },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  };
};
