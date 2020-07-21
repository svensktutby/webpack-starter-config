const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const { CHUNK_NAME_CSS } = require('../constants');

const loadCss = ({ sourceMap } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    sourceMap,
  },
});

const loadPostCss = ({ sourceMap, minimize } = { sourceMap: false, minimize: false }) => {
  const plugins = [
    autoprefixer({ cascade: true }),
  ];

  if (minimize) {
    // reason for broken url → https://github.com/cssnano/cssnano/issues/616
    plugins.push(cssnano({ preset: ['default', { normalizeUrl: false }] }));
  }

  return {
    loader: 'postcss-loader',
    options: {
      plugins,
      sourceMap,
    },
  };
};

const loadSass = ({ sourceMap } = { sourceMap: false }) => ({
  loader: 'sass-loader',
  options: {
    sourceMap,
    additionalData: `
      @import "./styles/base/variables.scss";
      @import "./styles/base/mixins.scss";
    `,
    sassOptions: {
      includePaths: [__dirname, 'src'],
    },
  },
});

exports.loadDevStyles = () => {
  const isSourceMap = true;

  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            loadCss({ sourceMap: isSourceMap }),
            loadPostCss({ sourceMap: isSourceMap, minimize: false }),
            loadSass({ sourceMap: isSourceMap }),
          ],
        },
      ],
    },
  };
};

exports.loadProdStyles = () => {
  const isSourceMap = false;

  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              // options: { publicPath: '../' },
            },
            loadCss({ sourceMap: isSourceMap }),
            loadPostCss({ sourceMap: isSourceMap, minimize: true }),
            loadSass({ sourceMap: isSourceMap }),
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `css/${CHUNK_NAME_CSS}`,
        chunkFilename: `css/${CHUNK_NAME_CSS}`,
      }),
    ],
  };
};
