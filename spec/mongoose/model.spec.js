// console.info(module);

const Koose = require('../support/koose')
const mongoose = require('mongoose')

describe('mongoose:model', function() {
  it('should return a dict of mongoose models', ()=>{
    const ko = new Koose()
    ko.model('room')
    let models = ko.models
    let keys = Object.keys(models)
    expect(keys.length).toBeGreaterThan(0)
    keys.forEach(k=>expect(models[k].__proto__ === mongoose.Model).toBe(true))
  })
  it('should return a empty object', ()=>{
    const ko = new Koose()
    let models = ko.models
    let keys = Object.keys(models)
    expect(keys.length).toBe(0)
  })
})
