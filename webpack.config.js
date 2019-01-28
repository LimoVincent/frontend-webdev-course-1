let path = require( 'path' );
let HtmlWebpackPlugin = require( 'html-webpack-plugin' );
let CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {
  entry: {
    app: [ './src/main.js' ]
  },
  output: {
    path: path.resolve( __dirname, 'dist' ),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
      inject: false,
      template: 'src/index.html'
    } ),
    new CopyWebpackPlugin( [
      { from: 'src/style.css', to: '' }
    ] )
  ]
};
