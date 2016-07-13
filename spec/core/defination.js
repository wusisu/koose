const Koose = require('../support/koose')
const mongoose = require('mongoose')

exports.defineRoom = ko => {
  if (!ko) ko = new Koose()
  ko.model('room', {
    name: String,
    manager: String
  })
  return ko
}
exports.defineMessage = ko => {
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
