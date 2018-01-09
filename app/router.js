'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/map/country', controller.baiduMap.country);
  router.get('/map/province', controller.baiduMap.province);
};
