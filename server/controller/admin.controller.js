const AdminServiceClass = require('./../service/admin.service');

module.exports = {
  get: (req, res, next) => {
    const adminService = new AdminServiceClass('admin');
    adminService
      .get({/*parameter to get the required data*/})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      })
  },

  create: (req, res, next) => {
    const adminService = new AdminServiceClass('admin');
    adminService
      .create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      })
  }
};
