
exports = module.exports = class Model {
  constructor(name) {
    this.name = name
    this._access = []
    this._db = undefined
    this._event = []
  }
  deny(path, method, who){
    return this.access(path, method, who, false)
  }
  access(path, method, who, accessible){
    this._access.push({path, method, who, accessible})
  }
  allow(path, method, who){
    return this.access(path, method, who, true)
  }
}
