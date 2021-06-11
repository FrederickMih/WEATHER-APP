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
      {
        test: /\.html$/i,
        exclude: [/node_modules/, require.resolve('./src/template.html')],
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
