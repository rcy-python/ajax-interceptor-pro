const devConfig = require('./webpack.config.dev.js');
const prodConfig = require('./webpack.config.prod.js');

module.exports = () => {
  const env = process.env.NODE_ENV || 'development';
  console.log(env,'envvvvv=====')
  if (env === 'development') {
    return devConfig;
  }
  return prodConfig;
};