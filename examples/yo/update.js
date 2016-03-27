var yo = require('yo-yo')

module.exports = function(el, newEl) {
  el = typeof el === 'string' ? document.querySelector(el) : el
  return yo.update(el, newEl)
}
