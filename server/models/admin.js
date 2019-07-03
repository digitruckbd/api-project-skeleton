const mongoose = require('mongoose');
const AdminSchema = require('./../schema/admin');

const mongooseAdminSchema = mongoose.Schema(AdminSchema);

module.exports = mongoose.model('Admin', mongooseAdminSchema);
