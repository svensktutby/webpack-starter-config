const { merge } = require('webpack-merge');

const {
  loadProdStyles,
  optimizeBuild,
  setupBundleAnalyzer,
  optimizeImages,
  setupBuildProgressIndicator,
  cleanDirectories,
} = require('../modules');

const getCommonConfig = require('./webpack.common');

module.exports = () => merge(
  getCommonConfig(),
  setupBuildProgressIndicator(),
  cleanDirectories(),
  loadProdStyles(),
  optimizeBuild(),
  // optimizeImages(), // TODO: resolve SVG-sprite conflict
  // setupBundleAnalyzer(),
);
