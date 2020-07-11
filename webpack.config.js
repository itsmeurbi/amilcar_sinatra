const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/assets/javascript/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s*[a|c]ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: "css-loader?url=false"
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|gif|jpg|cur)$/i,
        loader: 'url-loader',
        include: path.join(__dirname, 'public'),
        options: { limit: 8192 }
      },
      {
        test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff2' }
      },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff' }
      },
      {
        test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loader: 'file-loader'
      }
    ]
  }
};
