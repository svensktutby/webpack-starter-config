const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
  return {
    plugins: [
      new CopyPlugin([
        {
          // from: 'assets/audio/*',
          // to: './',
          // to: '[1]-[2].[hash].[ext]',
          // test: /([^/]+)\/(.+)\.mp3$/,
        },
      ]),
    ],
  };
};
