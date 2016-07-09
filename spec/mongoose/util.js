const mongoose = require('mongoose')
exports.isModel = ins => ins.__proto__ === mongoose.Model
