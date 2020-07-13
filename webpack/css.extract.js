const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '../' },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: [
                      'last 3 version',
                      '> 1%',
                      'ie 9',
                    ],
                    cascade: true,
                  }),
                ],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                // prependData: `
                //   @import "./styles/base/_variables.scss";
                //   @import "./styles/base/_mixins.scss";
                // `,
                sassOptions: {
                  includePaths: [__dirname, 'src'],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './css/[name].[hash:8].css',
      }),
    ],
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: false,
          },
        }),
      ],
    },
  };
};
