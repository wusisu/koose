// console.info(module);

const Koose = require('../support/koose')
const mongoose = require('mongoose')
const isModel = require('./util.js').isModel

describe('mongoose:model', function() {
  beforeEach(()=>mongoose.Mongoose.call(mongoose))
  it('should return models of Room', ()=>{
    const ko = new Koose({mongoose})
    ko.model('Room')
    let models = ko.modeling()
    expect(Object.keys(models).length).toBe(1)
    expect(isModel(models.Room)).toBe(true)
  })
  it('should return models of Room with right schema', ()=>{
    const ko = new Koose({mongoose})
    ko.model('Room', {
      name: {type: String}
    })
    let models = ko.modeling()
    expect(Object.keys(models).length).toBe(1)
    let Room = models.Room
    expect(isModel(Room)).toBe(true)
    let innerSchema = Room.schema.tree
    expect(innerSchema.name.type).toBe(String)
  })
})
