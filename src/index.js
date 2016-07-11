const {isObject, extend} = require('./util.js')

const Koose = class Koose {
  constructor() {
    this._models = {}
  }
  model(name, db, access, event){
    if(isObject(name)){
      let obj = name
      name = obj.name
      db = obj.db
      access = obj.access
      event = obj.event
    }
    if(!this._models[name]) this._models[name] = {name, event:{}, target:{}}
    let target = this._models[name]
    if(db) {
      if (!Koose.isMongooseModel(db))
        db = Koose.mongoose.model(name,
          new Koose.mongoose.Schema(db)
        )
      target.db = db
    }
    if(event) extend(target.event, event)
    if(access) extend(target.access, access)
    return target
  }
}

Koose.mongoose = undefined
Koose.isMongooseModel = ins => ins.__proto__ === Koose.mongoose.Model

module.exports = Koose
