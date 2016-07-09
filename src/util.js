/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
exports.isObject = function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Mix properties into target object.
 */
exports.extend = function extend (to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}
