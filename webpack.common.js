const HtmlWebpackPlugin = require('html-webpack-plugin');// eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader' /* 3. inject styles into DOM */,

          'css-loader' /* 2. turns css into commonjs */,

          'sass-loader',
        ] /* 1. turns sass into css */,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
