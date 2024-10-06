const path = require('path');
const expoPak = require('../../expo-package/package.json');
const corePak = require('../../package.json');

// eslint-disable-next-line no-undef
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            // For development, we want to alias the library to the source
            [expoPak.name]: '../../expo-package/src/index',
            [corePak.name]: '../../src/index',
          },
        },
      ],
    ],
  };
};
