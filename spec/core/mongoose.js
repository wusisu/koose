const Koose = require('../support/koose')
const mongoose = require('mongoose')
const isModel = Koose.isMongooseModel

Koose.mongoose = mongoose

const defineRoom = exports.defineRoom = ko => {
  if (!ko) ko = new Koose()
  ko.model('room', {
    name: String,
    manager: String
  })
  return ko
}
const defineMessage = exports.defineMessage = ko => {
  if(!ko) ko = new Koose()
  let messageSchema = new mongoose.Schema({
    created_at: {type: Date, default: Date.now},
    'content': {
      text: String
    }
  })
  let db = mongoose.model('message', messageSchema)
  ko.model({name:'message', db})
  return ko
}

describe('mongoose:model', function() {
  beforeEach(()=>mongoose.Mongoose.call(mongoose))
  it('should successfully register room', ()=>{
    const ko = defineRoom()
    expect(isModel(ko.model('room').db)).toBe(true)
    expect(ko.model('room').db.schema.tree.manager).toBe(String)
  })
  it('should successfully register message', ()=>{
    const ko = defineMessage()
    expect(isModel(ko.model('message').db)).toBe(true)
  })
})
