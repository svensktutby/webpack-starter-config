const transpileJavaScript = () => ({
  loader: 'babel-loader',
  options: {
    compact: false,
  },
});

const lintJavaScript = () => ({
  loader: 'eslint-loader',
  options: {
    cache: false,
    fix: false,
  },
});

exports.loadJavaScript = ({ lint } = { lint: false }) => {
  const loaders = [
    transpileJavaScript(),
  ];

  if (lint) {
    loaders.push(lintJavaScript());
  }

  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: loaders,
        },
      ],
    },
  };
};
