const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  optimization:{
    minimize: true,
    minimizer: [
        new ClosurePlugin({
            mode: 'STANDARD'
        }, {
        })
    ],
    splitChunks: {
        cacheGroups: {
            "vendor-bundle": {
              test: /node_modules/,
              chunks: "all"
            }
        }
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
