const path = require('path');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'client', 'dist', 'build'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'client', 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          }],
      },
    ],
  },
};
