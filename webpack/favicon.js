const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: './favicon.png', // svg works too!
        cache: true,
        prefix: 'img/favicons',
        mode: 'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
        devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default
        favicons: {
          background: '#ddd',
          theme_color: '#333',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: true,
            favicons: true,
            firefox: false,
            windows: false,
            yandex: false,
          },
        },
      }),
    ],
  };
};
