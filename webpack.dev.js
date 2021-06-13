const path = require('path');
const { merge } = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ],
      },
    ],
  },
});
