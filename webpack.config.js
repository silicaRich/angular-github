var path = require('path');

module.exports = {
    // where file is developed
    entry: './src/app.js',
    output: {
        filename: 'bundle.js', // where code is output
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
              // so that webpack knows to load css
              test: /\.css$/,
              use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
              ]
          },
          {
              // so that webpack can understand weird file types
              test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              loader: 'url-loader?limit=100000'
          }
        ]
    }
};