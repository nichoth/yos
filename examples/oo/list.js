var yo = require('yo-yo')
var observify = require('observify')
var xtend = require('xtend')

function List(opts) {
  if ( !(this instanceof List) ) { return new List(opts); }
  var self = this
  this.state = observify(xtend({
    items: [],
    onclick: function() {}
  }, opts))

  this.state(function onChange(data) {
    self.update(data)
  })

  this.el = this.render(this.state())
}

List.prototype.update = function update(data) {
  yo.update(this.el, this.render(data))
}

List.prototype.render = function render(data) {
  var self = this
  var className = 'example'

  var el = yo`<div class=${className}>
    Random Numbers
    <ul>
      ${data.items.map(function (item) {
        return yo`<li>${item}</li>`
      })}
    </ul>
    <button onclick=${onClick}>Add Random Number</button>
  </div>`

  function onClick(ev) {
    self.state.items.push(Math.random())
    data.onclick(ev)
  }

  return el
}

module.exports = List
