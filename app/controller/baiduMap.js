'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async data() {
    const data = 'hello JasonFF';
    await this.ctx.render('baiduMap/baiduMap.html', data);
  }
}

module.exports = NewsController;
