const mongoose = require('mongoose')

class Koose {
  constructor() {
    this.models = {}

  }
  model(name){
    let schema = new mongoose.Schema({
      obj: {}
    })
    this.models[name] = mongoose.model(name, schema)
  }
}
module.exports = Koose
