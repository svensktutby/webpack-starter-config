module.exports = () => {
  return {
    devServer: {
      port: 9000,
      stats: 'errors-only',
      overlay: true,
    },
  };
};
