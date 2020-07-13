module.exports = () => {
  return {
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }],
    },
  };
};
