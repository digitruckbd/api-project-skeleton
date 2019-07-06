const BaseService = require('./../service/base.service');

class AdminService extends BaseService {
  constructor() {
    super('admin');
  }
}

module.exports = AdminService;
