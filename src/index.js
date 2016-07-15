const {isObject} = require('./util.js')
const Model = require('./model.js')

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
    if(!this._models[name]) this._models[name] = new Model(name)
    let target = this._models[name]
    if(Koose.mongoose && db) {
      if (!Koose.isMongooseModel(db))
        db = Koose.mongoose.model(name,
          new Koose.mongoose.Schema(db)
        )
      target._db = db
    }
    if(event) target._event = [target._event, ...event]
    if(access) target._access = [target._access, ...access]
    return target
  }
}

Koose.mongoose = undefined
Koose.isMongooseModel = ins => ins.__proto__ === Koose.mongoose.Model

module.exports = Koose
