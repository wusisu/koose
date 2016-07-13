const Koose = require('../support/koose')
const mongoose = require('mongoose')
const isModel = Koose.isMongooseModel

Koose.mongoose = mongoose

const {defineRoom, defineMessage} = require('./defination.js')

describe('mongoose', function() {
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
