var xtend = require('xtend')
var observify = require('observify')

module.exports = List;

function List(opts) {
  opts = xtend({
    items: [],
    onclick: function(){}
  }, opts)

  var state = observify({
    items: opts.items,
    onclick: function(ev) {
      state.items.push(Math.random())
      opts.onclick(ev)
    }
  })

  return state
}

List.render = function(yo, data) {
  return yo`<div>
    Random Numbers
    <ul>
      ${data.items.map(function (item) {
        return yo`<li>${item}</li>`
      })}
    </ul>
    <button onclick=${data.onclick}>Add Random Number</button>
  </div>`
}
