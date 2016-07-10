const {isObject, extend} = require('./util.js')

const Koose = class Koose {
  constructor({mongoose}) {
    this.mongoose = mongoose
    this._schemas = {}
    this.models = {}
  }
  model(name, schema){
    if(!this._schemas[name])
      this._schemas[name] = {}
    if(isObject(schema))
      extend(this._schemas[name], schema)
  }
  modeling(){
    let keys = Object.keys(this._schemas)
    let _schemas = this._schemas
    keys.forEach(name=>{
      let schema = new this.mongoose.Schema(_schemas[name])
      this.models[name] = this.mongoose.model(name, schema)
    })
    return this.models
  }
}
module.exports = Koose
