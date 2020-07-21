const { DefinePlugin, ProvidePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');

const { PROJECT_ROOT, BUILD } = require('../constants');

exports.provideGlobals = (variables = {}) => ({
  plugins: [new ProvidePlugin(variables)],
});

exports.defineEnvVariables = (variables = {}) => ({
  plugins: [new DefinePlugin(variables)],
});

exports.setupBundleAnalyzer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
});

exports.setupFriendlyErrors = () => ({
  plugins: [new FriendlyErrorsWebpackPlugin()],
});

exports.setupBuildProgressIndicator = () => ({
  plugins: [new WebpackBar()],
});

exports.cleanDirectories = () => ({
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [BUILD],
      verbose: true,
    }),
  ],
});

exports.lintStyles = () => ({
  plugins: [
    new StyleLintPlugin({
      configFile: `${PROJECT_ROOT}/.stylelintrc`,
      cache: false,
      fix: false,
    }),
  ],
});
