module.exports = (api) => {
  api.cache.never();

  const plugins = [
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: false,
          spec: true,
          loose: false,
          modules: false, // default = commonjs
          corejs: 2,
          useBuiltIns: 'usage',
        },
      ],
    ],
    plugins,
  };
};
