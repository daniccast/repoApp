const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({ //forzar que compile dependencias de router native
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.join(__dirname, 'node_modules/react-router-native')
    ]
  });

  return config;
};