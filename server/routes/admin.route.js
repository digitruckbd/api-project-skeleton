const router = require('./../configs/express').router;
const adminController = require('./../controller/admin.controller');

router.get('/admins', adminController.get);
router.post('/admins', adminController.create);

module.exports = router;
