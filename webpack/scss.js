module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader?sourceMap',
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
            'import-glob-loader',
          ],
        },
      ],
    },
  };
};
