'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async country() {
    const data = 'hello JasonFF';
    await this.ctx.render('baiduMap/country.html', data);
  }
  async province() {
    await this.ctx.render('baiduMap/province.html')
  }
}

module.exports = NewsController;
