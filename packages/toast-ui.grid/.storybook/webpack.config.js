const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    },
  );

  config.resolve.alias = { '@t': path.resolve('types') };
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
