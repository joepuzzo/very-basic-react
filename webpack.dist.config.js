const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, './index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

