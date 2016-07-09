// console.info(module);

const Koose = require('../index.js')
const mongoose = require('mongoose')

const ko = new Koose()
ko.model('room')
let models = ko.models
let keys = Object.keys(models)
// console.info(keys[0]);
// console.info(models[keys[0]]);
// console.info(mongoose.Model);
let a= models[keys[0]]
let b = mongoose.Model
// console.info(a.__proto__ === b);
// console.info(a.__proto__);
// console.info(b);
a == b
