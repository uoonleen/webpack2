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
  }
};
/* -> whenever webpack runs, save the file, call it bundle.js inside of a path of our project
    directory in a file called build
*/
module.exports = config;
