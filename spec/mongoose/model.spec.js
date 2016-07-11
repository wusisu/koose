// console.info(module);

const Koose = require('../support/koose')
const mongoose = require('mongoose')
const isModel = require('./util.js').isModel

Koose.mongoose = mongoose

describe('mongoose:model', function() {
  beforeEach(()=>mongoose.Mongoose.call(mongoose))
  it('should successfully register room', ()=>{
    const ko = new Koose()
    ko.model('room', {
      name: String,
      manager: String
    })
    expect(isModel(ko.model('room').db)).toBe(true)
    expect(ko.model('room').db.schema.tree.manager).toBe(String)
  })
  it('should successfully register message', ()=>{
    const ko = new Koose()
    let messageSchema = new mongoose.Schema({
      created_at: {type: Date, default: Date.now},
      'content': {
        text: String
      }
    })
    let db = mongoose.model('message', messageSchema)
    ko.model({name:'message', db})
    expect(isModel(ko.model('message').db)).toBe(true)
  })
})
