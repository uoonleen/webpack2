// below path depends on node.js and it takes the path of current directory
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    /* path.resolve() -> make this code independent from OS
       __dirname : current directory
     'build' : output folder name
    */
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // babel will get only *.js files
      },
      {
        use: ['style-loader', 'css-loader'], // the loader is loaded by reverse border
        /*
          css-loader : this makes CSS codes to String and put it in JS
          style-loader : this takes JS codes from css-loader and make it style tag, put it into HTML
        */
        test: /\.css$/
      }
    ]
  }
};
/* -> whenever webpack runs, save the file, call it bundle.js inside of a path of our project
    directory in a file called build
*/
module.exports = config;
