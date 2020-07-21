const { loadJavaScript } = require('./javascript');
const { loadDevStyles, loadProdStyles } = require('./styles');
const { optimizeBuild, optimizeImages } = require('./optimization');
const {
  setupTemplate,
  copyAssets,
  loadImages,
  loadFonts,
  loadSvgSprite
} = require('./assets');
const {
  defineEnvVariables,
  setupFriendlyErrors,
  setupBuildProgressIndicator,
  cleanDirectories,
  setupBundleAnalyzer,
  provideGlobals,
  lintStyles,
} = require('./utils');

module.exports = {
  loadJavaScript,
  setupTemplate,
  copyAssets,
  loadDevStyles,
  loadProdStyles,
  loadImages,
  loadFonts,
  optimizeBuild,
  optimizeImages,
  defineEnvVariables,
  setupFriendlyErrors,
  setupBuildProgressIndicator,
  cleanDirectories,
  setupBundleAnalyzer,
  provideGlobals,
  lintStyles,
  loadSvgSprite,
};
