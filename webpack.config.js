let path = require( 'path' );
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
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin( [
      {
        from: 'src/**/*.css', 
        to: '', 
        transformPath: ( targetPath, absolutePath ) => { return targetPath.replace( 'src/', '' ); } 
      },
      {
        from: 'src/**/*.html', 
        to: '', 
        transformPath: ( targetPath, absolutePath ) => { return targetPath.replace( 'src/', '' ); } 
      }
    ] )
  ]
};
