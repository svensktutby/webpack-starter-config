const { merge } = require('webpack-merge');

const {
  loadJavaScript,
  setupTemplate,
  copyAssets,
  loadImages,
  loadFonts,
  defineEnvVariables,
  provideGlobals,
  lintStyles,
  loadSvgSprite,
} = require('../modules');

const {
  PROJECT_ROOT,
  SOURCE,
  BUILD,
  CHUNK_NAME_JS,
} = require('../constants');

module.exports = () => {
  const { NODE_ENV } = process.env;
  const IS_DEVELOPMENT = NODE_ENV === 'development';

  const environment = require(`${PROJECT_ROOT}/environment.js`);

  const envVariables = {
    __ENV__: JSON.stringify(NODE_ENV),
    __DEV__: NODE_ENV === 'development',
    __PROD__: NODE_ENV === 'production',
    __API_URI__: JSON.stringify(environment.apiKey),
  };

  const globalVariables = {
    $: 'jquery',
    jQuery: 'jquery',
  };

  return merge(
    {
      mode: NODE_ENV,
      devtool: IS_DEVELOPMENT ? 'eval-cheap-module-source-map' : false,
      entry: SOURCE,
      output: {
        path: BUILD,
        filename: IS_DEVELOPMENT
          ? '[name].js'
          : `js/entry~${CHUNK_NAME_JS}`,
        chunkFilename: IS_DEVELOPMENT
          ? '[name].js'
          : `js/chunk~${CHUNK_NAME_JS}`,
        hashDigestLength: 5,
        publicPath: '/',
      },
    },
    defineEnvVariables(envVariables),
    provideGlobals(globalVariables),
    setupTemplate(),
    loadJavaScript({ lint: false }),
    loadFonts(),
    loadImages(),
    loadSvgSprite(),
    // copyAssets(),
    lintStyles(),
  );
};
