// console.info(module);

const Koose = require('../support/koose')
const mongoose = require('mongoose')
const isModel = require('./util.js').isModel
const Mixed = mongoose.Schema.Types.Mixed

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
    ko.model('Room', {
      manager: {type: String}
    })
    let models = ko.modeling()
    expect(Object.keys(models).length).toBe(1)
    let Room = models.Room
    expect(isModel(Room)).toBe(true)
    let innerSchema = Room.schema.tree
    expect(innerSchema.name.type).toBe(String)
    expect(innerSchema.manager.type).toBe(String)
  })
  it('should return models of Room,Message with right schema', ()=>{
    const ko = new Koose({mongoose})
    ko.model('Room', {
      name: {type: String},
      manager: {type: String}
    })
    ko.model('Message', {
      created_at: {type: Date, default: Date.now},
      'content.text': {type: String},
      'content.attachment': {type: Mixed}
    })
    let models = ko.modeling()
    expect(Object.keys(models).length).toBe(2)
    let Room = models.Room
    expect(isModel(Room)).toBe(true)
    let innerSchema = Room.schema.tree
    expect(innerSchema.name.type).toBe(String)
    expect(innerSchema.manager.type).toBe(String)
  })
})
