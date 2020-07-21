const { merge } = require('webpack-merge');

const {
  loadDevStyles,
  setupFriendlyErrors,
} = require('../modules');

const getCommonConfig = require('./webpack.common');

module.exports = () => merge(
  getCommonConfig(),
  setupFriendlyErrors(),
  loadDevStyles(),
);
