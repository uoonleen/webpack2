// below path depends on node.js and it takes the path of current directory
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    /* path.resolve() -> make this code independent from OS
       __dirname : current directory
     'build' : output folder name
    */
    filename: 'bundle.js',
    publicPath: 'build/' // this is the path that 'url-loader' notice and be appointed for some image
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // babel will get only *.js files
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        // use: ['style-loader', 'css-loader'], // the loader is loaded by reverse border
        /*
          css-loader : this makes CSS codes to String and put it in JS
          style-loader : this takes JS codes from css-loader and make it style tag, put it into HTML
        */
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          }, // check the image size and put bundle.js or build directory by size
          'image-webpack-loader' // resize and compress images
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
/* -> whenever webpack runs, save the file, call it bundle.js inside of a path of our project
    directory in a file called build
*/
module.exports = config;
