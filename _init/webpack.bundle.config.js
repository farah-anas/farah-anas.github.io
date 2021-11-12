const path = require('path');

module.exports = {
  entry: './src/page.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'page.min.js'
  },
  node: {
    child_process: 'empty',
    module: 'empty',
    fs: 'empty'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loader: 'eslint-loader'
      }
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      // {
      //   test: /\.(gif|svg|jpg|jpeg|png)$/,
      //   loader: 'file-loader',
      //   options: {
      //     publicPath: 'bundle/img',
      //     outputPath: 'img',
      //   },
      // }
    ]
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //     filename: '../index.html',
    //     template: './dev/main.html',
    //     minify: true,
    // })
  ]
};
