'use strict';

var path = require('path')

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515049094293_4468';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.html': 'nunjucks',
    },
  };

  config.static = {
      prefix: '/app/',
      dir: [path.join(appInfo.baseDir, './app/public'), path.join(appInfo.baseDir, './app/web')]
  }
  return config;
};
