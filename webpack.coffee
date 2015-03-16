module.exports =
  output:
    filename: './public/scripts/app.js'
  devtool: 'inline-source-map'
  resolve:
    extensions: ['', '.js', '.jsx']
  module:
    loaders: [
      {
        test: /\.js$|\.jsx$/
        loader: 'babel-loader'
      }
    ]