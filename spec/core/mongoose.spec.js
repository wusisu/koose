const Koose = require('../support/koose')
const mongoose = require('mongoose')

const {defineRoom, defineMessage} = require('./defination.js')
const isModel = Koose.isMongooseModel

describe('mongoose', function() {
  beforeEach(()=>mongoose.Mongoose.call(mongoose))
  it('should successfully register room', ()=>{
    const ko = defineRoom()
    expect(isModel(ko.model('room')._db)).toBe(true)
    expect(ko.model('room')._db.schema.tree.manager).toBe(String)
  })
  it('should successfully register message', ()=>{
    const ko = defineMessage()
    expect(isModel(ko.model('message')._db)).toBe(true)
  })
})
