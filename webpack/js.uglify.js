const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
  return {
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
        }),
      ],
    },
  };
};
