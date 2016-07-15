const mongoose = require('mongoose')
const {defineRoom, defineRoomAccess} = require('./defination.js')

describe('access', function() {
  beforeEach(()=>mongoose.Mongoose.call(mongoose))
  it('should could add access', ()=>{
    const ko = defineRoomAccess(defineRoom())
    expect(ko.model('room')._access.length).toBe(1)
  })
})
