'use strict';

const Controller = require('egg').Controller;

class ModuleController extends Controller {
  async index() {
      console.log(this)
    this.ctx.body = 'hi, egg';
  }
}

module.exports = ModuleController;
